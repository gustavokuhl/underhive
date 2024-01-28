import Navbar from "@/components/navbar"
import Timeline from "@/components/timeline"
import { fetchPosts } from "@/hooks/use-posts"
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query"

export default async function Home() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  })

  return (
    <main
      className={`
      container max-w-[640px] min-h-screen
      flex flex-col
      mx-0 sm:mx-auto
      px-0 sm:px-1
    `}
    >
      <Navbar />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Timeline />
      </HydrationBoundary>
    </main>
  )
}
