// import { Heart, MessageCircle, Send } from "lucide-react"
import Flex from "../flex"
import UserAvatar from "../user-avatar"

interface PostFooterProps {
  post: {
    permLink: string
    voters: string[]
  }
}

export default function PostFooter({ post }: PostFooterProps) {
  return (
    <Flex justifyContent="between" className="px-2 sm:px-0">
      <PostVoters voters={post.voters} />
      {/* Icons */}
      {/* <Flex className="gap-1 text-muted-foreground">
        <Send size={20} strokeWidth={1.5} />
        <MessageCircle size={20} strokeWidth={1.5} />
        <Heart size={20} strokeWidth={1.5} />
      </Flex> */}
    </Flex>
  )
}

interface PostVotersProps {
  voters: string[]
}

function PostVoters({ voters }: PostVotersProps) {
  const bestReputationVoter: string | null = voters[0] ?? null
  const votesLenght = voters.length - 1

  if (!bestReputationVoter)
    return (
      <p className="text-xs leading-5 font-normal text-muted-foreground">
        No votes yet
      </p>
    )

  return (
    <div className="flex gap-1">
      <div className="flex justify-center-center -space-x-1">
        {voters.slice(0, 3).map((voter) => (
          <UserAvatar
            key={voter}
            src={`https://images.ecency.com/webp/u/${voter}/avatar/small`}
            fallback={voter.slice(0, 2)}
            className="h-4 w-4 ring-2 ring-background"
          />
        ))}
      </div>
      <p className="text-xs leading-5 font-normal text-muted-foreground">
        Voted by <span className="font-medium">{bestReputationVoter}</span>
        {votesLenght && (
          <span>
            {" and "}
            <span className="font-medium">{votesLenght}</span> other
            {votesLenght > 1 ? "s" : ""}
          </span>
        )}
      </p>
    </div>
  )
}
