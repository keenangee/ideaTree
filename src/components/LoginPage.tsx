"use client";

import Link from "next/link";
import { SignInFormData, DisplayName } from "@/types";
import { useState } from "react";
import * as api from "../utils/api";

interface DisplayNameProps {
  setDisplayName: React.Dispatch<React.SetStateAction<DisplayName>>;
}

const LoginPage = ({ setDisplayName }: DisplayNameProps) => {
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formData);
    try {
      const user = await api.signInWithEmail(formData.email, formData.password);
      if (user) {
        setDisplayName({ displayName: user.displayName });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" w-screen h-screen flex flex-col justify-center items-center">
      <h1 className=" text-center text-primary text-[4rem] font-bold">
        Please Login
      </h1>
      <form className="flex flex-col justify-center items-center">
        <input
          className="border-2 border-lightest rounded-md p-2 m-2"
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="border-2 border-lightest rounded-md p-2 m-2"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button
          className="border-2 border-darkest rounded-md p-2 m-2 bg-primary w-1/2 text-white font-bold text-[1.5rem]"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
      <p className="text-center text-primary text-[1.5rem] font-bold">
        Don't have an account?{" "}
        <Link href="/signup" className=" text-lightest hover:text-light">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
