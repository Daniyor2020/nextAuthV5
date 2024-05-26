"use client";
import React from "react";
import * as z from "zod";
import { CardWrapper } from "./card-wrapper";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { register } from "@/actions/register";


export const RegisterForm = () => {
    const [ispending, startTransition] = React.useTransition();
    const [error, setError] = React.useState<string | undefined>();
    const [success, setSuccess] = React.useState<string | undefined>();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: ""
        },

    }); // useForm hook

    const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
        setError(undefined);
        setSuccess(undefined);
        // login(data);
        startTransition(() => {
            register(data).then((res) => {
                if (!res.success) {
                    setError(res.message);
                    return;
                } else {
                    setSuccess(res.message);
                }



            })
        });
    };
    return (
        <CardWrapper
            headerLabel={"Create an account"}
            backButtonLabel="Already have an account? Login here."
            backButtonHref={"/auth/register"}
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="email"> Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={ispending}

                                            {...field}
                                            placeholder='John Doe'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={ispending}
                                            type="email"
                                            {...field}
                                            placeholder="john.doe@example.com"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            disabled={ispending}
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="password">Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" {...field} placeholder="********" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <button
                        disabled={ispending}
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        Login
                    </button>
                </form>
            </Form>
        </CardWrapper>
    );
};
