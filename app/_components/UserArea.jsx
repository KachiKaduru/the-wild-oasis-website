import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function UserArea() {
  const session = await auth();

  return (
    <div>
      <Link
        href="/account/profile"
        className="hover:text-accent-400 transition-colors flex gap-3 items-center relative"
      >
        <img
          src={session.user.image}
          alt={session.user.name}
          referrerPolicy="no-referrer"
          className="h-8 rounded-full"
        />
        {/* <span>{session.user.name.split(" ").at(0)}</span> */}
      </Link>
    </div>
  );
}
