// // export default function TopBar({ tabName, onAdd, onUpdate, onFilter }) {
// // 	return (
// // 	  <div className="flex justify-between items-center mb-4 bg-white p-3 shadow rounded">
// // 		<h2 className="text-lg font-semibold">{tabName}</h2>
// // 		<div className="space-x-2">
// // 		  <button onClick={onAdd} className="btn">Add</button>
// // 		  <button onClick={onUpdate} className="btn">Update</button>
// // 		  <button onClick={onFilter} className="btn">Filter</button>
// // 		</div>
// // 	  </div>
// // 	);
// //   }

// // import { Button } from "@/components/ui/button"; // if you're using shadcn/ui

// // export default function TopBar({ tabName, onAdd, onUpdate, onFilter }) {
// //   return (
// //     <div className="flex justify-between items-center mb-4 bg-white p-4 shadow rounded">
// //       <h2 className="text-xl font-semibold">{tabName}</h2>
// //       <div className="flex gap-2">
// //         <Button variant="default" onClick={onAdd}>
// //           Add
// //         </Button>
// //         <Button variant="outline" onClick={onUpdate}>
// //           Update
// //         </Button>
// //         <Button variant="secondary" onClick={onFilter}>
// //           Filter
// //         </Button>
// //       </div>
// //     </div>
// //   );
// // }

// import { Plus, Pencil, Filter } from "lucide-react";
// import { Button } from "@/components/ui/button"; // shadcn button

// export default function TopBar({ tabName, onAdd, onUpdate, onFilter }) {
//   return (
//     <div className="flex justify-between items-center mb-4 bg-white p-4 shadow rounded">
//       <h2 className="text-xl font-semibold">{tabName}</h2>
//       <div className="flex gap-2">
//         <Button onClick={onAdd}>
//           <Plus className="w-4 h-4 mr-2" />
//           Add
//         </Button>
//         <Button variant="outline" onClick={onUpdate}>
//           <Pencil className="w-4 h-4 mr-2" />
//           Update
//         </Button>
//         <Button variant="secondary" onClick={onFilter}>
//           <Filter className="w-4 h-4 mr-2" />
//           Filter
//         </Button>
//       </div>
//     </div>
//   );
// }

// *************/

// import React from "react";
// import { Button } from "@/components/ui/button";

// const TopBar = ({ title, onAdd, onUpdate, onFilter }) => {
//   return (
//     <div className="flex justify-between items-center">
//       <h2 className="text-xl font-semibold">{title}</h2>
//       <div className="flex gap-2">
//         <Button onClick={onFilter}>Filter</Button>
//         <Button onClick={onAdd}>+ Add</Button>
//         <Button onClick={onUpdate}>Update</Button>
//       </div>
//     </div>
//   );
// };

// export default TopBar;

// ***************

import React from "react";
import { Button } from "@/components/ui/button";

const TopBar = ({ title, onAdd, onUpdate, onFilter, disableUpdate }) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex gap-2">
        <Button className="cursor-pointer" onClick={onFilter}>
          Filter
        </Button>
        <Button className="cursor-pointer" onClick={onAdd}>
          + Add
        </Button>
        <Button onClick={onUpdate} disabled={disableUpdate}>
          Update
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
