"use client"

import { PostModel } from "@/models/post"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import Image from "next/image"
import { Badge } from "../ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"
import PostFooter from "./footer"
import PostHeader from "./header"

interface PostProps {
  post: PostModel
}

export default function Post({ post }: PostProps) {
  const hasMoreImages = post.images.length > 1
  return (
    <div className="flex flex-col gap-2">
      <PostHeader post={post} />
      <Carousel className="w-full">
        <CarouselContent>
          {post.images.map((image) => (
            <CarouselItem key={image}>
              <AspectRatio ratio={4 / 3}>
                <Image
                  src={image}
                  alt="Post thumbnail"
                  fill
                  className="sm:rounded-md object-cover"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        {hasMoreImages ? (
          <Badge
            className="pointer-events-none absolute right-2 top-2 rounded-full px-1.5 opacity-75"
            variant={"secondary"}
          >
            {post.images.length}
          </Badge>
        ) : null}
        {hasMoreImages ? <CarouselPrevious className="hidden sm:flex" /> : null}
        {hasMoreImages ? <CarouselNext className="hidden sm:flex" /> : null}
      </Carousel>
      <PostFooter post={post} />
    </div>
  )
}
