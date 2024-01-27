import Post from "./post"

export default async function Timeline() {
  return (
    <div className="flex flex-col gap-6 mt-4">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
