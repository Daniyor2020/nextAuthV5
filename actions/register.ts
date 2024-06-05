"use server";

import { z } from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";



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

    const { email, password, name } = validatedFields.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await db.user.findUnique({
        where:{
            //@ts-ignore
            email
        
        }
    })

    if(existingUser){
        return {
            success: false,
            message: 'User already exists',
            data: {
                errors: ['User already exists']
            }
        };
    }

  await db.user.create({
        data:{
            //@ts-ignore
            email,
            name,
            password: hashedPassword
        }
    });

    // TODO: Send email verification
    return {
        success: true,
        message: 'User created successfully',
       
    };
    
};