import React, { useContext, useState } from "react";
import { Link } from "@reach/router";
import { auth, signInWithGoogle } from "../firebase";

const SignUp = () => {
  return (
    <div className="mt-8">
      <h1 className="text-3xl mb-2 text-center font-bold">Sign Up</h1>
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        <form className="">
          <label htmlFor="displayName" className="block">
            Display Name:
          </label>
          <input
            type="text"
            className="my-1 p-1 w-full "
            name=""
            placeholder="E.g: Faruq"
            id="displayName"
          />
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input
            type="email"
            className="my-1 p-1 w-full"
            name=""
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
          />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            className="mt-1 mb-3 p-1 w-full"
            name=""
            placeholder="Your Password"
            id="userPassword"
          />
          <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white">
            Sign up
          </button>
        </form>
        <p className="text-center my-3">or</p>
        <button
          onClick={() => {
              try{
                signInWithGoogle()
              }
              catch(error){
                console.error('Error signing in with Google', error)
              }
            
          }}
          className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
        >
          Sign In with Google
        </button>
        <p className="text-center my-3">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:text-blue-600">
            Sign in here
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
