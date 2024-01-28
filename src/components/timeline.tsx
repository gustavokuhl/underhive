"use client"

import { fetchPosts } from "@/hooks/use-posts"
import { PostModel } from "@/models/post"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import Flex from "./flex"
import Post from "./post"
import { Button } from "./ui/button"

export default function Timeline() {
  const { data } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts })
  const [loadedPosts, setLoadedPost] = useState(10)
  // console.log(data)

  return (
    <div className="flex flex-col gap-6 py-4">
      {data?.slice(0, loadedPosts).map((post) => (
        <Post post={new PostModel(post)} key={post.id} />
      ))}
      {loadedPosts < 100 && (
        <Flex justifyContent="center">
          <Button
            onClick={() => setLoadedPost((loadedPosts) => loadedPosts + 10)}
          >
            Load more {loadedPosts}
          </Button>
        </Flex>
      )}
    </div>
  )
}
