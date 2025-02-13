"use client";

import { updateGuestProfile } from "../_lib/actions";
import { useFormStatus } from "react-dom";

export default function UpdateProfileForm({ guest, children }) {
  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  // const [count, setCount] = useState();

  return (
    <form
      action={updateGuestProfile}
      className="bg-primary-900 py-4 px-6 sm:py-6 sm:px-9 md:py-8 md:px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label className="text-base sm:text-lg">Full name</label>
        <input
          disabled
          defaultValue={fullName}
          name="fullName"
          className="px-3 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label className="text-base sm:text-lg">Email address</label>
        <input
          disabled
          defaultValue={email}
          name="email"
          className="px-3 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-base sm:text-lg" htmlFor="nationality">
            Where are you from?
          </label>
          <img src={countryFlag} alt="Country flag" className="h-5 rounded-sm" />
        </div>

        {children}
      </div>

      <div className="space-y-2">
        <label className="text-base sm:text-lg" htmlFor="nationalID">
          National ID number
        </label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          className="px-3 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-center md:justify-end items-center gap-6">
        <Button />
      </div>
    </form>
  );
}

function Button() {
  const formStatus = useFormStatus();
  const { pending } = formStatus;

  return (
    <button
      className="text-base sm:text-lg bg-accent-500 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? "Updating---" : "Update profile"}
    </button>
  );
}
