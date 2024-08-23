import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { FaIndustry } from "react-icons/fa";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function SiteStatsCard() {
  return (
    <div className="p-5">
      {/* <div className=" border border-gray-300 p-5 rounded-3xl"> */}
      <p className="text-[1.5rem] font-[600] text-slate-700 ">
        Site Information
      </p>
      <div className="flex justify-around mt-3 gap-5">
        <div className="w-full  p-5 rounded-2xl flex flex-cols justify-between">
          <div>
            <div className="flex justify-center items-center">
              <FaIndustry className="w-6 h-6 text-blue-500" />
              <p className="text-[1.2rem] font-[500] text-gray-600 ml-3">
                Total Sites
              </p>
            </div>
            {/* <div className="flex items-center gap-3 "> */}
            <h1 className="text-[2rem] font-[900] text-slate-700">200</h1>
            <h4 className="text-[1rem] font-[600] text-red-500">- 2%</h4>
            {/* </div> */}
          </div>
          <div className="w-40"></div>
        </div>
        <div className="back_transparent p-1 rounded-2xl w-full">
          <div className="border border-gray-300 p-5 rounded-2xl flex flex-cols justify-between">
            <div>
              <div className="flex justify-center items-center">
                <FaIndustry className="w-6 h-6 text-green-500" />
                <p className="text-[1.2rem] font-[500] text-gray-600 ml-3">
                  Active Sites
                </p>
              </div>
              {/* <div className="flex items-center gap-3 "> */}
              <h1 className="text-[2rem] font-[900] text-slate-700">112</h1>
              <h4 className="text-[1rem] font-[600] text-green-500">+ 5%</h4>
              {/* </div> */}
            </div>
            <div className="w-40"></div>
          </div>
        </div>
        <div className="back_transparent p-1 rounded-2xl w-full">
          <div className="border border-gray-300 p-5 rounded-2xl flex flex-cols justify-between">
            <div>
              <div className="flex justify-center items-center">
                <FaIndustry className="w-6 h-6 text-red-500" />
                <p className="text-[1.2rem] font-[500] text-gray-600 ml-3">
                  In-active Sites
                </p>
              </div>
              {/* <div className="flex items-center gap-3 "> */}
              <h1 className="text-[2rem] font-[900] text-slate-700">80</h1>
              <h4 className="text-[1rem] font-[600] text-green-500">+ 8%</h4>
              {/* </div> */}
            </div>
            <div className="w-40"></div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default SiteStatsCard;

{/* <div className="flex justify-around mt-3 gap-5">
        <div className="w-full  p-5 rounded-2xl flex flex-cols justify-between">
          <div>
            <div className="flex justify-center items-center">
              <FaIndustry className="w-6 h-6 text-blue-500" />
              <p className="text-[1.2rem] font-[500] text-gray-600 ml-3">
                Total Sites
              </p>
            </div>
            <h1 className="text-[2rem] font-[900] text-slate-700">200</h1>
            <h4 className="text-[1rem] font-[600] text-red-500">- 2%</h4>
          </div>
          <div className="w-40"></div>
        </div>
        <div className="back_transparent p-1 rounded-2xl w-full">
          <div className="border border-gray-300 p-5 rounded-2xl flex flex-cols justify-between">
            <div>
              <div className="flex justify-center items-center">
                <FaIndustry className="w-6 h-6 text-green-500" />
                <p className="text-[1.2rem] font-[500] text-gray-600 ml-3">
                  Active Sites
                </p>
              </div>
              <h1 className="text-[2rem] font-[900] text-slate-700">112</h1>
              <h4 className="text-[1rem] font-[600] text-green-500">+ 5%</h4>
            </div>
            <div className="w-40"></div>
          </div>
        </div>
        <div className="back_transparent p-1 rounded-2xl w-full">
          <div className="border border-gray-300 p-5 rounded-2xl flex flex-cols justify-between">
            <div>
              <div className="flex justify-center items-center">
                <FaIndustry className="w-6 h-6 text-red-500" />
                <p className="text-[1.2rem] font-[500] text-gray-600 ml-3">
                  In-active Sites
                </p>
              </div>
              <h1 className="text-[2rem] font-[900] text-slate-700">80</h1>
              <h4 className="text-[1rem] font-[600] text-green-500">+ 8%</h4>
            </div>
            <div className="w-40"></div>
          </div>
        </div>
      </div> */}