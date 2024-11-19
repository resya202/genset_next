"use client";

import { cumminsTableData } from "@/app/data/tableData";
import Link from "next/link";
import React from "react";

const CumminsTable = () => {
  return (
    <div className="p-4 text-black">
      <div className="flex justify-between items-center my-4">
        <h1 className="text-2xl font-bold mb-4">Cummins Products</h1>
        <Link
          href="/PDF/cummins_list.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primaryOrange p-4 text-black font-semibold hover:bg-primaryDarkBlue hover:text-white rounded-lg"
        >
          Download Pamflet
        </Link>
      </div>
      <div className="overflow-x-auto max-w-full">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th rowSpan={1} className="border border-gray-300 px-4 py-2">
                GENSET
              </th>
              <th
                colSpan={5}
                className="border border-gray-300 px-4 py-2 text-center"
              >
                ENGINE SPECIFICATION 50Hz, 1500rpm
              </th>
              <th
                colSpan={5}
                className="border border-gray-300 px-4 py-2 text-center"
              >
                ENGINE SPECIFICATION 60Hz, 1800rpm
              </th>
              <th
                rowSpan={1}
                colSpan={2}
                className="border border-gray-300 px-4 py-2"
              >
                Engine Specification
              </th>
              <th rowSpan={1} className="border border-gray-300 px-4 py-2">
                Alternator
              </th>
              <th
                colSpan={3}
                className="border border-gray-300 px-4 py-2 text-center"
              >
                OPEN TYPE
              </th>
              <th
                colSpan={3}
                className="border border-gray-300 px-4 py-2 text-center"
              >
                SOUND PROOF
              </th>
            </tr>
            <tr>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Cummins Type
              </th>
              <th
                colSpan={2}
                className="border border-gray-300 px-4 py-2 text-center"
              >
                POWER (KVA)
              </th>
              <th
                colSpan={2}
                className="border border-gray-300 px-4 py-2 text-center"
              >
                POWER (KW)
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Fuel Con (L/h)
              </th>
              <th
                colSpan={2}
                className="border border-gray-300 px-4 py-2 text-center"
              >
                POWER (KVA)
              </th>
              <th
                colSpan={2}
                className="border border-gray-300 px-4 py-2 text-center"
              >
                POWER (KW)
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Fuel Con (L/h)
              </th>

              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                ENGINE Model
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Cyl
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Model
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Dimensions (CM)
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Weight (KG)
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Tank (L)
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Dimensions (CM)
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Weight (KG)
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Tank (L)
              </th>
            </tr>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Prime (KVA)</th>
              <th className="border border-gray-300 px-4 py-2">
                Standby (KVA)
              </th>
              <th className="border border-gray-300 px-4 py-2">Prime (KW)</th>
              <th className="border border-gray-300 px-4 py-2">Standby (KW)</th>
              <th className="border border-gray-300 px-4 py-2">Prime (KVA)</th>
              <th className="border border-gray-300 px-4 py-2">
                Standby (KVA)
              </th>
              <th className="border border-gray-300 px-4 py-2">Prime (KW)</th>
              <th className="border border-gray-300 px-4 py-2">Standby (KW)</th>
            </tr>
          </thead>
          <tbody>
            {cumminsTableData.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{row.type}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.power50Hz.kvaPrime}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.power50Hz.kvaStandby}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.power50Hz.kwPrime}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.power50Hz.kwStandby}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.fuelCon50Hz}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.power60Hz.kvaPrime}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.power60Hz.kvaStandby}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.power60Hz.kwPrime}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.power60Hz.kwStandby}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.fuelCon60Hz}
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
                  {row.openType.dimensions}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.openType.weight}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.openType.tank}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.soundProof.dimensions}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.soundProof.weight}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.soundProof.tank}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CumminsTable;
