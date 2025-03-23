import { HomeNavbar } from "@/modules/home/ui/components/HomeNavbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <HomeNavbar />
      <main className="x-2 md:px-10 py-2">{children}</main>
    </>
  );
};

export default HomeLayout;
