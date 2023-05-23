"use client";
import React from "react";
import signIn from "../../firebase/auth/signin";
import { useRouter } from "next/navigation";
import { Button, Container, Input } from "@mantine/core";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

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
          <Input.Wrapper label="Password">
            <Input
              my={10}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </Input.Wrapper>
          <Button color="blue" variant="default" type="submit">
            Sign up
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Page;
