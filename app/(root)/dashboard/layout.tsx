import type { Metadata } from "next";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export const metadata: Metadata = {
  title: "OGs Dashboard ",
  description: "OGS Games is company that sells card games.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full pt-16 ">{children}</main>
      </div>
    </>
  );
}
