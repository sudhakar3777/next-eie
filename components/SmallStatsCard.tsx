import React from "react";

function SmallStatsCard() {
  return (
    <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {earningData.map((item, index) => (
        <div
          key={item.title}
          className={`back_transparent p-1 rounded-3xl  flex flex-col`}
        >
          <div className="p-5 rounded-3xl border border-gray-300 ">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-md"
            >
              {item.icon}
            </button>
            <p className="mt-3">
              <span className="text-[2rem] font-[900] text-slate-700">
                {item.amount}
              </span>
              <span
                className={`text-[1rem] font-[600] text-${item.pcColor} ml-3`}
              >
                {item.percentage}
              </span>
            </p>
            <p className="text-[1rem] text-slate-900 font-[600] mt-1">
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SmallStatsCard;
