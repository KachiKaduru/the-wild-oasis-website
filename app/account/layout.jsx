import SideNavigation from "../_components/SideNavigation";

export default function AccountLayout({ children }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-12 h-full">
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
}
