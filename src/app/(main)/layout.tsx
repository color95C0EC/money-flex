import Header from "@/app/components/header";
import SideBar from "@/app/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header></Header>
      <SideBar></SideBar>
      {children}
    </main >
  );
}
