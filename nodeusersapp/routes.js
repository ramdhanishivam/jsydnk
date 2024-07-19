const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === "/"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write('<body><div>Hello there</div><form action="/createuser" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body>');
        res.write("<html>");
        return res.end();
    }
    if (url === "/users" && method === "GET") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<body><ul><li>shivam</li><li>sakshi</li></ul></body>");
        res.write("<html>");
        return res.end();
    }
    if (url === "/createuser" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });

        req.on("end", () => {
            const parsedbody = Buffer.concat(body).toString();
            const user = parsedbody.split("=")[1];
            console.log(user);
            res.setHeader("Location", "/");
            return res.end();
        });
    }
}

module.exports = requestHandler;