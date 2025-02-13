import SideNavigation from "../_components/SideNavigation";

export default function AccountLayout({ children }) {
  return (
    <div className="grid grid-cols-[auto_1fr] md:gap-12 h-full relative">
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
}
