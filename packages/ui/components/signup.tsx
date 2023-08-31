"use client"
import React, { useState } from "react";

interface SignupProps {
    onClick: (email: string, password: string) => void;
}

export function Signup({ onClick }: SignupProps): JSX.Element {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleButtonClick = (): void => {
        onClick(email, password);
    };

    return (
        <div>
            <input
                className="text-red"
                onChange={(e): void => setEmail(e.target.value)}
                placeholder="Email"
                type="text"
                value={email}
            />
            <input
                onChange={(e): void => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                value={password}
            />
            <button onClick={handleButtonClick} type="button">
                Submit
            </button>
        </div>
    );
}
