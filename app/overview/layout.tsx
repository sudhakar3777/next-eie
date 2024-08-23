"use client";
import styles from "../main.module.css";
import { useAppDispatch } from "@/redux-store/hook";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function OverviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const appDispatch = useAppDispatch();

  return (
    <div
      className={`${styles.main_bg} dashboard_bg flex min-h-screen overflow-hidden`}
    >
      <Sidebar />
      <div
        className={
          "h-screen flex flex-1 flex-col mb-2 mr-5 p-5 overflow-y-auto"
        }
      >
        <Navbar />
        <main className={"flex items-center mt-5"}>{children}</main>
      </div>
    </div>
  );
}
