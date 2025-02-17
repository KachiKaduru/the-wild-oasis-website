import { auth } from "../_lib/auth";
import { getBookings } from "../_lib/data-service";

export const metadata = {
  title: "Guest Area",
};

export default async function AccountPage() {
  const session = await auth();

  const firstName = session?.user?.name.split(" ").at(0);
  const bookings = await getBookings(session?.user?.guestId);

  return (
    <div className="overflow-y-scroll h-[76vh]">
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">Welcome, {firstName}</h2>

      <div>
        <p className="text-lg">
          You have made {bookings.length === 0 ? "no" : `a total of ${bookings.length}`}{" "}
          reservations
        </p>
      </div>
    </div>
  );
}
