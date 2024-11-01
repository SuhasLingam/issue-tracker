"use client";
import React from "react";
import { Button } from "@radix-ui/themes";
import { useState } from "react";
const IssuesPage = () => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const postIssue = async () => {
  //   const req = await fetch("/api/issues", {
  //     method: "POST",
  //     body: JSON.stringify({ title: title, description: description }),
  //   });
  // };

  return (
    <div>
      {/* <h1>Issues</h1>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      /> */}
      <Button>New Issue</Button>
    </div>
  );
};

export default IssuesPage;
