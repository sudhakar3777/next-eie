"use client"
import { useSidebarContext } from "./Sidebar";

const SidebarItem = ({ icon, text, active, alert, onClick }: { icon: any, text: any, active?: any, alert?: any, onClick?: () => void }) => {
    const { expanded } = useSidebarContext();
    return (
        <li className={`relative flex items-center py-3 px-3 mt-3 font-montserrat 
            rounded-full cursor-pointer transition-colors group hover:text-white text-gray-400
            ${active
                ? "bg-gradient-to-tr from-[#1e293b] to-[#374151] "
                : " text-gray-900"
            }`}

            onClick={onClick}
        >
            <div className={`p-0 ${active ? "text-white" : "text-slate-700"} hover:text-blue-600`}>{icon}</div>
            {/* {alert && (<div className={`absolute left-1 w-full h-full rounded bg-slate-100 transparent ${alert ? "" : "top-2"}`} />)} */}
            <span className={`overflow-hidden transition-all font-[600] ${expanded ? "w-[10rem] ml-3" : "w-0"} ${active ? "text-white" : "text-slate-700"} hover:text-blue-800`}>{text}</span>
            {
                !expanded && (
                    <div className={`absolute left-6 rounded-md ml-6 py-1 px-1 
                        bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 z-50
                        transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                    >
                        {text}
                    </div>
                )
            }
        </li>
    );
}

export default SidebarItem;


