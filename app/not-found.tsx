import React, { FC } from "react";
import Link from "next/link";

const NotFoundPage: FC = () => {
  return (
    <div
      aria-live="assertive"
      className="mx-auto flex h-full max-w-[1360px] flex-col items-center justify-center px-5 sm:px-7 md:px-10 lg:px-20"
    >
      <h1 className="mb-6 text-center text-3xl font-bold text-black md:text-start md:text-4xl lg:text-4xl">
        Oops! This page does not exist.
      </h1>
      <p className="mb-6 text-center text-base text-black md:text-start">
        Can't find what you're looking for? Go back to the main page.
      </p>

      <Link
        href="/"
        className="bg-purple block w-60 rounded-xl py-3 text-center text-white"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
