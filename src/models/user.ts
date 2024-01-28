export default class UserModel {
  id: number
  name: string
  created: string
  metadata?: UserMetadata

  constructor(user: UserProps) {
    this.id = user.id
    this.name = user.name
    this.created = user.created
    this.metadata = JSON.parse(user.posting_json_metadata)
  }
}

export interface UserProps {
  id: number
  name: string
  created: string
  posting_json_metadata: string
}

interface UserMetadata {
  profile: {
    profile_image: string
    cover_image: string
    about: string
  }
}
