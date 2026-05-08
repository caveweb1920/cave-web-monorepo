import { Button } from "@cave-web/ui/button";
import { PostList } from "@/components/post-list";
import { AddPost } from "@/components/add-post";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl py-12">
      <h1 className="text-4xl font-bold tracking-tight">Welcome to Cave Web</h1>
      <p className="mt-4 text-lg text-cave-600">
        Start building with our battle‑tested stack.
      </p>
      <div className="mt-10 space-y-8">
        <AddPost />
        <PostList />
      </div>
    </main>
  );
}
