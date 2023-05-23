import Image from "next/image";
import { AuthContextProvider } from "../context/AuthContext";

export default function Home() {
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
