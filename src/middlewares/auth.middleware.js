import {User} from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"


//unused param will be _ here its req as req is handled by controller

export const verifyJWT = asyncHandler(async(req, _, next)=> {
       try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
 
        if(!token){
         throw new ApiError(401, "Unauthorized request")
        }
        //pretty quick
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
 
        //query from db using id from decodedToken
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
 
        if(!user) {
         //todo: Frontend discuss
 
         throw new ApiError(401, "Invalid Access Token")
        }
        req.user = user;
        next()
       } catch (error) {
        throw new ApiError(401, error?.message || "Invaid access token" )
       }

})