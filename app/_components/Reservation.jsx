import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

export default async function Reservation({ cabin }) {
  const [bookedDates, settings] = await Promise.all([
    getBookedDatesByCabinId(cabin.id),
    getSettings(),
  ]);

  return (
    <div className="grid grid-cols-[0.57fr_0.43fr] border border-primary-800 min-h-[400px]">
      <DateSelector cabin={cabin} settings={settings} bookedDates={bookedDates} />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
