"use client";

import { api } from "@/trpc/client";

export function PostList() {
  const { data: posts, isLoading } = api.post.getAll.useQuery();

  if (isLoading) return <div>Loading posts...</div>;

  return (
    <div className="space-y-4">
      {posts?.map((post) => (
        <article key={post.id} className="rounded-lg bg-white p-4 shadow">
          <h3 className="font-semibold text-cave-900">{post.title}</h3>
          <p className="mt-1 text-cave-600">{post.content}</p>
          <time className="mt-2 block text-xs text-cave-400">
            {new Date(post.createdAt).toLocaleDateString()}
          </time>
        </article>
      ))}
    </div>
  );
}
