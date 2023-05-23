"use client";
import { AuthContextProvider } from "../context/AuthContext";
import { useEffect } from "react";
import addData from "../firebase/firestore/addData";

export default function Home() {
  useEffect(() => {
    // handleForm();
  }, []);

  const handleForm = async () => {
    const data = {
      name: "John snow",
      house: "Stark",
    };
    const { result, error } = await addData("users", "user-id", data);

    if (error) {
      return console.log(error);
    }
  };

  return (
    <AuthContextProvider>
      <h1>This is Home Page</h1>
    </AuthContextProvider>
  );
}
