"use client";

import { perkinsTableData } from "@/app/data/tableData";
import Link from "next/link";
import React from "react";

// Path to download pdf is /pdf/Perkins List.pdf
const PerkinsTable: React.FC = () => {
  return (
    <div className="p-4 text-black">
      <div className="flex justify-between items-center my-4">
        <h1 className="text-lg md:text-2xl font-bold mb-4">Perkins Products</h1>
        <Link
          href="/PDF/perkins_list.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primaryOrange text-xs py-4 px-2 text-black font-semibold hover:bg-primaryDarkBlue hover:text-white rounded-lg"
        >
          Download Pamflet
        </Link>
      </div>

      {/* Summary inserted here */}
      <div className="mb-6 text-sm">
        <p>
          Perkins Engines Company Limited didirikan di Peterborough, Inggris, pada tahun 1932 dan dikenal luas berkat mesin bensin dan terutama mesin diesel-nya. Sejak awal 1970-an, Perkins menjadi pemasok eksklusif bagi Caterpillar Inc., lalu diakuisisi oleh Caterpillar pada 1998 senilai 1,325 miliar dolar. Kini, Perkins diakui sebagai produsen mesin diesel terbesar di dunia dengan pabrik di Inggris, AS, Brasil, China, India, dan Jepang. Perusahaan menjaga standar teknik tinggi serta keandalan produknya, sekaligus aktif dalam upaya lingkungan dan tanggung jawab sosial. Temukan berbagai genset Perkins populer di pasaran—dengan harga terjangkau, Anda bisa mendapatkan generator sesuai kebutuhan.
        </p>
      </div>

      <div className="max-w-full overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr>
              <th
                rowSpan={1}
                colSpan={2}
                className="border border-gray-300 px-4 py-2"
              >
                GENSET
              </th>
              <th colSpan={5} className="border border-gray-300 px-4 py-2">
                ENGINE SPECIFICATION 50Hz/1500 rpm
              </th>
              <th colSpan={5} className="border border-gray-300 px-4 py-2">
                ENGINE SPECIFICATION 60Hz/1800 rpm
              </th>
              <th colSpan={2} className="border border-gray-300 px-4 py-2">
                Engine Specification
              </th>
              <th rowSpan={1} className="border border-gray-300 px-4 py-2">
                Alternator
              </th>
              <th colSpan={3} className="border border-gray-300 px-4 py-2">
                Open Type
              </th>
              <th colSpan={3} className="border border-gray-300 px-4 py-2">
                Silent Type
              </th>
            </tr>
            <tr>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Perkins Open Type
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Perkins Silent Type
              </th>
              <th colSpan={2} className="border border-gray-300 px-4 py-2">
                Power (KVA)
              </th>
              <th colSpan={2} className="border border-gray-300 px-4 py-2">
                Power (KW)
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Fuel Con (L/H)
              </th>
              <th colSpan={2} className="border border-gray-300 px-4 py-2">
                Power (KVA)
              </th>
              <th colSpan={2} className="border border-gray-300 px-4 py-2">
                Power (KW)
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Fuel Con (L/H)
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Engine Model
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Cyl
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Model
              </th>
              {/* Subheaders for Open Type */}
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Dimensions (CM)
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Weight (KG)
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Tank (L)
              </th>
              {/* Subheaders for Silent Type */}
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
              <th className="border border-gray-300 px-4 py-2">Prime</th>
              <th className="border border-gray-300 px-4 py-2">Standby</th>
              <th className="border border-gray-300 px-4 py-2">Prime</th>
              <th className="border border-gray-300 px-4 py-2">Standby</th>
              {/* For Engine Specifications */}
              <th className="border border-gray-300 px-4 py-2">Prime</th>
              <th className="border border-gray-300 px-4 py-2">Standby</th>
              <th className="border border-gray-300 px-4 py-2">Prime</th>
              <th className="border border-gray-300 px-4 py-2">Standby</th>
            </tr>
          </thead>
          <tbody>
            {perkinsTableData.map((product, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {product.type.split("/")[0]}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.type.split("/")[1]}
                </td>

                {/* 50Hz Columns */}
                <td className="border border-gray-300 px-4 py-2">
                  {product.power50Hz.kvaPrime}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.power50Hz.kvaStandby}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.power50Hz.kwPrime}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.power50Hz.kwStandby}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.fuelCon50Hz}
                </td>

                {/* 60Hz Columns */}
                <td className="border border-gray-300 px-4 py-2">
                  {product.power60Hz.kvaPrime}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.power60Hz.kvaStandby}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.power60Hz.kwPrime}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.power60Hz.kwStandby}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.fuelCon60Hz}
                </td>

                {/* Engine & Alternator */}
                <td className="border border-gray-300 px-4 py-2">
                  {product.engineModel}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.cylinders}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.alternatorModel}
                </td>

                {/* Open Type Columns */}
                <td className="border border-gray-300 px-4 py-2">
                  {product.openType.dimensions}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.openType.weight}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.openType.tank}
                </td>

                {/* Silent Type Columns */}
                <td className="border border-gray-300 px-4 py-2">
                  {product.silentType.dimensions}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.silentType.weight}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.silentType.tank}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerkinsTable;
