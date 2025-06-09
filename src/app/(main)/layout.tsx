import Header from "@/components/header";
import SideBar from "@/components/sidebar";

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
