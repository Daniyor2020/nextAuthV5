"use server";

import { z } from "zod";
import { LoginSchema } from "@/schemas";

export const login =async (values:z.infer<typeof LoginSchema>)=> {

    const validatedFields = LoginSchema.safeParse(values);
    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Invalid input from server',
            data: {
                errors: validatedFields.error.errors
            }
        };
    }
    return {
        success: true,
        message: 'Login successfullly!',
        data: {
            userName: 'John Doe',
            userId: 1,
        }
    };
    
};