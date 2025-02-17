import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="px-4 py-2 border w-full border-primary-700 bg-red-700 text-primary-50 rounded-sm">
        Sign Out
      </button>
    </form>
  );
}

export default SignOutButton;
