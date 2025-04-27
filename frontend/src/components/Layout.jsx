// // components/Layout.js
// import Sidebar from "@/components/Sidebar";
// import { Outlet } from "react-router-dom";

// export default function Layout() {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 overflow-y-auto">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// ***********

// import { Outlet } from "react-router-dom";
// import Sidebar from "@/components/Sidebar";
// import Navbar from "@/components/NavBar";

// export default function Layout() {
//   return (
//     <div className="flex flex-col h-screen">
//       {/* Top Navbar */}
//       <Navbar />

//       {/* Sidebar + Page Content */}
//       <div className="flex flex-1 overflow-hidden">
//         <Sidebar />
//         <div className="flex-1 overflow-y-auto p-4">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navbar */}
      <Navbar />

      {/* Sidebar + Page Content */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="w-64 border-r h-full">
            <Sidebar />
          </div>
        )}

        {/* Toggle Button */}
        <Button
          variant="ghost"
          className="absolute top-2 left-2 z-10 md:hidden"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
