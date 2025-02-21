import { SidebarProvider } from "@/components/ui/sidebar";
import HomeNavbar from "@/modules/components/home/home-navbar";
import HomeSidebar from "@/modules/components/home/home-sidebar";
import { AuthProvider } from "../context/auth-context";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <AuthProvider>
      <SidebarProvider>
        <div className="w-full">
          <HomeNavbar />
          <div className="flex min-h-screen pt-[4rem]">
            <HomeSidebar />
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </AuthProvider>
  )
}