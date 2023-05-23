"use client";
import React from "react";
import signUp from "../../firebase/auth/signup";
import { useRouter } from "next/navigation";
import { Container, Input } from "@mantine/core";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/admin");
  };
  return (
    <Container size="30rem" px={0} mt={50}>
      <div className="form-wrapper">
        <form onSubmit={handleForm} className="form">
          <Input.Wrapper label="Email">
            <Input
              my={10}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </Input.Wrapper>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </Container>
  );
}

export default Page;
