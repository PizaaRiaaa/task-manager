import CustomAPIError from "../errors/custom-error.mjs"
const errorHandlerMiddleware = (err, req, res, next) => {
  if(err instanceof CustomAPIError){
    return res.status(404).json({msg: err.message})
  }
  return res.status(500).json({msg: 'Something went wrong, please try again'})
}

export { errorHandlerMiddleware }
