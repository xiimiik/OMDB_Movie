import React, { useState } from "react";
import { Input } from "reactstrap";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import { CustomHead } from "../components/CustomHead";

export default function Index() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchQuery("");
    router.push(`/search/${searchQuery}?page=1`);
  };

  return (
    <div className="h-75 d-flex justify-content-center align-items-center flex-column">
      <CustomHead title={"Home"} />
      <h1 className="mb-5">Search the most exiting movie...</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search!"
          className="w-100 mx-auto"
          bsSize="lg"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </Form>

      <img src="../static/hand.png" alt="Hand" className="h-50" />
    </div>
  );
}
