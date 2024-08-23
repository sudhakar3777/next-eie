"use client";
import { RootState } from "@/redux-store/store";
import { useDispatch, useSelector } from "react-redux";
// import Breadcrumbs from "./Breadcrumbs";
import Cookies from "js-cookie";
import { IoSettings } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

interface NavbarProps {
  onDateFilterChange: (selectedDay: string) => void;
}

const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  const daysOfWeek = [
    "Today",
    "Last day",
    "Last week",
    "Last month",
    "Last year",
  ];
  const role = Cookies.get("role");

  return (
    <div className="flex items-center justify-between p-8 glass_background rounded-3xl border border-gray-300">
      <div>
        {/* <Breadcrumbs /> */}
        <h1 className="text-slate-700 font-Montserrat text-[1.5rem] font-bold">
          {"Overview"}
        </h1>
      </div>
      <div className="flex items-center text-gray-400 ml-2 pl-1 font-Montserrat bg-transparent Nav_Filter">
        {/* {role && role === USER_ROLE.SUPERADMIN && (
          <form className="border border-slate-500 rounded-md p-1">
            <select
              id="organization"
              onChange={(e) =>
                dispatch(setSelectedOrganization(Number(e.target.value)))
              }
              className="bg-[#061d37] text-gray-400 border-none text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            >
              {organizationList &&
                organizationList?.map((day: { id: number; name: string }) => (
                  <option
                    key={day?.id}
                    value={day?.id}
                    className="bg-transparent"
                  >
                    {day?.name}
                  </option>
                ))}
            </select>
          </form>
        )} */}
{/* 
        <form className="border border-slate-500 rounded-md ml-4 p-1">
          <select
            id="date"
            onChange={(e) => dispatch(setSelectedDay(e.target.value))}
            className="bg-[#061d37] text-gray-400 border-none text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
          >
            {daysOfWeek.map((day) => (
              <option key={day} value={day} className="bg-transparent">
                {day}
              </option>
            ))}
          </select>
        </form> */}

        <button className="relative ml-8">
          <IoSettings className="text-slate-700 font-bold w-6 h-6" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 rounded-full"></span>
        </button>

        <button className="relative ml-4">
          <FaBell className="text-slate-700 font-bold w-6 h-6" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 rounded-full"></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
