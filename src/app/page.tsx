import Navbar from "@/components/navbar"
import Timeline from "@/components/timeline"

export default function Home() {
  return (
    <main
      className={`
      container max-w-[640px] mx-auto min-h-screen
      flex flex-col
      px-1 sm:px-0
    `}
    >
      <Navbar />
      <Timeline />
    </main>
  )
}
