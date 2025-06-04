"use client";

import { kubotaTableData } from "@/app/data/tableData";
import Link from "next/link";
import React from "react";
const KubotaTable = () => {
  return (
    <div className="p-4 text-black">
      <div className="flex justify-between items-center my-4">
        <h1 className="text-xl md:text-2xl font-bold mb-4">KUBOTA Products</h1>
        <Link
          href="/PDF/kubota_list.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primaryOrange text-xs py-4 px-2 text-black font-semibold hover:bg-primaryDarkBlue hover:text-white rounded-lg"
        >
          Download Pamflet
        </Link>
      </div>
      <div className="mb-6 text-sm">
        <p>
          Kubota Corporation, perusahaan asal Jepang yang berdiri sejak 1890, dikenal dengan produk mesin diesel berkualitas tinggi untuk berbagai aplikasi. Genset Kubota banyak digunakan di sektor pertanian, konstruksi, UKM, dan perumahan karena keunggulan pada efisiensi bahan bakar, suara halus, dan desain ringkas. Tersedia pilihan *silent* maupun *open type*, dengan kapasitas mulai dari 5 KVA hingga di atas 30 KVA. Dikenal mudah dalam perawatan serta hemat biaya operasional, genset Kubota menjadi pilihan tepat untuk kebutuhan listrik cadangan yang handal, dengan layanan purna jual terpercaya dan harga yang kompetitif.
        </p>
      </div>

      <div className="max-w-full overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th rowSpan={1} className="border border-gray-300 px-4 py-2">
                GENSET
              </th>
              <th colSpan={4} className="border border-gray-300 px-4 py-2">
                GENSET SPECIFICATION
              </th>
              <th colSpan={6} className="border border-gray-300 px-4 py-2">
                ENGINE SPECIFICATION
              </th>
              <th rowSpan={1} className="border border-gray-300 px-4 py-2">
                Alternator
              </th>
              <th colSpan={3} className="border border-gray-300 px-4 py-2">
                Sound Proof
              </th>
              <th rowSpan={3} className="border border-gray-300 px-4 py-2">
                Tank (L)
              </th>
            </tr>
            <tr>
              <th rowSpan={1} className="border border-gray-300 px-4 py-2">
                Kubota
              </th>
              <th colSpan={2} className="border border-gray-300 px-4 py-2">
                Power (KVA)
              </th>
              <th colSpan={2} className="border border-gray-300 px-4 py-2">
                Power (KW)
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Emission Level
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
                Gov
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Asp
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Stamford Model
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Dimensions (LxWxH)
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                Weight (Kg)
              </th>
              <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                db(A)@7m
              </th>
            </tr>
            <tr>
              <th rowSpan={1} className="border border-gray-300 px-4 py-2">
                Type
              </th>
              <th className="border border-gray-300 px-4 py-2">Prime</th>
              <th className="border border-gray-300 px-4 py-2">Standby</th>
              <th className="border border-gray-300 px-4 py-2">Prime</th>
              <th className="border border-gray-300 px-4 py-2">Standby</th>
            </tr>
          </thead>
          <tbody>
            {kubotaTableData.map((row, index) => (
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
                  {row.emissionLevel}
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
                  {row.governor}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.aspiration}
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
                <td className="border border-gray-300 px-4 py-2">
                  {row.noiseLevel}
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

export default KubotaTable;
