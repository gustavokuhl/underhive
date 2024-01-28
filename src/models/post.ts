import { Discussion } from "@hiveio/dhive"

interface PostUser {
  name: string
  pfp: string
}

export class PostModel {
  user: PostUser
  title: string
  permLink: string
  images: string[]
  createdDate: string
  earnings: number
  voters: string[]

  constructor(discussion: Discussion) {
    this.user = {
      name: discussion.author,
      pfp: "",
    } as PostUser
    this.title = discussion.title
    this.permLink = discussion.permlink
    this.images = PostModel.getImages(discussion.json_metadata)
    this.createdDate = discussion.created
    ;(this.earnings = PostModel.getEarnings(
      discussion.total_payout_value.toString(),
      discussion.curator_payout_value.toString(),
      discussion.pending_payout_value.toString()
    )),
      (this.voters = discussion.active_votes
        .sort((a, b) => b.reputation - a.reputation)
        .map((vote) => vote.voter))
  }

  static getEarnings(
    totalPayoutValue: string,
    curatorPayoutValue: string,
    pendingPayoutValue: string
  ): number {
    const totalPayout = parseFloat(totalPayoutValue.toString().split(" ")[0])
    const curatorPayout = parseFloat(
      curatorPayoutValue.toString().split(" ")[0]
    )
    const pendingPayout = parseFloat(
      pendingPayoutValue.toString().split(" ")[0]
    )
    return totalPayout + curatorPayout + pendingPayout
  }

  static getImages(metadataJson: string) {
    const images = JSON.parse(metadataJson).image
    if (Array.isArray(images) && images.length) return images
    return [""]
  }
}
