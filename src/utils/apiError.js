/*APIError extends the built-in Error class, which means it inherits all properties and methods of the Error object, including the message and stack properties.
This allows APIError to behave like a regular JavaScript error while also adding custom properties.*/

class APIError extends Error {
    constructor( 
        statusCode, // The HTTP status code for the error
        message="Something went wrong", // The error message to be returned, default is "Something went wrong"
        errors=[], // Optional array to store additional errors, such as validation errors
        statck="" // Optional error stack, could be passed to provide additional debugging information
    )
    { 
        super(message) // Calls the parent (Error) class constructor with the message
        this.statusCode = statusCode // The status code of the error (e.g., 400, 404, 500)
        this.data = null // This could store any additional data associated with the error, default is null
        this.errors = errors // Stores any specific errors, useful for detailed error reporting
        this.message = message // The message provided during construction
        this.success = false // A flag to indicate if the API call was successful, set to false for errors

        // If the statck is provided (custom error stack), use it, otherwise capture the stack trace
        if (statck) {
            this.statck = statck // Custom error stack passed during instantiation
        } else {
            // Captures the stack trace from where the error was created (default behavior)
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { APIError };
