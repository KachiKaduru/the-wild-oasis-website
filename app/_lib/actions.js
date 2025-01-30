"use server";

import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import { getBookings } from "./data-service";

export async function updateGuestProfile(formData) {
  // console.log(formData);
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");

  const updateData = {
    nationality,
    countryFlag,
    nationalID,
  };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated");

  // TO CLEAR THE BROWSER CACHE IMMEDIATELY AFTER SENDING THE SERVER ACTION
  revalidatePath("/account/profile");
}

export async function updateReservation(formData) {
  // console.log(formData);

  //1.  AUTHENTICATION
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const numGuests = formData.get("numGuests");
  const observations = formData.get("observations");
  const bookingId = formData.get("bookingId");

  //2. AUTHORIZATION
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(Number(bookingId)))
    throw new Error("You are not authorized to update this booking");

  //3. CREATING THE UPDATED DATA OBJECT
  const updatedFields = { numGuests, observations };

  //4. MUTATION
  const { error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", bookingId)
    .select()
    .single();

  //5. ERROR HANDLING
  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }

  //6. REVALIDATION
  revalidatePath(`/account/reservations/edit/${bookingId}`);

  //7. REDIRECTING TO THE RESERVATIONS PAGE
  redirect("/account/reservations");
}

export async function deleteReservation(bookingId) {
  // For testing
  // await new Promise((res) => setTimeout(res, 2000));
  // throw new Error("ERROR NIGGAAAA");

  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error("You are not authorized to delete this booking");

  const { error } = await supabase.from("bookings").delete().eq("id", bookingId);
  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
