"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Card from "./props/Card";

const HomePage = () => {
  const router = useRouter();
  return (
    <div className="text-blue-500 font-bold mt- [2rem]">
      <h1>Home Page!</h1> <br />
      <Link href="/about">Go to About Page!</Link> <br />
      <Link href="/contact">Go to Contact Us Page!</Link> <br />
      <Link href="/navbar">Go to Navbar Page!</Link> <br />
      <Link href="/footer">Go to Footer Page!</Link> <br />
      <br />
      <button
        className="bg-yellow-500 text-white font-bold mt-2 py-2 px-4 rounded hover:bg-yellow-700 cursor-pointer"
        onClick={() => router.push("/about")}
      >
        Go to About Us Page
      </button>{" "}
      <br />
      <button
        className="bg-yellow-500 text-white font-bold mt-2 py-2 px-4 rounded hover:bg-yellow-700 cursor-pointer"
        onClick={() => router.push("/contact")}
      >
        Go to Contact Us Page
      </button>{" "}
      <br />
      <button
        className="bg-yellow-500 text-white font-bold mt-2 py-2 px-4 rounded hover:bg-yellow-700 cursor-pointer"
        onClick={() => router.push("/navbar")}
      >
        Go to Navbar Page
      </button>{" "}
      <br />
      <button
        className="bg-yellow-500 text-white font-bold mt-2 py-2 px-4 rounded hover:bg-yellow-700 cursor-pointer"
        onClick={() => router.push("/footer")}
      >
        Go to Page Footer
      </button>
      {/* <button className="text-yellow-500 font-bold mt- [2rem]" onClick={() => router.push("/about")}>Go to About Us Page</button><br />
      <button className="text-yellow-500 font-bold mt- [2rem]" onClick={() => router.push("/")}>Go to Home Page</button><br/>
      <button className="text-yellow-500 font-bold mt- [2rem]" onClick={() => router.push("/contact")}>Go to Contact Us Page</button><br />
      <button className="text-yellow-500 font-bold mt- [2rem]" onClick={() => router.push("/footer")}>Go to Footer Page</button> */}

      <Card name='Mahar Ahmad Sarfraz' age={38} day='Monday' rollNo={79797} />


      <Card name='Mahar Abdul Hameed' age={75} day='Wednesday' rollNo={1233443} /> 



    </div>
  );
};

export default HomePage;
