// Define a class to standardize the structure of API responses
class apiResponse {
    // Constructor accepts statusCode, data, and an optional message
    constructor(statusCode, data, message = "Success") {
        // The HTTP status code returned by the API (e.g., 200, 404, etc.)
        this.statusCode = statusCode;  

        // The actual data returned from the API, could be an object or array
        this.data = data;

        // The message to describe the response. Default is "Success"
        this.message = message;

        // Calculate if the response was successful based on the statusCode
        // If statusCode is less than 400 (success), set success to true.
        // Otherwise, set success to false (for errors like 400 or 500).
        this.success = statusCode < 400; 
    }
}

// Example of creating a successful response:
let successResponse = new apiResponse(200, { userId: 1, name: 'John Doe' });
// successResponse will have success = true since statusCode (200) is less than 400
console.log(successResponse);  
// Output: apiResponse { statusCode: 200, data: { userId: 1, name: 'John Doe' }, message: 'Success', success: true }

// Example of creating an error response:
let errorResponse = new apiResponse(404, null, "Not Found");
// errorResponse will have success = false since statusCode (404) is greater than or equal to 400
console.log(errorResponse);  
// Output: apiResponse { statusCode: 404, data: null, message: 'Not Found', success: false }


// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)
