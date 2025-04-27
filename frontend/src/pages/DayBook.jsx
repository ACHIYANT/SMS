import React from "react";
import ListPage from "@/components/ListPage";
import { useNavigate } from "react-router-dom";
export default function DayBook() {
  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "status", label: "Status" },
    {
      key: "customers",
      label: "Customers",
      render: (val) => <span className="text-blue-600">{val}</span>,
    },
    { key: "image", label: "images" },
    { key: "dcd", label: "cwdc" },
    { key: "cdcdcd", label: "cdcd" },
    { key: "ccdfc", label: "cdcd" },
    { key: "ededecd", label: "cdcd" },
    { key: "hnhn", label: "cdcd" },
    { key: "ccdfca", label: "cdcd" },
    { key: "ededecda", label: "cdcd" },
    { key: "hnhna", label: "cdcd" },

    // Add more...
  ];
  const data = [
    {
      id: "Group_5861",
      name: "wsed",
      status: "pending",
      customers: "Customer 1, Santosh",
      image: "fjnvnrnvjrf",
      dcd: "jfnejkvnfe",
      cdcdcd: "jfnvjfnkvf",
      ccdfc: "vfnvjrfnjvfr",
      ededecd: "vjfnjvfnjv",
      hnhn: "vjngjbn",
      ccdfca: "vfnvjrfnjvfr",
      ededecda: "vjfnjvfnjv",
      hnhna: "vjngjbn",
    },
    {
      id: "Group_5862",
      name: "wsed",
      status: "pending",
      customers: "Customer 1, Santosh",
      image: "fjnvnrnvjrf",
      dcd: "jfnejkvnfe",
      cdcdcd: "jfnvjfnkvf",
      ccdfc: "vfnvjrfnjvfr",
      ededecd: "vjfnjvfnjv",
      hnhn: "vjngjbn",
      ccdfca: "vfnvjrfnjvfr",
      ededecda: "vjfnjvfnjv",
      hnhna: "vjngjbn",
    },
    {
      id: "Group_5863",
      name: "wsed",
      status: "pending",
      customers: "Customer 1, Santosh",
      image: "fjnvnrnvjrf",
      dcd: "jfnejkvnfe",
      cdcdcd: "jfnvjfnkvf",
      ccdfc: "vfnvjrfnjvfr",
      ededecd: "vjfnjvfnjv",
      hnhn: "vjngjbn",
      ccdfca: "vfnvjrfnjvfr",
      ededecda: "vjfnjvfnjv",
      hnhna: "vjngjbn",
    },
    {
      id: "Group_5864",
      name: "wsed",
      status: "pending",
      customers: "Customer 1, Santosh",
      image: "fjnvnrnvjrf",
      dcd: "jfnejkvnfe",
      cdcdcd: "jfnvjfnkvf",
      ccdfc: "vfnvjrfnjvfr",
      ededecd: "vjfnjvfnjv",
      hnhn: "vjngjbn",
      ccdfca: "vfnvjrfnjvfr",
      ededecda: "vjfnjvfnjv",
      hnhna: "vjngjbn",
    },
    {
      id: "Group_5865",
      name: "wsed",
      status: "pending",
      customers: "Customer 1, Santosh",
      image: "fjnvnrnvjrf",
      dcd: "jfnejkvnfe",
      cdcdcd: "jfnvjfnkvf",
      ccdfc: "vfnvjrfnjvfr",
      ededecd: "vjfnjvfnjv",
      hnhn: "vjngjbn",
      ccdfca: "vfnvjrfnjvfr",
      ededecda: "vjfnjvfnjv",
      hnhna: "vjngjbn",
    },
    // ...
  ];
  const navigate = useNavigate();
  function handleAdd() {
    navigate("/day-book-entry-first-step");
  }
  return (
    <ListPage
      title="Day Book"
      columns={columns}
      data={data}
      onAdd={handleAdd}
      onUpdate={() => console.log("Update")}
      onFilter={() => console.log("Filter")}
    />
  );
}
