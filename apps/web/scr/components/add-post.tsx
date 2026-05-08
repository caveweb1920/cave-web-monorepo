"use client";

import { useState } from "react";
import { Button } from "@cave-web1920/ui/button";
import { Input } from "@cave-web1920/ui/input";
import { api } from "@/trpc/client";

export function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const utils = api.useUtils();
  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      setTitle("");
      setContent("");
      utils.post.getAll.invalidate();
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost.mutate({ title, content });
      }}
      className="space-y-4 rounded-lg border border-cave-200 p-6"
    >
      <Input
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full rounded-md border border-cave-300 p-2"
        rows={3}
        placeholder="Write something..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit" disabled={createPost.isLoading}>
        {createPost.isLoading ? "Posting..." : "Add Post"}
      </Button>
    </form>
  );
}
