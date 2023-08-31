import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"]
    }
}, { timestamps: true });

const User = mongoose.models.Users || mongoose.model("Users", userSchema);

export default User;


