// export default function ListTable({ fields, data, selectedItem, onSelect }) {
//   return (
//     <table className="w-full border bg-white rounded shadow">
//       <thead>
//         <tr>
//           {fields.map((field) => (
//             <th key={field} className="border px-4 py-2">
//               {field}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((item, index) => {
//           const isSelected = selectedItem === item;
//           return (
//             <tr
//               key={index}
//               onClick={() => onSelect(item)}
//               className={`cursor-pointer ${isSelected ? "bg-blue-100" : ""}`}
//             >
//               {fields.map((field) => (
//                 <td key={field} className="border px-4 py-2">
//                   {item[field]}
//                 </td>
//               ))}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }

// ***********

// import React from "react";

// const ListTable = ({ columns, data }) => {
//   return (
//     <table className="min-w-max table-auto text-sm">
//       <thead>
//         <tr className="bg-gray-100">
//           <th className="p-2 border whitespace-nowrap">Select</th>
//           {columns.map((col) => (
//             <th key={col.key} className="p-2 border whitespace-nowrap">
//               {col.label}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row, idx) => (
//           <tr key={idx} className="hover:bg-gray-50">
//             <td className="p-2 border text-center">
//               <input type="checkbox" />
//             </td>
//             {columns.map((col) => (
//               <td key={col.key} className="p-2 border whitespace-nowrap">
//                 {typeof col.render === "function"
//                   ? col.render(row[col.key], row)
//                   : row[col.key]}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default ListTable;

// *************

// import React from "react";

// const ListTable = ({ columns, data }) => {
//   return (
//     <table className="min-w-[1000px] table-auto text-sm w-full">
//       <thead className="bg-gray-100">
//         <tr>
//           <th className="p-2 border">Select</th>
//           {columns.map((col) => (
//             <th key={col.key} className="p-2 border whitespace-nowrap">
//               {col.label}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row, idx) => (
//           <tr key={idx} className="hover:bg-gray-50">
//             <td className="p-2 border text-center">
//               <input type="checkbox" />
//             </td>
//             {columns.map((col) => (
//               <td key={col.key} className="p-2 border whitespace-nowrap">
//                 {typeof col.render === "function"
//                   ? col.render(row[col.key], row)
//                   : row[col.key]}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default ListTable;

// ****************

const ListTable = ({ columns, data, selectedRows, onRowSelect }) => {
  const handleCheckboxChange = (id, e) => {
    onRowSelect(id, e.target.checked);
  };

  return (
    <table className="min-w-[1000px] table-auto text-sm w-full">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border text-center">Select</th>
          {columns.map((col) => (
            <th key={col.key} className="p-2 border whitespace-nowrap">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="hover:bg-gray-50">
            <td className="p-2 border text-center">
              <input
                type="checkbox"
                checked={selectedRows.includes(row.id)}
                onChange={(e) => handleCheckboxChange(row.id, e)}
              />
            </td>
            {columns.map((col) => (
              <td key={col.key} className="p-2 border whitespace-nowrap">
                {typeof col.render === "function"
                  ? col.render(row[col.key], row)
                  : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListTable;
