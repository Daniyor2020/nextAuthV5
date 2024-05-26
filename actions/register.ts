"use server";

import { z } from "zod";
import { RegisterSchema } from "@/schemas";

export const register =async (values:z.infer<typeof RegisterSchema>)=> {

    const validatedFields = RegisterSchema.safeParse(values);
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
        message: 'Register successfullly!',
        data: {
            userName: 'John Doe',
            userId: 1,
        }
    };
    
};