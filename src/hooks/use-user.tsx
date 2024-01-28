import HiveClient from "@/lib/hive-client"
import { UserProps } from "@/models/user"

export async function fetchUser(username: string): Promise<UserProps> {
  const response = await HiveClient.database.getAccounts([username])
  if (Array.isArray(response) && response.length > 0)
    return response[0] as UserProps
  return {} as UserProps
}
