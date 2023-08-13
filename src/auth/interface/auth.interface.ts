import { Document } from "mongoose";

export interface IAuth extends Document{
    username: {
        type: String,
        required: [true]
    },
    name: {
        type: String,
        required: [true]
    },
    password: {
        type: String,
        required: [true]
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    }
}