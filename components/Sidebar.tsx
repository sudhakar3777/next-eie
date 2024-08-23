"use client";
import React, { useContext, createContext, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaIndustry } from "react-icons/fa6";
import { RiDashboardHorizontalFill, RiLogoutCircleRFill } from "react-icons/ri";
// import Logo_Tobor from "../app/assets/Logo_Tobor.svg";
import styles from "../app/main.module.css";
import { useAppDispatch } from "@/redux-store/hook";
import Cookies from "js-cookie";
import { HiUserGroup } from "react-icons/hi2";
import { logoutUser } from "@/redux-store/slice/auth.slice";
import { usePathname, useRouter } from "next/navigation";
import SidebarItem from "./SidebarItem";
import { IoNotificationsSharp, IoSpeedometerSharp } from "react-icons/io5";
import { SiHomeassistant } from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";
interface SidebarContextType {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }
  return context;
};

const SidebarData = [
  {
    icon: <SiHomeassistant size={28} />,
    text: "Overview",
    route: "/overview",
    // role: ["SUPERADMIN", "FLEETOWNER"],
  },
  {
    icon: <FaIndustry size={28} />,
    text: "Industries",
    route: "/industries",
    // role: ["SUPERADMIN"],
  },
  {
    icon: <IoNotificationsSharp size={28} />,
    text: "Notifications",
    route: "/notifications",
    // role: ["SUPERADMIN", "FLEETOWNER"],
  },
  {
    icon: <MdSupportAgent size={28} />,
    text: "Support",
    route: "/support",
    // role: ["SUPERADMIN"],
  },
  {
    icon: <IoSpeedometerSharp size={28} />,
    text: "Exceedence",
    route: "/exceedence",
    // role: ["SUPERADMIN", "FLEETOWNER"],
  },
  {
    icon: <RiLogoutCircleRFill size={28} />,
    text: "Logout",
    route: "/",
    // role: ["SUPERADMIN", "FLEETOWNER"],
  },
];

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [expanded, setExpanded] = useState(false);

  const handleSidebarItemClick = (item: any) => {
    if (item.text === "Logout") {
      dispatch(logoutUser(router));
    } else {
      router.push(item.route);
    }
  };
  const role: any = Cookies.get("role");
  const pathname = usePathname();
  return (
    <aside className={`glass_background m-5 rounded-3xl border border-gray-300 ${styles.nav_Card}`}>
      <nav
        className={
          " h-full flex flex-col  shadow-sm border-r border-opacity-25 border-gray-200"
        }
      >
        <div className="p-5 pb-2 flex justify-between item-center w-50 h-50">
          <div
            className={`overflow-hidden transition-all ${
              expanded ? "w-20" : "w-10 ml-2"
            }`}
          >
            {/* <div className="rounded-full bg-gray-100"> */}
            {/* <img
              src={Logo_Tobor.src}
              className="w-full rounded-full"
              alt="Logo"
              style={{ backgroundColor: "#FFFF" }}
            /> */}
            {/* </div> */}
          </div>
          {expanded && (
            <div className="mt-3 ml-2">
              <h4 className="pt-3">TOBOR</h4>
              <span className="text-sm text-gray-400 font-medium text-center font-Montserrat">
                Super Admin
              </span>
            </div>
          )}
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1 rounded-full text-black-500 hover:bg-gray-200 hover:text-black-400 font-[800] ease-in-out"
          >
            {expanded ? (
              <FaAngleLeft size={20}/>
            ) : (
              <FaAngleRight size={15} />
            )}
          </button>
        </div>
        <div className="flex justify-center ml-5 mr-5 mt-6">
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-col">
              {SidebarData?.map(
                (data, index) => (
                  <SidebarItem
                    key={index}
                    icon={data?.icon}
                    text={data.text}
                    active={pathname == data?.route}
                    onClick={() => handleSidebarItemClick(data)}
                  />
                )
              )}
            </ul>
          </SidebarContext.Provider>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
