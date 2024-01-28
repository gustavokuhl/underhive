import { PostModel } from "@/app/models/post"
import Image from "next/image"
import PostFooter from "./footer"
import PostHeader from "./header"

interface PostProps {
  post: PostModel
}

export default function Post({ post }: PostProps) {
  return (
    <div className="flex flex-col gap-2">
      {post.title}
      <PostHeader />
      <div className="aspect-video relative">
        <Image
          src={
            "https://ipfs.skatehive.app/ipfs/QmPcNmy6Q1jevgwjrJRBLePMCEWddEP5boC6P1byLe9g7V?pinataGatewayToken=nxHSFa1jQsiF7IHeXWH-gXCY3LDLlZ7Run3aZXZc8DRCfQz4J4a94z9DmVftXyFE"
          }
          alt="Post thumbnail"
          fill
          className="rounded-md"
        />
      </div>
      <PostFooter />
    </div>
  )
}
