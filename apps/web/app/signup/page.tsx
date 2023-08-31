"use client"
import axios from "axios";
import { Signup } from "ui";

export default function SignupPage(): JSX.Element {
    async function handleButtonClick(email: string, password: string): void {
        const response = await axios.post("/api/signup", {email, password});
        console.log(response);
    }
    return (
        <>
            <h1>Welcome to Signup Page</h1>
            <Signup onClick={handleButtonClick} />
        </>
    )
}
