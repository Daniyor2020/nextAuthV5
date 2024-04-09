import React from "react";
import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel={"Welcome back"}
      backButtonLabel="Don't have an account? Sign up here."
      backButtonHref={"/auth/register"}
      showSocial
    >
      login-form
    </CardWrapper>
  );
};
