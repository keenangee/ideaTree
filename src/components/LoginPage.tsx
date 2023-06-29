import Link from "next/link";

const LoginPage = () => {
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
        />
        <input
          className="border-2 border-lightest rounded-md p-2 m-2"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button
          className="border-2 border-darkest rounded-md p-2 m-2 bg-primary w-1/2 text-white font-bold text-[1.5rem]"
          type="submit"
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
