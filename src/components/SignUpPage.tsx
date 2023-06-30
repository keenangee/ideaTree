"use client";

import { SignUpFormData, DisplayName } from "@/types";
import { useState } from "react";
import * as api from "../utils/api";

interface SignUpPageProps {
  setDisplayName: React.Dispatch<React.SetStateAction<DisplayName>>;
  setShowSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpPage = ({ setDisplayName, setShowSignUp }: SignUpPageProps) => {
  const [formData, setFormData] = useState<SignUpFormData>({
    username: "",
    email: "",
    password: "",
  });
  const [checkPassword, setCheckPassword] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCheckPassword(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formData.password !== checkPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(formData);
    try {
      const user = await api.signUpWithEmail(
        formData.email,
        formData.password,
        formData.username
      );
      if (user) {
        setDisplayName({ displayName: user.displayName });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    setShowSignUp(false);
  };

  return (
    <div className=" w-screen h-screen flex flex-col justify-center items-center">
      <h1 className=" text-center text-primary text-[4rem] font-bold">
        Sign Up
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
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          className="border-2 border-lightest rounded-md p-2 m-2"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          className="border-2 border-lightest rounded-md p-2 m-2"
          type="password"
          name="password"
          placeholder="Re-enter Password"
          onChange={handleChangePassword}
        />
        <button
          className="border-2 border-darkest rounded-md p-2 m-2 bg-primary w-1/2 text-white font-bold text-[1.5rem]"
          type="submit"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </form>
      <p className="text-center text-primary text-[1.5rem] font-bold">
        Already have an account?{" "}
        <button
          className=" text-lightest hover:text-light"
          onClick={handleClick}
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default SignUpPage;
