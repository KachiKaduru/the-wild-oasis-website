import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import UserArea from "./UserArea";

function Header() {
  return (
    <header className="border-b border-primary-900 px-6 py-3 sm:px-8 sm:py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />

        <Navigation>
          <UserArea />
        </Navigation>
      </div>
    </header>
  );
}

export default Header;
