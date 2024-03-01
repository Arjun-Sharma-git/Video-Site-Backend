import { User } from './user.model';

const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    subscriber: {
        type: Schema.Types.ObjectId,
        ref : "User"
    },
    channel:{
        type: Schema.Types.ObjectId,// one to whom user is subscribing
        ref : "User"
    }
},{timestamps: true});

export const Subscription = mongoose.model('Subscription', subscriptionSchema);
