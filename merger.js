// Both Maps and Objects in JavaScript are used to store key-value pairs, but they have several key differences:
// 1. Key Types:
// Objects: Keys can only be strings or symbols.
// Maps: Keys can be of any data type, including objects, functions, and primitives.
// 2. Key Order:
// Objects: Do not guarantee the order of keys.
// Maps: Maintain the order of insertion of key-value pairs.
// 3. Size:
// Objects: No built-in way to get the number of key-value pairs.
// Maps: Have a size property that returns the number of key-value pairs.
// 4. Iteration:
// Objects: Not directly iterable, require conversion to an array of keys or values first.
// Maps: Directly iterable using for...of loops, providing both keys and values.
// 5. Methods:
// Objects: Limited built-in methods for manipulation.
// Maps: Provide a wider range of methods like set(), get(), has(), delete(), and clear().
// 6. Performance:
// Objects: Generally faster for small datasets.
// Maps: Perform better for large datasets and frequent additions/deletions.
// 7. Prototypes:
// Objects:
// Inherit properties from their prototype chain, which can cause unintended conflicts.
// Maps:
// Do not have a prototype, avoiding potential issues with inherited properties.
// When to Use Each:
// Objects:
// Suitable for simple key-value storage where key order and data type flexibility are not critical.
// Maps:
// Ideal for situations where you need to use non-string keys, maintain insertion order, or frequently add/remove key-value pairs.

const arr1 = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 22 },
    { id: 3, name: "Alice", age: 30 }
];

const arr2 = [
    { id: 2, name: "Jane Doe", location: "NYC" },
    { id: 3, name: "Alice", age: 31, location: "LA" },
    { id: 4, name: "Bob", age: 28 }
];

const mergerFunction = (arr1, arr2, uniqueKey) => {
    const map = new Map();

    arr1.forEach(element => {
        map.set(element[uniqueKey], {...element})
    });

    arr2.forEach(element => {
        if (!map[element[uniqueKey]]) {
            map.set(element[uniqueKey], {...element})
        }
    });

    console.log(map);
}

mergerFunction(arr1,arr2, "id");