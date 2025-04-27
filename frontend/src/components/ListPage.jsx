// import React, { useState } from "react";
// import TopBar from "./TopBar";
// import ListTable from "./ListTable";

// export default function ListPageLayout({ tabName, fields, data }) {
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleAdd = () => {
//     console.log("Add new item");
//   };

//   const handleUpdate = () => {
//     if (selectedItem) {
//       console.log("Update item:", selectedItem);
//     } else {
//       alert("Please select an item to update.");
//     }
//   };

//   const handleFilter = () => {
//     console.log("Filter applied");
//   };

//   return (
//     <div className="p-4">
//       <TopBar
//         tabName={tabName}
//         onAdd={handleAdd}
//         onUpdate={handleUpdate}
//         onFilter={handleFilter}
//       />
//       <ListTable
//         fields={fields}
//         data={data}
//         selectedItem={selectedItem}
//         onSelect={setSelectedItem}
//       />
//     </div>
//   );
// }
// ***********/

// import React from "react";
// import TopBar from "./TopBar";
// import ListTable from "./ListTable";

// const ListPage = ({ title, columns, data, onAdd, onUpdate, onFilter }) => {
//   return (
//     <div className="p-4">
//       <TopBar
//         title={title}
//         onAdd={onAdd}
//         onUpdate={onUpdate}
//         onFilter={onFilter}
//       />
//       <div className="overflow-x-auto max-w-full mt-4 border rounded-lg">
//         <ListTable columns={columns} data={data} />
//       </div>
//     </div>
//   );
// };

// export default ListPage;


// ***************



// import React from "react";
// import TopBar from "./TopBar";
// import ListTable from "./ListTable";

// const ListPage = ({ title, columns, data, onAdd, onUpdate, onFilter }) => {
//   return (
//     <div className="p-4">
//       <TopBar title={title} onAdd={onAdd} onUpdate={onUpdate} onFilter={onFilter} />

//       {/* Make only this container scroll horizontally */}
//       <div className="mt-4 border rounded-lg">
//         <div className="overflow-x-auto w-full">
//           <ListTable columns={columns} data={data} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListPage;



// ************


import React, { useState } from "react";
import TopBar from "./TopBar";
import ListTable from "./ListTable";

const ListPage = ({ title, columns, data, onAdd, onUpdate, onFilter }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelect = (id, checked) => {
    setSelectedRows((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  return (
    <div className="p-4">
      <TopBar
        title={title}
        onAdd={onAdd}
        onUpdate={selectedRows.length === 1 ? () => onUpdate(selectedRows[0]) : null}
        onFilter={onFilter}
        disableUpdate={selectedRows.length !== 1}
      />
      <div className="mt-4 border rounded-lg">
        <div className="overflow-x-auto w-full">
          <ListTable
            columns={columns}
            data={data}
            selectedRows={selectedRows}
            onRowSelect={handleRowSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default ListPage;
