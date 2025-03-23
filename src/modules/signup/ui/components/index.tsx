"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignUpPageComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="username"
      />
      <input
        type="text"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
      />
      <button
        onClick={async () => {
          try {
            await axios.post("https://medium-karan.vercel.app/api/signup", {
              username,
              password,
            });

            router.push("/");
          } catch (error) {
            console.error("Signup failed:", error);
          }
        }}
      >
        Sign up
      </button>
    </div>
  );
};

export default SignUpPageComponent;
