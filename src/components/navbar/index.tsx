import { ThemeToggle } from "../theme-toogle"
import UserAvatar from "../user-avatar"

export default function Navbar() {
  return (
    <div className="flex justify-between border-b py-2 items-end">
      <p className="text-3xl font-semibold">SkateNextApp</p>
      <div className="flex items-center gap-2">
        <UserAvatar
          src="https://ipfs.skatehive.app/ipfs/Qmdka9mpMbrZnEDwh7VaAX13vkMKyqu21Jp3QQXwZtnGeR?pinataGatewayToken=nxHSFa1jQsiF7IHeXWH-gXCY3LDLlZ7Run3aZXZc8DRCfQz4J4a94z9DmVftXyFE"
          fallback="CN"
        />
        <ThemeToggle />
      </div>
    </div>
  )
}
