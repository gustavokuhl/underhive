import { PiggyBank } from "lucide-react"
import UserAvatar from "../user-avatar"

export default function PostHeader() {
  return (
    <div className="flex justify-between items-end">
      <div className="flex gap-2">
        <UserAvatar
          src="https://ipfs.skatehive.app/ipfs/Qmdka9mpMbrZnEDwh7VaAX13vkMKyqu21Jp3QQXwZtnGeR?pinataGatewayToken=nxHSFa1jQsiF7IHeXWH-gXCY3LDLlZ7Run3aZXZc8DRCfQz4J4a94z9DmVftXyFE"
          fallback="CN"
        />
        <div className="flex flex-col justify-between">
          <div className="flex gap-2 items-end">
            <p className="text-sm font-medium">r4topunk</p>
            <p className="text-xs text-muted-foreground">· 10 hours ago</p>
          </div>
          <p className="text-sm font-light">Título do post</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex text-sm font-normal text-muted-foreground gap-1 items-end ">
          <PiggyBank strokeWidth={1.5} size={20} />
          $13.33
        </div>
      </div>
    </div>
  )
}
