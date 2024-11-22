"use client";

import React from "react";
import { fawdeTableData } from "@/app/data/tableData";
import Link from "next/link";
const FawdeTable = () => {
  return (
    <div className="p-4 text-black">
      <div className="flex justify-between items-center my-4">
        <h1 className="text-xl md:text-2xl font-bold mb-4">Fawde Products</h1>
        <Link
          href="/PDF/fawde_list.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primaryOrange text-xs py-4 px-2 text-black font-semibold hover:bg-primaryDarkBlue hover:text-white rounded-lg"
        >
          Download Pamflet
        </Link>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">GENSET</th>
              <th colSpan={4} className="border border-gray-300 px-4 py-2">
                GENSET SPECIFICATION
              </th>
              <th colSpan={4} className="border border-gray-300 px-4 py-2">
                ENGINE SPECIFICATION
              </th>
              <th colSpan={3} className="border border-gray-300 px-4 py-2">
                Sound Proof
              </th>
            </tr>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Fawde</th>

              <th colSpan={2} className="border border-gray-300 px-4 py-2">
                Power (KVA)
              </th>
              <th colSpan={2} className="border border-gray-300 px-4 py-2">
                Power (KW)
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Con100% (L/h)
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Engine Model
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Cyl
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Alternator Model
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Dimensions (LxWxH)
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Weight (Kg)
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Tank (L)
              </th>
            </tr>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Type</th>
              <th className="border border-gray-300 px-4 py-2">Prime</th>
              <th className="border border-gray-300 px-4 py-2">Standby</th>
              <th className="border border-gray-300 px-4 py-2">Prime</th>
              <th className="border border-gray-300 px-4 py-2">Standby</th>
            </tr>
          </thead>
          <tbody>
            {fawdeTableData.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{row.type}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.powerKVA.prime}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.powerKVA.standby}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.powerKW.prime}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.powerKW.standby}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.consumption}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.engineModel}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.cylinders}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.alternatorModel}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.dimensions}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.weight}
                </td>
                <td className="border border-gray-300 px-4 py-2">{row.tank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FawdeTable;
