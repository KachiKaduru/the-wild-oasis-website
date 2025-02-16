import { auth } from "../_lib/auth";
import UserAreaListItem from "./UserAreaListItem";

export default async function UserArea() {
  const session = await auth();

  return <UserAreaListItem session={session} />;
}
