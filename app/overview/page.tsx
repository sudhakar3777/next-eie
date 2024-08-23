"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux-store/hook";
import { fetchIndustryList } from "@/redux-store/slice/industry.slice";
import SiteStatsCard from "@/components/SiteStatsCard";
import SmallStatsCard from "@/components/SmallStatsCard";
import IndustryTable from "@/components/IndustryTable";
import MapComponent from "@/components/MapComponent";

Chart.register(ArcElement, Tooltip, Legend);

const OverviewPage = () => {
  const dispatch = useAppDispatch();

  const data = {
    labels: ["Active", "Offline", "Delayed"],
    datasets: [
      {
        label: "Popularity of colours",
        data: [96, 23, 55],
        // you can set indiviual colors for each bar
        backgroundColor: ["#C3E2C2", "#FA7070", "#FFEAA7"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Current Status",
      },
    },
  };

  useEffect(() => {
    dispatch(fetchIndustryList());
  }, [dispatch]);

  return (
    <div className="h-screen w-full">
      {/* <p className="text-bold text-[1rem] text-[500] text-slate-700">Site Information</p> */}
      <div className="flex justify-between gap-5">
        <div className="glass_background rounded-3xl border border-gray-300">
          <SiteStatsCard />
        </div>
        <div className="">
          <div className="glass_background rounded-3xl border border-gray-300 p-5">
            <Pie data={data} options={options} />
          </div>
        </div>
      </div>
      <div className="glass_background h-[20rem] rounded-3xl border border-gray-300 mt-5">
          <div className="rounded-3xl border border-gray-300 ">
            <MapComponent />
          </div>
        </div>
      {/* <SmallStatsCard /> */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-6 ">
        <div className="p-1 rounded-3xl back_transparent h-[44.2rem]">
          <div className="p-5 rounded-3xl border border-gray-300 ">
            <div className="flex justify-between items-center gap-2 mb-10">
              <p className="text-xl font-semibold">Industry Status Overview</p>
            </div>
            <div className="md:w-full overflow-auto ">
              <Pie data={data} options={options} />
            </div>
          </div>
        </div>
        <div className="p-1 rounded-3xl back_transparent  h-[44.2rem]">
          <div className="rounded-3xl border border-gray-300 ">
            <MapComponent />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="p-1 rounded-3xl back_transparent h-[44rem]">
          <IndustryTable />
        </div>
      </div>
      <div className="mt-20 w-1 h-1"></div>
    </div>
  );
};

export default OverviewPage;
