import { PostModel } from "@/models/post"
import Image from "next/image"
import PostFooter from "./footer"
import PostHeader from "./header"

interface PostProps {
  post: PostModel
}

export default function Post({ post }: PostProps) {
  return (
    <div className="flex flex-col gap-2">
      <PostHeader post={post} />
      <div className="aspect-video relative">
        <Image
          src={post.thumbnail}
          alt="Post thumbnail"
          fill
          className="rounded-md"
        />
      </div>
      <PostFooter post={post} />
    </div>
  )
}
