import React, { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return <p style={{ color: "red" }}>{children}</p>;
};

export default ErrorMessage;
