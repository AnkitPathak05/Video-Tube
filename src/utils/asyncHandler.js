const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err)=>next(err));
    }
}

export {asyncHandler} 

// const asyncHandler = ()=>{}
// const asyncHandler = ()=> ()=>{}

    // using async await

/*const asyncHandler = (fn)=> {
    return async (req, res, next)=>{
        try{
            await fn(req, res, next)
        }
        catch(error){
            res.status(error.code || 500).json({
                success: false,
                message: error.message
            });
        }
    }
}/*

/*asyncHandler is a higher-order function.
A higher-order function is a function that takes another function as an argument and possibly returns a new function.

Why is asyncHandler needed?
In Express.js, if an asynchronous function throws an error, you need to explicitly pass that error to the next function for the Express error-handling middleware to catch it. Without this, your server might crash or not handle the error properly.

Different Variations 

Version 1: The normal function
const asyncHandler = () => {};
This is a simple function 

Version 2: The higher-order function
const asyncHandler = (func) => {
  return () => {};
};
Takes a function (func) as an argument.
Returns a new function.

Version 3: The higher-order async function
const asyncHandler = (func) => {
  return async () => {};
};
Same as above, but the returned function is asynchronous (async).
Used when the inner function (func) involves asynchronous operations.*/