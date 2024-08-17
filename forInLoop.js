const object = {"a":1,"b":2};
for (const key in object) {
    console.log(key);
    console.log(object[key]);
}

// this loop iterates over the key/properties of an object.
// Enumerable properties are those that can be iterated 
// over by for...in loops and retrieved by Object.keys().