"use client";
import { AuthContextProvider } from "../context/AuthContext";
import { useEffect } from "react";
import addData from "../firebase/firestore/addData";
import { Container } from "@mantine/core";
import getDoument from "../firebase/firestore/getData";

export default function Home() {
  useEffect(() => {
    async function fetchData() {
      let data = await getDoument("users");
      console.log(data);
    }
    fetchData;
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
      <Container>This is Home Screen</Container>
    </AuthContextProvider>
  );
}
