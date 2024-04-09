"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: any;
    mode?: "modal" | "redirect";
    asChild?: boolean;
};

export const LoginButton = (props: LoginButtonProps) => {
    const { children, mode, asChild } = props;
    const router = useRouter();

    const handleClick = () => {
        if (mode === "modal") {
            console.log("modal");
        } else {
            router.push("/auth/login");
        }
    };




    if (mode === "modal") {
        return (
            <span>
                Todo: Implement modal
            </span>
        );
    }

    return (
        <span className="cursor-pointer" onClick={handleClick}>
            {children}
        </span>
    );
};