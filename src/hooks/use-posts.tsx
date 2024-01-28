import HiveClient from "@/lib/hive-client"
import { Discussion } from "@hiveio/dhive"

const SKATEHIVE_TAG = "hive-173115"
export const SWR_POSTS_TAG = "posts"

export async function fetchPosts(): Promise<Discussion[] | undefined> {
  const posts = await HiveClient.database.getDiscussions("created", {
    tag: SKATEHIVE_TAG,
    limit: 100,
  })
  return posts
}
