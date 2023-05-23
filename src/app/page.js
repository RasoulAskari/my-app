"use client";
import { AuthContextProvider } from "../context/AuthContext";
import { useEffect } from "react";
import addData from "../firebase/firestore/addData";
import { Container } from "@mantine/core";

export default function Home() {
  useEffect(() => {}, []);

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
      <Container>This is Home Screen</Container>
    </AuthContextProvider>
  );
}
