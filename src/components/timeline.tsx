"use client"

import { PostModel } from "@/app/models/post"
import { fetchPosts } from "@/hooks/use-posts"
import { useQuery } from "@tanstack/react-query"
import Post from "./post"

export default function Timeline() {
  const { data } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts })

  return (
    <div className="flex flex-col gap-6 mt-4">
      {data?.slice(0, 10).map((post) => (
        <Post post={new PostModel(post)} key={post.id} />
      ))}
    </div>
  )
}
