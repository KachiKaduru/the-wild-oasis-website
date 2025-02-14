import MenuIcon from "../_components/MenuIcon";
import SideNavigation from "../_components/SideNavigation";

export default function AccountLayout({ children }) {
  return (
    <div className="grid md:grid-cols-[auto_1fr] md:gap-12 h-full relative">
      <SideNavigation />
      <div>
        <MenuIcon className="md:hidden" />
        {children}
      </div>
    </div>
  );
}
