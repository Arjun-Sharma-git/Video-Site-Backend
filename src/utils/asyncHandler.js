//const asyncHandler = () => {}


const asyncHandler = (requestHandler) => {
     return (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}

export  default asyncHandler














// const asyncHandler = () => {}
//passing a fn
// const asyncHandler = (fn) => {}
//passing a fn to async fn (omitted the brackets {} on the callback fn)
// const asyncHandler = (fn) => async() => {}



//export {asyncHandler}


//with async await
// const asyncHandler = (fn) => async(req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }