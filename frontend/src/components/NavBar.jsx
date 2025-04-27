import React from "react";
import logo from "/logo.svg";
import govt from "/govt.svg";
import { useEffect, useState } from "react";
import { ExitIcon } from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import NavBarMiddleItem from "./NavBarMiddleItem";
import Avatar from "./AvatarLogo";
const masterEntryData = [
  {
    tabTitle: "Vendor's Entry",
    href: "vendors-entry",
  },
  {
    tabTitle: "Employee's Entry",
    href: "employees-entry",
  },
  {
    tabTitle: "Stock's Entry",
    href: "stocks-entry",
  },
];
const dayBookEntryData = [
  {
    tabTitle: "Consumable Items Entry",
    href: "day-book-entry-first-step",
  },
  {
    tabTitle: "Stationary Items Entry",
    href: "stationary-items-entry",
  },
  {
    tabTitle: "Fixed Assets Entry",
    href: "fixed-assets-entry",
  },
  {
    tabTitle: "Vehicle Items Entry",
    href: "vehicle-items-entry",
  },
];
const stockEntryData = [
  {
    tabTitle: "Stock's Entry",
    href: "stocks-entry",
  },
];
export default function NavBar() {
  const [userName, setUserName] = useState("Login Name");
  useEffect(() => {
    const storedUser = localStorage.getItem("fullname");
    console.log(storedUser);
    if (storedUser) {
      setUserName(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // clear token
    localStorage.removeItem("fullname"); // if you're storing username or any user data
    window.location.href = "/login"; // or use React Router navigate
  };
  return (
    <div className="flex flex-col bg-card">
      <div className="flex h-fit items-center">
        <div className="flex justify-self-start  h-fit p-2">
          <a href="/homepage">
            <img src={logo} alt="" href="/" />
          </a>
          <div className="border-l-2 border-solid border-gray-200 h-content ml-2"></div>
          <img src={govt} alt="" />
        </div>
        <div className="flex justify-self-center justify-evenly flex-1">
          {/* <div>Day Book</div>
			<div>MRN</div>
			<div>Stock Entry</div>
			<div>Issue</div> */}
          {/* <NavBarMiddleItem
            mainHeading={"Master Entry"}
            data={masterEntryData}
          /> */}
          {/* <NavBarMiddleItem
            mainHeading={"Day Book Entry"}
            data={dayBookEntryData}
          /> */}
          {/* <NavBarMiddleItem mainHeading={"Stock Entry"} data={stockEntryData} /> */}
        </div>
        <div className="flex flex-col gap-2 justify-self-center p-4">
          {/* <div className="flex items-center gap-2">
            <Avatar />
            <p>{userName}</p>
          </div> */}
          <div className="flex items-center gap-6 cursor-pointer">
            <ExitIcon />
            <button className="cursor-pointer" onClick={handleLogout}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
