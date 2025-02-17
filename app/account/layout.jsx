import SideNavigation from "../_components/SideNavigation";

export default function AccountLayout({ children }) {
  return (
    <div className="flex gap-4 sm:gap-8 relative md:sticky md:top-[0px] md:grid md:grid-cols-[auto_1fr] md:gap-12 h-full ">
      <SideNavigation />
      <div className="w-full">{children}</div>
    </div>
  );
}
