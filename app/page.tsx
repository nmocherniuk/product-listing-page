import React, { FC } from "react";
import Link from "next/link";

const Home: FC = () => {
  return (
    <section className="flex min-h-[65vh] items-center justify-center">
      <div className="flex h-full flex-col items-center">
        <h1 className="mb-3 max-w-[430px] text-center text-[28px] font-semibold leading-10 text-black sm:max-w-[482px] sm:text-[33px] lg:mb-5 lg:max-w-full lg:text-4xl">
          Find Everything You Need in One Place!
        </h1>
        <p className="mb-4 max-w-[428px] text-center text-base font-light leading-5 text-black lg:mb-5 lg:max-w-[568px] lg:text-lg">
          Browse hundreds of products, sort by price, filter by categories, and
          discover the perfect item for you or your loved ones.
        </p>
        <Link
          href="/products"
          className="bg-purple block w-60 rounded-xl py-3 text-center text-white"
        >
          Explore Catalog
        </Link>
      </div>
    </section>
  );
};

export default Home;
