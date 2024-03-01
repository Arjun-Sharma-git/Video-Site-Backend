import mongoose,{Schema} from 'mongoose'
import User from './user.model';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const videoSchema = new mongoose.Schema({
    videoFile: {
        type: String, //cloudinary url
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref:"User "
    }
},{timestamps:true});

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model('Video', videoSchema);
