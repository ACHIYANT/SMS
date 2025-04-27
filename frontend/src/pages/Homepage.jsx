import Navbar from "@/components/NavBar";
import CarouselComponent1 from "../components/CarouselComponent1";
import Modal from "../components/Modal";
import React from "react";
import carousel1 from "/carousle-1.png";
import carousel2 from "/carousel-2.png";
import Sidebar from "@/components/Sidebar";

import ListPageLayout from "@/components/ListPage";

import ListPage from "@/components/ListPage";
// export default function Homepage() {
//   return (
//     <div className="bg-gray-100 h-screen">
//       <Navbar />
//       <Sidebar/>
//       {/* <CarouselComponent /> */}
//       <CarouselComponent1>
//         <div>
//           <img
//             className="img-cr"
//             src={carousel1}
//             alt="img1"
//           />
//         </div>
//         <div>
//           <img
//             className="img-cr"
//             src={carousel2}
//             alt="img2"
//           />
//         </div>
//         <div>
//           <img
//             className="img-cr"
//             src="https://www.w3schools.com/howto/img_lights_wide.jpg"
//             alt="img3"
//           />
//         </div>
//       </CarouselComponent1>
//       <Modal />
//     </div>
//   );
// }

export default function Homepage() {
  // const fields = [
  //   "Serial No",
  //   "Name",
  //   "Date",
  //   "Amount",
  //   "Vendor",
  //   "Entry No",
  //   "Status",
  // ];
  // const sampleData = [
  //   {
  //     "Serial No": 1,
  //     Name: "Item 1",
  //     Date: "2024-01-01",
  //     Amount: "₹5000",
  //     Vendor: "ABC Ltd",
  //     "Entry No": "E001",
  //     Status: "Approved",
  //   },
  //   {
  //     "Serial No": 2,
  //     Name: "Item 2",
  //     Date: "2024-01-02",
  //     Amount: "₹3000",
  //     Vendor: "XYZ Pvt",
  //     "Entry No": "E002",
  //     Status: "Pending",
  //   },
  // ];

  // const columns = [
  //   { key: "id", label: "ID" },
  //   { key: "name", label: "Name" },
  //   { key: "status", label: "Status" },
  //   {
  //     key: "customers",
  //     label: "Customers",
  //     render: (val) => <span className="text-blue-600">{val}</span>,
  //   },
  //   { key: "image", label: "images" },
  //   { key: "dcd", label: "cwdc" },
  //   { key: "cdcdcd", label: "cdcd" },
  //   { key: "ccdfc", label: "cdcd" },
  //   { key: "ededecd", label: "cdcd" },
  //   { key: "hnhn", label: "cdcd" },
  //   { key: "ccdfca", label: "cdcd" },
  //   { key: "ededecda", label: "cdcd" },
  //   { key: "hnhna", label: "cdcd" },

  //   // Add more...
  // ];

  // const data = [
  //   {
  //     id: "Group_5867",
  //     name: "wsed",
  //     status: "pending",
  //     customers: "Customer 1, Santosh",
  //     image: "fjnvnrnvjrf",
  //     dcd: "jfnejkvnfe",
  //     cdcdcd: "jfnvjfnkvf",
  //     ccdfc: "vfnvjrfnjvfr",
  //     ededecd: "vjfnjvfnjv",
  //     hnhn: "vjngjbn",
  //     ccdfca: "vfnvjrfnjvfr",
  //     ededecda: "vjfnjvfnjv",
  //     hnhna: "vjngjbn",
  //   },
  //   // ...
  // ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* <Sidebar /> */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* <Navbar /> */}
        <div className="p-4">
          <CarouselComponent1>
            <div>
              <img className="img-cr" src={carousel1} alt="img1" />
            </div>
            <div>
              <img className="img-cr" src={carousel2} alt="img2" />
            </div>
            <div>
              <img
                className="img-cr"
                src="https://www.w3schools.com/howto/img_lights_wide.jpg"
                alt="img3"
              />
            </div>
          </CarouselComponent1>
          {/* <Modal /> */}
          {/* <ListPageLayout
            tabName="Day Book Entries"
            fields={fields}
            data={sampleData}
          />
          ; */}

          {/* <ListPage
            title="Groups"
            columns={columns}
            data={data}
            onAdd={() => console.log("Add")}
            onUpdate={() => console.log("Update")}
            onFilter={() => console.log("Filter")}
          /> */}
        </div>
      </div>
    </div>
  );
}
