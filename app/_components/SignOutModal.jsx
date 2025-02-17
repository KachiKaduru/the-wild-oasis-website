"use client";

import { useReservation } from "../_contexts/ReservationContext";
import SignOutButton from "./SignOutButton";

export default function SignOutModal() {
  const { showModal, closeModal } = useReservation();

  return (
    <section>
      {/* {showModal && (
        
      )} */}

      {showModal && (
        <aside className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-40">
          <div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
            onClick={closeModal}
          />

          <div className="flex flex-col gap-6 bg-primary-800 px-7 py-10 rounded-md z-50">
            <h4>Are you sure you want to sign out?</h4>

            <span className="grid grid-cols-2 gap-6 justify-between">
              <Button onClick={closeModal}>Cancel</Button>
              <SignOutButton />
            </span>
          </div>
        </aside>
      )}
    </section>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      className="px-4 py-2 border w-full border-primary-700 bg-primary-200 text-primary-900 rounded-sm"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
