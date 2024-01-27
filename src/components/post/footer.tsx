import { Heart, MessageCircle, Send } from "lucide-react"
import Flex from "../flex"
import UserAvatar from "../user-avatar"

export default function PostFooter() {
  return (
    <Flex justifyContent="between">
      {/* Voted by */}
      <div className="flex gap-1">
        {/* Avatar stack */}
        <div className="flex justify-center-center -space-x-1 overflow-hidden">
          <UserAvatar
            src="https://images.ecency.com/webp/u/web-gnar/avatar/small"
            fallback=""
            className="h-4 w-4 ring-2 ring-white"
          />
          <UserAvatar
            src="https://images.ecency.com/webp/u/steemskate/avatar/small"
            fallback=""
            className="h-4 w-4 ring-2 ring-white"
          />
          <UserAvatar
            src="https://images.ecency.com/webp/u/xvlad/avatar/small"
            fallback=""
            className="h-4 w-4 ring-2 ring-white"
          />
        </div>
        <p className="text-xs leading-5 font-normal text-muted-foreground">
          Voted by <span className="font-medium">vlad</span> and more{" "}
          <span className="font-medium">300</span>
        </p>
      </div>

      {/* Icons */}
      <Flex className="gap-1 text-muted-foreground">
        <Send size={20} strokeWidth={1.5} />
        <MessageCircle size={20} strokeWidth={1.5} />
        <Heart size={20} strokeWidth={1.5} />
      </Flex>
    </Flex>
  )
}
