import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="container mx-auto ">
      <div className="my-32 flex flex-col justify-center items-center gap-6">
        <h1 className="text-5xl font-bold">Oops!</h1>
        <p className="text-2xl text-black/70 font-medium text-center">Sorry, an unexpected error has occurred.</p>
        <p>
          <i className="text-base text-black/40">{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
