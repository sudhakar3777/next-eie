//"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux-store/store";
import { useRouter } from "next/navigation";

const getStateFromAddress = (address: string): string => {
  //Remove any hyphens from the address
  address = address.replace("-", "");

  // Split the address into an array of words
  const addressArray = address.split(" ");
  const len = addressArray.length;

  // Check if the third-last word exists and if it is "Pradesh"
  if (addressArray[len - 3]) {
    if (addressArray[len - 3].toLowerCase() === "pradesh") {
      // If "Pradesh" is found, return the two words before it
      return addressArray[len - 4] + " " + addressArray[len - 3];
    }
    // Otherwise, return the third-last word
    return addressArray[len - 3];
  }
  return addressArray[len - 1];
};

const IndustryTable = () => {
  const navigate = useRouter();
  const industryList = useSelector(
    (state: RootState) => state.industryData.industryList
  );
  const header = [
    // { key: 1, title: "S No." },
    { key: 1, title: "Industry ID" },
    { key: 2, title: "Industry Name" },
    { key: 3, title: "Device Status" },
    { key: 4, title: "Data Uploaded On" },
    { key: 5, title: "State" },
    { key: 6, title: "Category" },
    { key: 7, title: "Confiuration Date" },
  ];

  return (
    <div className="bg-gradient-to-r from-gradientStart to-gradientEnd  shadow-lg p-4  h-[45rem] w-full rounded-custom">
      <h2 className=" ml-5 mb-5 text-black text-xl font-semibold  leading-5 w-[100%] font-montserrat">
        Industry Insight
      </h2>
      <div className="overflow-hidden rounded-lg tableLan">
        <div className="overflow-y-auto  h-[40rem] scrollbar-hide">
          {" "}
          {/* This div makes the table scrollable */}
          <table className="min-w-full bg-gradient-to-r from-gradientStart to-gradientEnd">
            <thead className="bg-gradient-to-r from-slate-950 to-slate-800 sticky top-0 h-18 round-full">
              <tr className="rounded-t-xl rounded-b-xl font-Montserrat">
                {header.map((item, key) => (
                  <th
                    key={item.key}
                    className="py-4 px-4 text-slate-300 font-Montserrat text-[.87rem] text-[700] text-left first:rounded-tl-lg last:rounded-tr-lg"
                  >
                    {item.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              {industryList?.map((item: any, index: any) => (
                <tr
                  key={item?.id}
                  className="text-left border-gray-800 font-Montserrat cursor-pointer hover:bg-slate-100"
                  onClick={() => navigate.push(`/industry/${item?.id}`)}
                >
                  <td className="py-4 px-4 text-cyan-800 text-[.87rem] text-[600] font-Montserrat r">
                    {item?.id || "N/A"}
                  </td>
                  <td className="px-4 text-cyan-800 text-[.87rem] text-[600] font-Montserrat">
                    {item?.name || "N/A"}
                  </td>
                  <td className="px-4 text-cyan-800 text-[.87rem] text-[600] font-Montserrat">
                    {item?.devices.map((e: any) => (
                      <>
                        <span
                          className={`flex p-[6px] text-slate-200 rounded-md text-xs m-1 ${
                            e?.offline_notified
                              ? "bg-green-500"
                              : "bg-[#de4141]"
                          }`}
                        >
                          {e?.offline_notified ? "Online" : "Offline"}
                        </span>
                      </>
                    ))}
                  </td>

                  <td className="flex-1 px-4 text-cyan-800 text-[.87rem] font-Montserrat leading-[2rem]">
                    {item?.devices.map((e: any, index: number) => (
                      <h5 key={index}>
                        {e.data_uploaded
                          // ? moment(e.data_uploaded).format("DD-MM-YYYY")
                          // : "N/A"
                          }
                      </h5>
                    ))}
                  </td>

                  <td className="px-4 text-cyan-800 text-[.87rem] text-[600] font-Montserrat">
                    {getStateFromAddress(item?.state) || "N/A"}
                  </td>
                  <td className="px-4 text-cyan-800 text-[.87rem] text-[600] font-Montserrat">
                    {item?.industry_type || "N/A"}
                  </td>

                  <td className="flex-1 px-4 text-cyan-800 text-[.87rem] font-Montserrat leading-[2rem]">
                    {item?.created}
                    {/* {item?.created ? moment().format("DD-MM-YYYY") : "N/A"} */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IndustryTable;
