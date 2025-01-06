export function handler(event) {
    console.log(event);
    console.log("hello");

    return {
        statusCode: 200, // HTTP status code (200 means OK)
        body: JSON.stringify({ message: "Hello, world!" }), // Response body in JSON format
    };
}