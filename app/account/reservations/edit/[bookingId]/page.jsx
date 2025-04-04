import { updateReservation } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";
import EditFormButton from "./EditFormButton";
import { auth } from "@/app/_lib/auth";

export default async function Page({ params }) {
  const { bookingId } = params;

  const { id, numGuests, observations, cabinID } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinID);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">Edit Reservation #{id}</h2>

      <form
        action={updateReservation}
        className="bg-primary-900 py-4 px-6 sm:py-6 sm:px-9 md:py-8 md:px-12 text-lg flex gap-6 flex-col"
      >
        <input type="hidden" name="bookingId" value={bookingId} />

        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            defaultValue={numGuests}
            className="px-3 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">Anything we should know about your stay?</label>
          <textarea
            name="observations"
            className="px-3 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            defaultValue={observations}
          />
        </div>

        <div className="flex justify-center md:justify-end items-center gap-6">
          <EditFormButton />
        </div>
      </form>
    </div>
  );
}
