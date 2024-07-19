const fs = require("fs");

function routes(req, res) {
    try {
        if (req.url === "/") {
            res.setHeader("Content-Type", "text/html");
            res.write("<html>");
            res.write("<body>");
            res.write('<form method="POST" action="/message"><input type="text" name="message"><button type="submit">Send</form>');
            res.write("</body>");
            res.write("</html>");
            return res.end();
        }
        if (req.url === "/message" && req.method === "POST") {
            const body = [];
            req.on('data', (chunk) => {
                console.log(chunk);
                body.push(chunk);
            });
            return req.on("end", () => {
                const parsedbody =Buffer.concat(body).toString();
                const message = parsedbody.split("=")[1];
                fs.writeFile("message.txt", message, (err) => {
                    res.statusCode = 302;
                    res.setHeader("Location", "/");
                    return res.end();
                });
            });
        }
    
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<body>");
        res.write('<div>Shivam</div>');
        res.write("</body>");
        res.write("</html>");
        res.end();
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = routes;