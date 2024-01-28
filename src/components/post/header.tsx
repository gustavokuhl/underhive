import { fetchUser } from "@/hooks/use-user"
import UserModel from "@/models/user"
import { useQuery } from "@tanstack/react-query"
import { PiggyBank } from "lucide-react"
import moment from "moment"
import UserAvatar from "../user-avatar"

export interface PostHeaderProps {
  post: {
    user: {
      name: string
    }
    createdDate: string
    title: string
    earnings: number
  }
}

export default function PostHeader({ post }: PostHeaderProps) {
  const { data: userData } = useQuery({
    queryKey: ["user", post.user.name],
    queryFn: () => fetchUser(post.user.name),
  })

  const user = userData ? new UserModel(userData) : null

  return (
    <div className="flex justify-between items-end">
      <div className="flex gap-2">
        <UserAvatar
          src={user?.metadata?.profile.profile_image || ""}
          fallback={post.user.name.slice(0, 1).toUpperCase()}
        />
        <div className="flex flex-col justify-between">
          <div className="flex gap-2 items-end">
            <p className="text-sm font-medium">{post.user.name}</p>
            <p className="text-xs text-muted-foreground">
              · {moment.utc(post.createdDate).fromNow()}
            </p>
          </div>
          <p className="text-sm font-light">{post.title}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex text-sm font-normal text-muted-foreground gap-1 items-end ">
          <PiggyBank strokeWidth={1.5} size={20} />${post.earnings.toFixed(2)}
        </div>
      </div>
    </div>
  )
}
