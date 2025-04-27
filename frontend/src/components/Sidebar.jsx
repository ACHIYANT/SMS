// import { useState } from "react"
// import {
//   Home,
//   History,
//   Star,
//   Settings,
//   BookOpen,
//   Users,
//   LogOut,
//   User,
//   Bell,
//   CreditCard,
//   Rocket,
//   ChevronDown,
// } from "lucide-react"
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
// } from "@/components/ui/sheet"
// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { ScrollArea } from "@/components/ui/scroll-area"

// export default function Sidebar() {
//   const [open, setOpen] = useState(false)

//   const NavItem = ({ icon: Icon, label }) => (
//     <div className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer">
//       <Icon className="h-4 w-4" />
//       <span>{label}</span>
//     </div>
//   )

//   const UserMenu = () => (
//     <div className="p-4">
//       <div className="flex items-center gap-3">
//         <Avatar>
//           <AvatarImage src="https://github.com/shadcn.png" />
//           <AvatarFallback>SC</AvatarFallback>
//         </Avatar>
//         <div>
//           <p className="text-sm font-medium">shadcn</p>
//           <p className="text-xs text-muted-foreground">m@example.com</p>
//         </div>
//       </div>
//       <div className="mt-4 space-y-2">
//         <NavItem icon={Rocket} label="Upgrade to Pro" />
//         <NavItem icon={User} label="Account" />
//         <NavItem icon={CreditCard} label="Billing" />
//         <NavItem icon={Bell} label="Notifications" />
//         <NavItem icon={LogOut} label="Log out" />
//       </div>
//     </div>
//   )

//   return (
//     <div className="md:flex h-screen">
//       <div className="hidden md:flex w-64 flex-col border-r">
//         <div className="p-4 font-semibold flex items-center gap-2">
//           <Avatar className="h-8 w-8">
//             <AvatarFallback>AI</AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="text-sm font-medium">Acme Inc</p>
//             <p className="text-xs text-muted-foreground">Enterprise</p>
//           </div>
//         </div>
//         <ScrollArea className="flex-1">
//           <div className="space-y-4 p-4">
//             <div>
//               <NavItem icon={Home} label="Playground" />
//               <div className="ml-5 space-y-1">
//                 <NavItem icon={History} label="History" />
//                 <NavItem icon={Star} label="Starred" />
//                 <NavItem icon={Settings} label="Settings" />
//               </div>
//             </div>
//             <NavItem icon={Users} label="Models" />
//             <NavItem icon={BookOpen} label="Documentation" />
//             <NavItem icon={Settings} label="Settings" />
//           </div>
//         </ScrollArea>
//         <div className="border-t">
//           <UserMenu />
//         </div>
//       </div>
//       <div className="md:hidden">
//         <Sheet open={open} onOpenChange={setOpen}>
//           <SheetTrigger asChild>
//             <Button variant="ghost" className="m-2">
//               <ChevronDown className="h-5 w-5" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="p-0 w-64">
//             <div className="h-full flex flex-col">
//               <ScrollArea className="flex-1">
//                 <div className="space-y-4 p-4">
//                   <div>
//                     <NavItem icon={Home} label="Playground" />
//                     <div className="ml-5 space-y-1">
//                       <NavItem icon={History} label="History" />
//                       <NavItem icon={Star} label="Starred" />
//                       <NavItem icon={Settings} label="Settings" />
//                     </div>
//                   </div>
//                   <NavItem icon={Users} label="Models" />
//                   <NavItem icon={BookOpen} label="Documentation" />
//                   <NavItem icon={Settings} label="Settings" />
//                 </div>
//               </ScrollArea>
//               <div className="border-t">
//                 <UserMenu />
//               </div>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </div>
//   )
// }

// import { useState } from "react";
// import {
//   Home,
//   History,
//   Star,
//   Settings,
//   BookOpen,
//   Users,
//   LogOut,
//   User,
//   Bell,
//   CreditCard,
//   Rocket,
//   ChevronDown,
//   ChevronRight,
//   ChevronUp,
// } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ScrollArea } from "@/components/ui/scroll-area";

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);
//   const [expanded, setExpanded] = useState({
//     Playground: true,
//     Models: false,
//     Documentation: false,
//     Settings: false,
//   });

//   const toggleSection = (section) => {
//     setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   const NavItem = ({ icon: Icon, label, children, collapsible }) => (
//     <div>
//       <div
//         className="flex items-center justify-between px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer"
//         onClick={() => collapsible && toggleSection(label)}
//       >
//         <div className="flex items-center gap-3">
//           <Icon className="h-4 w-4" />
//           <span>{label}</span>
//         </div>
//         {collapsible &&
//           (expanded[label] ? (
//             <ChevronUp className="h-4 w-4" />
//           ) : (
//             <ChevronRight className="h-4 w-4" />
//           ))}
//       </div>
//       {collapsible && expanded[label] && (
//         <div className="ml-8 space-y-1">{children}</div>
//       )}
//     </div>
//   );

//   const SubItem = ({ icon: Icon, label }) => (
//     <div className="flex items-center gap-3 px-2 py-1 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer">
//       <Icon className="h-4 w-4" />
//       <span>{label}</span>
//     </div>
//   );

//   const UserMenu = () => (
//     <div className="p-4">
//       <div className="flex items-center gap-3">
//         <Avatar>
//           <AvatarImage src="https://github.com/shadcn.png" />
//           <AvatarFallback>SC</AvatarFallback>
//         </Avatar>
//         <div>
//           <p className="text-sm font-medium">shadcn</p>
//           <p className="text-xs text-muted-foreground">m@example.com</p>
//         </div>
//       </div>
//       <div className="mt-4 space-y-2">
//         <SubItem icon={Rocket} label="Upgrade to Pro" />
//         <SubItem icon={User} label="Account" />
//         <SubItem icon={CreditCard} label="Billing" />
//         <SubItem icon={Bell} label="Notifications" />
//         <SubItem icon={LogOut} label="Log out" />
//       </div>
//     </div>
//   );

//   const renderSidebarContent = () => (
//     <div className="space-y-4 p-4">
//       <NavItem icon={Home} label="Playground" collapsible>
//         <SubItem icon={History} label="History" />
//         <SubItem icon={Star} label="Starred" />
//         <SubItem icon={Settings} label="Settings" />
//       </NavItem>
//       <NavItem icon={Users} label="Models" collapsible>
//         <SubItem icon={User} label="Model A" />
//         <SubItem icon={User} label="Model B" />
//       </NavItem>
//       <NavItem icon={BookOpen} label="Documentation" collapsible>
//         <SubItem icon={BookOpen} label="API Docs" />
//         <SubItem icon={BookOpen} label="Guides" />
//       </NavItem>
//       <NavItem icon={Settings} label="Settings" collapsible>
//         <SubItem icon={Settings} label="General" />
//         <SubItem icon={Settings} label="Advanced" />
//       </NavItem>
//     </div>
//   );

//   return (
//     <div className="md:flex h-screen">
//       <div className="hidden md:flex w-64 flex-col border-r">
//         <div className="p-4 font-semibold flex items-center gap-2">
//           <Avatar className="h-8 w-8">
//             <AvatarFallback>AI</AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="text-sm font-medium">Acme Inc</p>
//             <p className="text-xs text-muted-foreground">Enterprise</p>
//           </div>
//         </div>
//         <ScrollArea className="flex-1">{renderSidebarContent()}</ScrollArea>
//         <div className="border-t">
//           <UserMenu />
//         </div>
//       </div>
//       <div className="md:hidden">
//         <Sheet open={open} onOpenChange={setOpen}>
//           <SheetTrigger asChild>
//             <Button variant="ghost" className="m-2">
//               <ChevronDown className="h-5 w-5" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="p-0 w-64">
//             <div className="h-full flex flex-col">
//               <ScrollArea className="flex-1">
//                 {renderSidebarContent()}
//               </ScrollArea>
//               <div className="border-t">
//                 <UserMenu />
//               </div>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import {
//   Home,
//   History,
//   Star,
//   Settings,
//   BookOpen,
//   Users,
//   LogOut,
//   User,
//   Bell,
//   CreditCard,
//   Rocket,
//   ChevronDown,
//   ChevronRight,
//   ChevronUp,
// } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@/components/ui/popover";

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);
//   const [expanded, setExpanded] = useState({
//     Playground: true,
//     Models: false,
//     Documentation: false,
//     Settings: false,
//   });

//   const toggleSection = (section) => {
//     setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   const NavItem = ({ icon: Icon, label, children, collapsible }) => (
//     <div>
//       <div
//         className="flex items-center justify-between px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer"
//         onClick={() => collapsible && toggleSection(label)}
//       >
//         <div className="flex items-center gap-3">
//           <Icon className="h-4 w-4" />
//           <span>{label}</span>
//         </div>
//         {collapsible &&
//           (expanded[label] ? (
//             <ChevronUp className="h-4 w-4" />
//           ) : (
//             <ChevronRight className="h-4 w-4" />
//           ))}
//       </div>
//       {collapsible && expanded[label] && (
//         <div className="ml-8 space-y-1">{children}</div>
//       )}
//     </div>
//   );

//   const SubItem = ({ icon: Icon, label }) => (
//     <div className="flex items-center gap-3 px-2 py-1 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer">
//       <Icon className="h-4 w-4" />
//       <span>{label}</span>
//     </div>
//   );

//   const UserPopover = () => (
//     <Popover>
//       <PopoverTrigger asChild>
//         <div className="p-4 cursor-pointer hover:bg-muted flex items-center gap-3">
//           <Avatar>
//             <AvatarImage src="https://github.com/shadcn.png" />
//             <AvatarFallback>SC</AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="text-sm font-medium">shadcn</p>
//             <p className="text-xs text-muted-foreground">m@example.com</p>
//           </div>
//         </div>
//       </PopoverTrigger>
//       <PopoverContent className="w-60 mt-2">
//         <div className="space-y-2">
//           <SubItem icon={Rocket} label="Upgrade to Pro" />
//           <SubItem icon={User} label="Account" />
//           <SubItem icon={CreditCard} label="Billing" />
//           <SubItem icon={Bell} label="Notifications" />
//           <SubItem icon={LogOut} label="Log out" />
//         </div>
//       </PopoverContent>
//     </Popover>
//   );

//   const renderSidebarContent = () => (
//     <div className="space-y-4 p-4">
//       <NavItem icon={Home} label="Playground" collapsible>
//         <SubItem icon={History} label="History" />
//         <SubItem icon={Star} label="Starred" />
//         <SubItem icon={Settings} label="Settings" />
//       </NavItem>
//       <NavItem icon={Users} label="Models" collapsible>
//         <SubItem icon={User} label="Model A" />
//         <SubItem icon={User} label="Model B" />
//       </NavItem>
//       <NavItem icon={BookOpen} label="Documentation" collapsible>
//         <SubItem icon={BookOpen} label="API Docs" />
//         <SubItem icon={BookOpen} label="Guides" />
//       </NavItem>
//       <NavItem icon={Settings} label="Settings" collapsible>
//         <SubItem icon={Settings} label="General" />
//         <SubItem icon={Settings} label="Advanced" />
//       </NavItem>
//     </div>
//   );

//   return (
//     <div className="md:flex h-screen">
//       <div className="hidden md:flex w-64 flex-col border-r">
//         <div className="p-4 font-semibold flex items-center gap-2">
//           <Avatar className="h-8 w-8">
//             <AvatarFallback>AI</AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="text-sm font-medium">Acme Inc</p>
//             <p className="text-xs text-muted-foreground">Enterprise</p>
//           </div>
//         </div>
//         <ScrollArea className="flex-1">{renderSidebarContent()}</ScrollArea>
//         <div className="border-t">
//           <UserPopover />
//         </div>
//       </div>
//       <div className="md:hidden">
//         <Sheet open={open} onOpenChange={setOpen}>
//           <SheetTrigger asChild>
//             <Button variant="ghost" className="m-2">
//               <ChevronDown className="h-5 w-5" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="p-0 w-64">
//             <div className="h-full flex flex-col">
//               <ScrollArea className="flex-1">
//                 {renderSidebarContent()}
//               </ScrollArea>
//               <div className="border-t">
//                 <UserPopover />
//               </div>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import {
//   Home,
//   History,
//   Star,
//   Settings,
//   BookOpen,
//   Users,
//   LogOut,
//   User,
//   Bell,
//   CreditCard,
//   Rocket,
//   ChevronDown,
//   ChevronRight,
//   ChevronUp,
// } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ScrollArea } from "@/components/ui/scroll-area";

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);
//   const [expanded, setExpanded] = useState({
//     Playground: true,
//     Models: false,
//     Documentation: false,
//     Settings: false,
//   });

//   const toggleSection = (section) => {
//     setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   const NavItem = ({ icon: Icon, label, children, collapsible }) => (
//     <div>
//       <div
//         className="flex items-center justify-between px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer"
//         onClick={() => collapsible && toggleSection(label)}
//       >
//         <div className="flex items-center gap-3">
//           <Icon className="h-4 w-4" />
//           <span>{label}</span>
//         </div>
//         {collapsible &&
//           (expanded[label] ? (
//             <ChevronUp className="h-4 w-4" />
//           ) : (
//             <ChevronRight className="h-4 w-4" />
//           ))}
//       </div>
//       {collapsible && expanded[label] && (
//         <div className="ml-8 space-y-1">{children}</div>
//       )}
//     </div>
//   );

//   const SubItem = ({ icon: Icon, label }) => (
//     <div className="flex items-center gap-3 px-2 py-1 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer">
//       <Icon className="h-4 w-4" />
//       <span>{label}</span>
//     </div>
//   );

//   const UserSidebarTrigger = () => (
//     <Popover>
//       <PopoverTrigger asChild>
//         <div className="p-4 cursor-pointer hover:bg-muted flex items-center gap-3">
//           <Avatar>
//             <AvatarImage src="https://github.com/shadcn.png" />
//             <AvatarFallback>SC</AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="text-sm font-medium">shadcn</p>
//             <p className="text-xs text-muted-foreground">m@example.com</p>
//           </div>
//         </div>
//       </PopoverTrigger>
//       <PopoverContent align="end" className="w-64 mr-2">
//         <div className="p-2 space-y-2">
//           <SubItem icon={Rocket} label="Upgrade to Pro" />
//           <SubItem icon={User} label="Account" />
//           <SubItem icon={CreditCard} label="Billing" />
//           <SubItem icon={Bell} label="Notifications" />
//           <SubItem icon={LogOut} label="Log out" />
//         </div>
//       </PopoverContent>
//     </Popover>
//   );

//   const renderSidebarContent = () => (
//     <div className="space-y-4 p-4">
//       <NavItem icon={Home} label="Playground" collapsible>
//         <SubItem icon={History} label="History" />
//         <SubItem icon={Star} label="Starred" />
//         <SubItem icon={Settings} label="Settings" />
//       </NavItem>
//       <NavItem icon={Users} label="Models" collapsible>
//         <SubItem icon={User} label="Model A" />
//         <SubItem icon={User} label="Model B" />
//       </NavItem>
//       <NavItem icon={BookOpen} label="Documentation" collapsible>
//         <SubItem icon={BookOpen} label="API Docs" />
//         <SubItem icon={BookOpen} label="Guides" />
//       </NavItem>
//       <NavItem icon={Settings} label="Settings" collapsible>
//         <SubItem icon={Settings} label="General" />
//         <SubItem icon={Settings} label="Advanced" />
//       </NavItem>
//     </div>
//   );

//   return (
//     <div className="md:flex h-screen">
//       <div className="hidden md:flex w-64 flex-col border-r">
//         <div className="p-4 font-semibold flex items-center gap-2">
//           <Avatar className="h-8 w-8">
//             <AvatarFallback>AI</AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="text-sm font-medium">Acme Inc</p>
//             <p className="text-xs text-muted-foreground">Enterprise</p>
//           </div>
//         </div>
//         <ScrollArea className="flex-1">{renderSidebarContent()}</ScrollArea>
//         <div className="border-t">
//           <UserSidebarTrigger />
//         </div>
//       </div>

//       <div className="md:hidden">
//         <Sheet open={open} onOpenChange={setOpen}>
//           <SheetTrigger asChild>
//             <Button variant="ghost" className="m-2">
//               <ChevronDown className="h-5 w-5" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="p-0 w-64">
//             <div className="h-full flex flex-col">
//               <ScrollArea className="flex-1">
//                 {renderSidebarContent()}
//               </ScrollArea>
//               <div className="border-t">
//                 <UserSidebarTrigger />
//               </div>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import {
//   Home,
//   History,
//   Star,
//   Settings,
//   BookOpen,
//   Users,
//   LogOut,
//   User,
//   Bell,
//   CreditCard,
//   Rocket,
//   ChevronDown,
//   ChevronRight,
//   ChevronUp,
// } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ScrollArea } from "@/components/ui/scroll-area";

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);
//   const [expanded, setExpanded] = useState({
//     Playground: true,
//     Models: false,
//     Documentation: false,
//     Settings: false,
//   });

//   const toggleSection = (section) => {
//     setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   const NavItem = ({ icon: Icon, label, children, collapsible }) => (
//     <div>
//       <div
//         className="flex items-center justify-between px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer"
//         onClick={() => collapsible && toggleSection(label)}
//       >
//         <div className="flex items-center gap-3">
//           <Icon className="h-4 w-4" />
//           <span>{label}</span>
//         </div>
//         {collapsible &&
//           (expanded[label] ? (
//             <ChevronUp className="h-4 w-4" />
//           ) : (
//             <ChevronRight className="h-4 w-4" />
//           ))}
//       </div>
//       {collapsible && expanded[label] && (
//         <div className="ml-8 space-y-1">{children}</div>
//       )}
//     </div>
//   );

//   const SubItem = ({ icon: Icon, label }) => (
//     <div className="flex items-center gap-3 px-2 py-1 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer">
//       <Icon className="h-4 w-4" />
//       <span>{label}</span>
//     </div>
//   );

//   const UserSidebarTrigger = () => (
//     <Popover>
//       <PopoverTrigger asChild>
//         <div className="p-4 cursor-pointer hover:bg-muted flex items-center gap-3">
//           <Avatar>
//             <AvatarImage src="https://github.com/shadcn.png" />
//             <AvatarFallback>SC</AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="text-sm font-medium">shadcn</p>
//             <p className="text-xs text-muted-foreground">m@example.com</p>
//           </div>
//         </div>
//       </PopoverTrigger>
//       <PopoverContent side="right" align="start" className="w-64">
//         <div className="p-2 space-y-2">
//           <SubItem icon={Rocket} label="Upgrade to Pro" />
//           <SubItem icon={User} label="Account" />
//           <SubItem icon={CreditCard} label="Billing" />
//           <SubItem icon={Bell} label="Notifications" />
//           <SubItem icon={LogOut} label="Log out" />
//         </div>
//       </PopoverContent>
//     </Popover>
//   );

//   const renderSidebarContent = () => (
//     <div className="space-y-4 p-4">
//       <NavItem icon={Home} label="Playground" collapsible>
//         <SubItem icon={History} label="History" />
//         <SubItem icon={Star} label="Starred" />
//         <SubItem icon={Settings} label="Settings" />
//       </NavItem>
//       <NavItem icon={Users} label="Models" collapsible>
//         <SubItem icon={User} label="Model A" />
//         <SubItem icon={User} label="Model B" />
//       </NavItem>
//       <NavItem icon={BookOpen} label="Documentation" collapsible>
//         <SubItem icon={BookOpen} label="API Docs" />
//         <SubItem icon={BookOpen} label="Guides" />
//       </NavItem>
//       <NavItem icon={Settings} label="Settings" collapsible>
//         <SubItem icon={Settings} label="General" />
//         <SubItem icon={Settings} label="Advanced" />
//       </NavItem>
//     </div>
//   );

//   return (
//     <div className="md:flex h-screen">
//       <div className="hidden md:flex w-64 flex-col border-r">
//         <div className="p-4 font-semibold flex items-center gap-2">
//           <Avatar className="h-8 w-8">
//             <AvatarFallback>AI</AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="text-sm font-medium">Acme Inc</p>
//             <p className="text-xs text-muted-foreground">Enterprise</p>
//           </div>
//         </div>
//         <ScrollArea className="flex-1">{renderSidebarContent()}</ScrollArea>
//         <div className="border-t">
//           <UserSidebarTrigger />
//         </div>
//       </div>

//       <div className="md:hidden">
//         <Sheet open={open} onOpenChange={setOpen}>
//           <SheetTrigger asChild>
//             <Button variant="ghost" className="m-2">
//               <ChevronDown className="h-5 w-5" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="p-0 w-64">
//             <div className="h-full flex flex-col">
//               <ScrollArea className="flex-1">
//                 {renderSidebarContent()}
//               </ScrollArea>
//               <div className="border-t">
//                 <UserSidebarTrigger />
//               </div>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import {
//   Home,
//   History,
//   Star,
//   Settings,
//   BookOpen,
//   Users,
//   LogOut,
//   User,
//   Bell,
//   CreditCard,
//   Rocket,
//   ChevronDown,
//   ChevronRight,
//   ChevronUp,
// } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);
//   const [expanded, setExpanded] = useState({
//     Playground: false,
//     Models: false,
//     Documentation: false,
//     Settings: false,
//   });

//   const toggleSection = (section) => {
//     setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   const NavItem = ({ icon: Icon, label, children, collapsible }) => (
//     <div>
//       <div
//         className="flex items-center justify-between px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer"
//         onClick={() => collapsible && toggleSection(label)}
//       >
//         <div className="flex items-center gap-3">
//           <Icon className="h-4 w-4" />
//           <span>{label}</span>
//         </div>
//         {collapsible &&
//           (expanded[label] ? (
//             <ChevronUp className="h-4 w-4" />
//           ) : (
//             <ChevronRight className="h-4 w-4" />
//           ))}
//       </div>
//       <AnimatePresence initial={false}>
//         {collapsible && expanded[label] && (
//           <motion.div
//             className="ml-8 space-y-1"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.2 }}
//           >
//             {children}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );

//   const SubItem = ({ icon: Icon, label }) => (
//     <div className="flex items-center gap-3 px-2 py-1 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer">
//       <Icon className="h-4 w-4" />
//       <span>{label}</span>
//     </div>
//   );

//   const UserSidebarTrigger = () => (
//     <Popover>
//       <PopoverTrigger asChild>
//         <div className="p-4 cursor-pointer hover:bg-muted flex items-center gap-3">
//           <Avatar>
//             <AvatarImage src="https://github.com/shadcn.png" />
//             <AvatarFallback>SC</AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="text-sm font-medium">shadcn</p>
//             <p className="text-xs text-muted-foreground">m@example.com</p>
//           </div>
//         </div>
//       </PopoverTrigger>
//       <PopoverContent side="right" align="start" className="w-64">
//         <motion.div
//           initial={{ x: 20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: 20, opacity: 0 }}
//           transition={{ duration: 0.2 }}
//           className="p-2 space-y-2"
//         >
//           <SubItem icon={Rocket} label="Upgrade to Pro" />
//           <SubItem icon={User} label="Account" />
//           <SubItem icon={CreditCard} label="Billing" />
//           <SubItem icon={Bell} label="Notifications" />
//           <SubItem icon={LogOut} label="Log out" />
//         </motion.div>
//       </PopoverContent>
//     </Popover>
//   );

//   const renderSidebarContent = () => (
//     <div className="space-y-4 p-4">
//       <NavItem icon={Home} label="Playground" collapsible>
//         <SubItem icon={History} label="History" />
//         <SubItem icon={Star} label="Starred" />
//         <SubItem icon={Settings} label="Settings" />
//       </NavItem>
//       <NavItem icon={Users} label="Models" collapsible>
//         <SubItem icon={User} label="Model A" />
//         <SubItem icon={User} label="Model B" />
//       </NavItem>
//       <NavItem icon={BookOpen} label="Documentation" collapsible>
//         <SubItem icon={BookOpen} label="API Docs" />
//         <SubItem icon={BookOpen} label="Guides" />
//       </NavItem>
//       <NavItem icon={Settings} label="Settings" collapsible>
//         <SubItem icon={Settings} label="General" />
//         <SubItem icon={Settings} label="Advanced" />
//       </NavItem>
//     </div>
//   );

//   return (
//     <div className="md:flex h-screen">
//       <div className="hidden md:flex w-64 flex-col border-r">
//         <div className="p-4 font-semibold flex items-center gap-2">
//           <Avatar className="h-8 w-8">
//             <AvatarFallback>AI</AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="text-sm font-medium">Acme Inc</p>
//             <p className="text-xs text-muted-foreground">Enterprise</p>
//           </div>
//         </div>
//         <ScrollArea className="flex-1">{renderSidebarContent()}</ScrollArea>
//         <div className="border-t">
//           <UserSidebarTrigger />
//         </div>
//       </div>

//       <div className="md:hidden">
//         <Sheet open={open} onOpenChange={setOpen}>
//           <SheetTrigger asChild>
//             <Button variant="ghost" className="m-2">
//               <ChevronDown className="h-5 w-5" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="p-0 w-64">
//             <div className="h-full flex flex-col">
//               <ScrollArea className="flex-1">
//                 {renderSidebarContent()}
//               </ScrollArea>
//               <div className="border-t">
//                 <UserSidebarTrigger />
//               </div>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import {
//   Home,
//   History,
//   Star,
//   Settings,
//   BookOpen,
//   Users,
//   LogOut,
//   User,
//   Bell,
//   CreditCard,
//   Rocket,
//   ChevronDown,
//   ChevronRight,
//   ChevronUp,
// } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);
//   const [expanded, setExpanded] = useState({
//     Playground: true,
//     Models: false,
//     Documentation: false,
//     Settings: false,
//   });

//   const toggleSection = (section) => {
//     setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   const NavItem = ({ icon: Icon, label, children, collapsible }) => (
//     <div className="overflow-hidden">
//       <div
//         className="flex items-center justify-between px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer"
//         onClick={() => collapsible && toggleSection(label)}
//       >
//         <div className="flex items-center gap-3">
//           <Icon className="h-4 w-4" />
//           <span>{label}</span>
//         </div>
//         {collapsible &&
//           (expanded[label] ? (
//             <ChevronUp className="h-4 w-4" />
//           ) : (
//             <ChevronRight className="h-4 w-4" />
//           ))}
//       </div>
//       <AnimatePresence initial={false}>
//         {collapsible && (
//           <motion.div
//             className="ml-8 overflow-hidden"
//             initial="collapsed"
//             animate={expanded[label] ? "open" : "collapsed"}
//             exit="collapsed"
//             variants={{
//               open: { opacity: 1, height: "auto" },
//               collapsed: { opacity: 0, height: 0 },
//             }}
//             transition={{
//               type: "spring",
//               stiffness: 300,
//               damping: 30,
//             }}
//           >
//             <div className="space-y-1">{children}</div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );

//   const SubItem = ({ icon: Icon, label }) => (
//     <div className="flex items-center gap-3 px-2 py-1 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer">
//       <Icon className="h-4 w-4" />
//       <span>{label}</span>
//     </div>
//   );

//   const UserSidebarTrigger = () => (
//     <Popover>
//       <PopoverTrigger asChild>
//         <div className="p-4 cursor-pointer hover:bg-muted flex items-center gap-3">
//           <Avatar>
//             <AvatarImage src="https://github.com/shadcn.png" />
//             <AvatarFallback>SC</AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="text-sm font-medium">shadcn</p>
//             <p className="text-xs text-muted-foreground">m@example.com</p>
//           </div>
//         </div>
//       </PopoverTrigger>
//       <PopoverContent side="right" align="start" className="w-64">
//         <motion.div
//           initial={{ x: 20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: 20, opacity: 0 }}
//           transition={{ duration: 0.2 }}
//           className="p-2 space-y-2"
//         >
//           <SubItem icon={Rocket} label="Upgrade to Pro" />
//           <SubItem icon={User} label="Account" />
//           <SubItem icon={CreditCard} label="Billing" />
//           <SubItem icon={Bell} label="Notifications" />
//           <SubItem icon={LogOut} label="Log out" />
//         </motion.div>
//       </PopoverContent>
//     </Popover>
//   );

//   const renderSidebarContent = () => (
//     <div className="space-y-4 p-4">
//       <NavItem icon={Home} label="Playground" collapsible>
//         <SubItem icon={History} label="History" />
//         <SubItem icon={Star} label="Starred" />
//         <SubItem icon={Settings} label="Settings" />
//       </NavItem>
//       <NavItem icon={Users} label="Models" collapsible>
//         <SubItem icon={User} label="Model A" />
//         <SubItem icon={User} label="Model B" />
//       </NavItem>
//       <NavItem icon={BookOpen} label="Documentation" collapsible>
//         <SubItem icon={BookOpen} label="API Docs" />
//         <SubItem icon={BookOpen} label="Guides" />
//       </NavItem>
//       <NavItem icon={Settings} label="Settings" collapsible>
//         <SubItem icon={Settings} label="General" />
//         <SubItem icon={Settings} label="Advanced" />
//       </NavItem>
//     </div>
//   );

//   return (
//     <div className="md:flex h-screen">
//       <div className="hidden md:flex w-64 flex-col border-r">
//         <div className="p-4 font-semibold flex items-center gap-2">
//           <Avatar className="h-8 w-8">
//             <AvatarFallback>AI</AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="text-sm font-medium">Acme Inc</p>
//             <p className="text-xs text-muted-foreground">Enterprise</p>
//           </div>
//         </div>
//         <ScrollArea className="flex-1">{renderSidebarContent()}</ScrollArea>
//         <div className="border-t">
//           <UserSidebarTrigger />
//         </div>
//       </div>

//       <div className="md:hidden">
//         <Sheet open={open} onOpenChange={setOpen}>
//           <SheetTrigger asChild>
//             <Button variant="ghost" className="m-2">
//               <ChevronDown className="h-5 w-5" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="p-0 w-64">
//             <div className="h-full flex flex-col">
//               <ScrollArea className="flex-1">
//                 {renderSidebarContent()}
//               </ScrollArea>
//               <div className="border-t">
//                 <UserSidebarTrigger />
//               </div>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import {
//   Home,
//   History,
//   Star,
//   Settings,
//   BookOpen,
//   Users,
//   LogOut,
//   User,
//   Bell,
//   CreditCard,
//   Rocket,
//   ChevronDown,
//   ChevronRight,
//   ChevronUp,
// } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);
//   const [expanded, setExpanded] = useState({
//     Playground: true,
//     Models: false,
//     Documentation: false,
//     Settings: false,
//   });

//   const toggleSection = (section) => {
//     setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   const NavItem = ({ icon: Icon, label, children, collapsible }) => (
//     <div className="overflow-hidden">
//       <div
//         className="flex items-center justify-between px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer transform transition-transform hover:scale-105 hover:opacity-90"
//         onClick={() => collapsible && toggleSection(label)}
//       >
//         <div className="flex items-center gap-3">
//           <motion.div
//             className="h-4 w-4"
//             animate={{
//               rotate: expanded[label] ? 90 : 0, // Rotate the icon when expanded
//               transition: { duration: 0.3 },
//             }}
//           >
//             <Icon className="h-4 w-4" />
//           </motion.div>
//           <span>{label}</span>
//         </div>
//         {collapsible &&
//           (expanded[label] ? (
//             <ChevronUp className="h-4 w-4" />
//           ) : (
//             <ChevronRight className="h-4 w-4" />
//           ))}
//       </div>
//       <AnimatePresence initial={false}>
//         {collapsible && (
//           <motion.div
//             className="ml-8 overflow-hidden"
//             initial="collapsed"
//             animate={expanded[label] ? "open" : "collapsed"}
//             exit="collapsed"
//             variants={{
//               open: {
//                 opacity: 1,
//                 height: "auto",
//                 transition: { staggerChildren: 0.1 },
//               },
//               collapsed: { opacity: 0, height: 0 },
//             }}
//             transition={{
//               type: "spring",
//               stiffness: 300,
//               damping: 30,
//             }}
//           >
//             <div className="space-y-1">{children}</div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );

//   const SubItem = ({ icon: Icon, label }) => (
//     <motion.div
//       className="flex items-center gap-3 px-2 py-1 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.2 }}
//     >
//       <Icon className="h-4 w-4" />
//       <span>{label}</span>
//     </motion.div>
//   );

//   const UserSidebarTrigger = () => (
//     <Popover>
//       <PopoverTrigger asChild>
//         <div className="p-4 cursor-pointer hover:bg-muted flex items-center gap-3">
//           <Avatar>
//             <AvatarImage src="https://github.com/shadcn.png" />
//             <AvatarFallback>SC</AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="text-sm font-medium">shadcn</p>
//             <p className="text-xs text-muted-foreground">m@example.com</p>
//           </div>
//         </div>
//       </PopoverTrigger>
//       <PopoverContent side="right" align="start" className="w-64">
//         <motion.div
//           initial={{ x: 20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: 20, opacity: 0 }}
//           transition={{ duration: 0.2 }}
//           className="p-2 space-y-2"
//         >
//           <SubItem icon={Rocket} label="Upgrade to Pro" />
//           <SubItem icon={User} label="Account" />
//           <SubItem icon={CreditCard} label="Billing" />
//           <SubItem icon={Bell} label="Notifications" />
//           <SubItem icon={LogOut} label="Log out" />
//         </motion.div>
//       </PopoverContent>
//     </Popover>
//   );

//   const renderSidebarContent = () => (
//     <div className="space-y-4 p-4">
//       <NavItem icon={Home} label="Playground" collapsible>
//         <SubItem icon={History} label="History" />
//         <SubItem icon={Star} label="Starred" />
//         <SubItem icon={Settings} label="Settings" />
//       </NavItem>
//       <NavItem icon={Users} label="Models" collapsible>
//         <SubItem icon={User} label="Model A" />
//         <SubItem icon={User} label="Model B" />
//       </NavItem>
//       <NavItem icon={BookOpen} label="Documentation" collapsible>
//         <SubItem icon={BookOpen} label="API Docs" />
//         <SubItem icon={BookOpen} label="Guides" />
//       </NavItem>
//       <NavItem icon={Settings} label="Settings" collapsible>
//         <SubItem icon={Settings} label="General" />
//         <SubItem icon={Settings} label="Advanced" />
//       </NavItem>
//     </div>
//   );

//   return (
//     <div className="md:flex h-screen">
//       <div className="hidden md:flex w-64 flex-col border-r">
//         <div className="p-4 font-semibold flex items-center gap-2">
//           <Avatar className="h-8 w-8">
//             <AvatarFallback>AI</AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="text-sm font-medium">Acme Inc</p>
//             <p className="text-xs text-muted-foreground">Enterprise</p>
//           </div>
//         </div>
//         <ScrollArea className="flex-1">{renderSidebarContent()}</ScrollArea>
//         <div className="border-t">
//           <UserSidebarTrigger />
//         </div>
//       </div>

//       <div className="md:hidden">
//         <Sheet open={open} onOpenChange={setOpen}>
//           <SheetTrigger asChild>
//             <Button variant="ghost" className="m-2">
//               <ChevronDown className="h-5 w-5" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="p-0 w-64">
//             <div className="h-full flex flex-col">
//               <ScrollArea className="flex-1">
//                 {renderSidebarContent()}
//               </ScrollArea>
//               <div className="border-t">
//                 <UserSidebarTrigger />
//               </div>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import {
//   Home,
//   History,
//   Star,
//   Settings,
//   BookOpen,
//   Users,
//   LogOut,
//   User,
//   Bell,
//   CreditCard,
//   Rocket,
//   ChevronDown,
//   ChevronRight,
//   ChevronUp,
// } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);
//   const [expanded, setExpanded] = useState({
//     Playground: false,
//     Models: false,
//     Documentation: false,
//     Settings: false,
//   });

//   const toggleSection = (section) => {
//     setExpanded((prev) => {
//       // If the clicked section is already open, collapse it
//       if (prev[section]) {
//         return { ...prev, [section]: false };
//       }
//       // Collapse all other sections and expand the clicked one
//       return Object.keys(prev).reduce((acc, key) => {
//         acc[key] = key === section;
//         return acc;
//       }, {});
//     });
//   };

//   const NavItem = ({ icon: Icon, label, children, collapsible }) => (
//     <div className="overflow-hidden">
//       <div
//         className="flex items-center justify-between px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer transform transition-transform hover:scale-105 hover:opacity-90"
//         onClick={() => collapsible && toggleSection(label)}
//       >
//         <div className="flex items-center gap-3">
//           <motion.div
//             className="h-4 w-4"
//             animate={{
//               rotate: expanded[label] ? 90 : 0, // Rotate the icon when expanded
//               transition: { duration: 0.3 },
//             }}
//           >
//             <Icon className="h-4 w-4" />
//           </motion.div>
//           <span>{label}</span>
//         </div>
//         {collapsible &&
//           (expanded[label] ? (
//             <ChevronUp className="h-4 w-4" />
//           ) : (
//             <ChevronRight className="h-4 w-4" />
//           ))}
//       </div>
//       <AnimatePresence initial={false}>
//         {collapsible && (
//           <motion.div
//             className="ml-8 overflow-hidden"
//             initial="collapsed"
//             animate={expanded[label] ? "open" : "collapsed"}
//             exit="collapsed"
//             variants={{
//               open: {
//                 opacity: 1,
//                 height: "auto",
//                 transition: { staggerChildren: 0.1 },
//               },
//               collapsed: { opacity: 0, height: 0 },
//             }}
//             transition={{
//               type: "spring",
//               stiffness: 300,
//               damping: 30,
//             }}
//           >
//             <div className="space-y-1">{children}</div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );

//   const SubItem = ({ icon: Icon, label }) => (
//     <motion.div
//       className="flex items-center gap-3 px-2 py-1 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.2 }}
//     >
//       <Icon className="h-4 w-4" />
//       <span>{label}</span>
//     </motion.div>
//   );

//   const UserSidebarTrigger = () => (
//     <Popover>
//       <PopoverTrigger asChild>
//         <div className="p-4 cursor-pointer hover:bg-muted flex items-center gap-3">
//           <Avatar>
//             <AvatarImage src="https://github.com/shadcn.png" />
//             <AvatarFallback>SC</AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="text-sm font-medium">shadcn</p>
//             <p className="text-xs text-muted-foreground">m@example.com</p>
//           </div>
//         </div>
//       </PopoverTrigger>
//       <PopoverContent side="right" align="start" className="w-64">
//         <motion.div
//           initial={{ x: 20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: 20, opacity: 0 }}
//           transition={{ duration: 0.2 }}
//           className="p-2 space-y-2"
//         >
//           <SubItem icon={Rocket} label="Upgrade to Pro" />
//           <SubItem icon={User} label="Account" />
//           <SubItem icon={CreditCard} label="Billing" />
//           <SubItem icon={Bell} label="Notifications" />
//           <SubItem icon={LogOut} label="Log out" />
//         </motion.div>
//       </PopoverContent>
//     </Popover>
//   );

//   const renderSidebarContent = () => (
//     <div className="space-y-4 p-4">
//       <NavItem icon={Home} label="Playground" collapsible>
//         <SubItem icon={History} label="History" />
//         <SubItem icon={Star} label="Starred" />
//         <SubItem icon={Settings} label="Settings" />
//       </NavItem>
//       <NavItem icon={Users} label="Models" collapsible>
//         <SubItem icon={User} label="Model A" />
//         <SubItem icon={User} label="Model B" />
//       </NavItem>
//       <NavItem icon={BookOpen} label="Documentation" collapsible>
//         <SubItem icon={BookOpen} label="API Docs" />
//         <SubItem icon={BookOpen} label="Guides" />
//       </NavItem>
//       <NavItem icon={Settings} label="Settings" collapsible>
//         <SubItem icon={Settings} label="General" />
//         <SubItem icon={Settings} label="Advanced" />
//       </NavItem>
//     </div>
//   );

//   return (
//     <div className="md:flex h-screen">
//       <div className="hidden md:flex w-64 flex-col border-r">
//         <div className="p-4 font-semibold flex items-center gap-2">
//           <Avatar className="h-8 w-8">
//             <AvatarFallback>AI</AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="text-sm font-medium">Acme Inc</p>
//             <p className="text-xs text-muted-foreground">Enterprise</p>
//           </div>
//         </div>
//         <ScrollArea className="flex-1">{renderSidebarContent()}</ScrollArea>
//         <div className="border-t">
//           <UserSidebarTrigger />
//         </div>
//       </div>

//       <div className="md:hidden">
//         <Sheet open={open} onOpenChange={setOpen}>
//           <SheetTrigger asChild>
//             <Button variant="ghost" className="m-2">
//               <ChevronDown className="h-5 w-5" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="p-0 w-64">
//             <div className="h-full flex flex-col">
//               <ScrollArea className="flex-1">
//                 {renderSidebarContent()}
//               </ScrollArea>
//               <div className="border-t">
//                 <UserSidebarTrigger />
//               </div>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import {
//   Home,
//   History,
//   Star,
//   Settings,
//   BookOpen,
//   Users,
//   LogOut,
//   User,
//   Bell,
//   CreditCard,
//   Rocket,
//   ChevronDown,
//   ChevronRight,
//   ChevronUp,
// } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);
//   const [expanded, setExpanded] = useState({
//     Playground: false,
//     Models: false,
//     Documentation: false,
//     Settings: false,
//   });

//   const toggleSection = (section) => {
//     setExpanded((prev) => {
//       if (prev[section]) {
//         return { ...prev, [section]: false };
//       }
//       return Object.keys(prev).reduce((acc, key) => {
//         acc[key] = key === section;
//         return acc;
//       }, {});
//     });
//   };

//   const NavItem = ({ icon: Icon, label, children, collapsible }) => (
//     <div className="overflow-hidden">
//       <div
//         className="flex items-center justify-between px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer transform transition-transform hover:scale-105 hover:opacity-90"
//         onClick={() => collapsible && toggleSection(label)}
//       >
//         <div className="flex items-center gap-3">
//           <motion.div
//             className="h-4 w-4"
//             animate={{
//               rotate: expanded[label] ? 90 : 0,
//               transition: { duration: 0.3 },
//             }}
//           >
//             <Icon className="h-4 w-4" />
//           </motion.div>
//           <span>{label}</span>
//         </div>
//         {collapsible &&
//           (expanded[label] ? (
//             <ChevronUp className="h-4 w-4" />
//           ) : (
//             <ChevronRight className="h-4 w-4" />
//           ))}
//       </div>
//       <AnimatePresence initial={false}>
//         {collapsible && (
//           <motion.div
//             className="ml-8 overflow-hidden"
//             initial="collapsed"
//             animate={expanded[label] ? "open" : "collapsed"}
//             exit="collapsed"
//             variants={{
//               open: {
//                 opacity: 1,
//                 height: "auto",
//                 transition: { staggerChildren: 0.1 },
//               },
//               collapsed: { opacity: 0, height: 0 },
//             }}
//             transition={{
//               type: "spring",
//               stiffness: 300,
//               damping: 30,
//             }}
//           >
//             <div className="space-y-1">{children}</div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );

//   const SubItem = ({ icon: Icon, label }) => (
//     <motion.div
//       className="flex items-center gap-3 px-2 py-1 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.2 }}
//     >
//       <Icon className="h-4 w-4" />
//       <span>{label}</span>
//     </motion.div>
//   );

//   const UserSidebarTrigger = () => (
//     <Popover>
//       <PopoverTrigger asChild>
//         <div className="p-4 cursor-pointer hover:bg-muted flex items-center gap-3">
//           <Avatar>
//             <AvatarImage src="https://github.com/shadcn.png" />
//             <AvatarFallback>SC</AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="text-sm font-medium">shadcn</p>
//             <p className="text-xs text-muted-foreground">m@example.com</p>
//           </div>
//         </div>
//       </PopoverTrigger>
//       <PopoverContent side="right" align="start" className="w-64">
//         <motion.div
//           initial={{ x: 20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: 20, opacity: 0 }}
//           transition={{ duration: 0.2 }}
//           className="p-2 space-y-2"
//         >
//           <SubItem icon={Rocket} label="Upgrade to Pro" />
//           <SubItem icon={User} label="Account" />
//           <SubItem icon={CreditCard} label="Billing" />
//           <SubItem icon={Bell} label="Notifications" />
//           <SubItem icon={LogOut} label="Log out" />
//         </motion.div>
//       </PopoverContent>
//     </Popover>
//   );

//   const renderSidebarContent = () => (
//     <div className="space-y-4 p-4 flex-1">
//       <NavItem icon={Home} label="Playground" collapsible>
//         <SubItem icon={History} label="History" />
//         <SubItem icon={Star} label="Starred" />
//         <SubItem icon={Settings} label="Settings" />
//       </NavItem>
//       <NavItem icon={Users} label="Models" collapsible>
//         <SubItem icon={User} label="Model A" />
//         <SubItem icon={User} label="Model B" />
//       </NavItem>
//       <NavItem icon={BookOpen} label="Documentation" collapsible>
//         <SubItem icon={BookOpen} label="API Docs" />
//         <SubItem icon={BookOpen} label="Guides" />
//       </NavItem>
//       <NavItem icon={Settings} label="Settings" collapsible>
//         <SubItem icon={Settings} label="General" />
//         <SubItem icon={Settings} label="Advanced" />
//       </NavItem>
//     </div>
//   );

//   return (
//     <div className="md:flex h-screen">
//       <div className="hidden md:flex w-64 flex-col border-r">
//         <div className="p-4 font-semibold flex items-center gap-2">
//           <Avatar className="h-8 w-8">
//             <AvatarFallback>AI</AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="text-sm font-medium">Acme Inc</p>
//             <p className="text-xs text-muted-foreground">Enterprise</p>
//           </div>
//         </div>
//         <ScrollArea className="flex-1">{renderSidebarContent()}</ScrollArea>
//         {/* Ensure this section stays at the bottom */}
//         <div className="flex-shrink-0 border-t">
//           <UserSidebarTrigger />
//         </div>
//       </div>

//       <div className="md:hidden">
//         <Sheet open={open} onOpenChange={setOpen}>
//           <SheetTrigger asChild>
//             <Button variant="ghost" className="m-2">
//               <ChevronDown className="h-5 w-5" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="p-0 w-64">
//             <div className="h-full flex flex-col">
//               <ScrollArea className="flex-1">
//                 {renderSidebarContent()}
//               </ScrollArea>
//               <div className="flex-shrink-0 border-t">
//                 <UserSidebarTrigger />
//               </div>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DayBook from "@/pages/DayBook";

import {
  Home,
  History,
  Star,
  Settings,
  BookOpen,
  Users,
  LogOut,
  User,
  Bell,
  CreditCard,
  Rocket,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Store,
  BookMarked,
  Notebook,
  UserRoundCog,
  PersonStanding,
  PencilOff,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState({
    "Day Book Entry": false,
    MRN: false,
    "Master Entry": false,
    "Write Off": false,
  });

  const [userName, setUserName] = useState("Login Name");
  useEffect(() => {
    const storedUser = localStorage.getItem("fullname");
    console.log(storedUser);
    if (storedUser) {
      setUserName(storedUser);
    }
  }, []);

  const getInitials = (userName) => {
    if (!userName) return "";

    const words = userName.trim().split(" ").filter(Boolean);
    if (words.length === 1) {
      return words[0][0].toUpperCase();
    }

    const first = words[0][0].toUpperCase();
    const last = words[words.length - 1][0].toUpperCase();

    return first + last;
  };

  const initials = getInitials(userName);

  const toggleSection = (section) => {
    setExpanded((prev) => {
      if (prev[section]) {
        return { ...prev, [section]: false };
      }
      return Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === section;
        return acc;
      }, {});
    });
  };

  //   const NavItem = ({ icon: Icon, label, children, collapsible }) => (
  //     <div className="overflow-hidden">
  //       <div
  //         className="flex items-center justify-between px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer transform transition-transform hover:scale-105 hover:opacity-90"
  //         onClick={() => collapsible && toggleSection(label)}
  //       >
  //         <div className="flex items-center gap-3">
  //           <motion.div
  //             className="h-4 w-4"
  //             animate={{
  //               rotate: expanded[label] ? 90 : 0,
  //               transition: { duration: 0.3 },
  //             }}
  //           >
  //             <Icon className="h-4 w-4" />
  //           </motion.div>
  //           <span>{label}</span>
  //         </div>
  //         {collapsible &&
  //           (expanded[label] ? (
  //             <ChevronUp className="h-4 w-4" />
  //           ) : (
  //             <ChevronRight className="h-4 w-4" />
  //           ))}
  //       </div>
  //       <AnimatePresence initial={false}>
  //         {collapsible && (
  //           <motion.div
  //             className="ml-8 overflow-hidden"
  //             initial="collapsed"
  //             animate={expanded[label] ? "open" : "collapsed"}
  //             exit="collapsed"
  //             variants={{
  //               open: {
  //                 opacity: 1,
  //                 height: "auto",
  //                 transition: { staggerChildren: 0.1 },
  //               },
  //               collapsed: { opacity: 0, height: 0 },
  //             }}
  //             transition={{
  //               type: "spring",
  //               stiffness: 300,
  //               damping: 30,
  //             }}
  //           >
  //             <div className="space-y-1">{children}</div>
  //           </motion.div>
  //         )}
  //       </AnimatePresence>
  //     </div>
  //   );

  const NavItem = ({ icon: Icon, label, children, collapsible, onClick }) => (
    <div className="overflow-hidden">
      <div
        className="flex items-center justify-between px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer transform transition-transform hover:scale-105 hover:opacity-90"
        onClick={() => {
          if (onClick) return onClick(); // handle redirect
          if (collapsible) toggleSection(label); // handle expand/collapse
        }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            className="h-4 w-4"
            animate={{
              rotate: expanded[label] ? 90 : 0,
              transition: { duration: 0.3 },
            }}
          >
            <Icon className="h-4 w-4" />
          </motion.div>
          <span>{label}</span>
        </div>
        {collapsible &&
          (expanded[label] ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          ))}
      </div>

      <AnimatePresence initial={false}>
        {collapsible && (
          <motion.div
            className="ml-8 overflow-hidden"
            initial="collapsed"
            animate={expanded[label] ? "open" : "collapsed"}
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: "auto",
                transition: { staggerChildren: 0.1 },
              },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className="space-y-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const SubItem = ({ icon: Icon, label }) => (
    <motion.div
      className="flex items-center gap-3 px-2 py-1 text-sm text-muted-foreground hover:bg-muted rounded-md cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </motion.div>
  );

  const UserSidebarTrigger = () => (
    <Popover>
      <PopoverTrigger asChild>
        <div className="p-4 cursor-pointer hover:bg-muted flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">shadcn</p>
            <p className="text-xs text-muted-foreground">m@example.com</p>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent side="right" align="start" className="w-64">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="p-2 space-y-2"
        >
          <SubItem icon={Rocket} label="Upgrade to Pro" />
          <SubItem icon={User} label="Account" />
          <SubItem icon={CreditCard} label="Billing" />
          <SubItem icon={Bell} label="Notifications" />
          <SubItem icon={LogOut} label="Log out" />
        </motion.div>
      </PopoverContent>
    </Popover>
  );

  const renderSidebarContent = () => (
    <div className="space-y-4 p-4 flex-1">
      <NavItem
        icon={BookMarked}
        onClick={() => navigate("/DayBook")}
        label="Day Book Entry"
        collapsible
      >
        {/* <SubItem icon={History} label="History" />
        <SubItem icon={Star} label="Starred" />
        <SubItem icon={Settings} label="Settings" /> */}
      </NavItem>
      <NavItem icon={Notebook} label="MRN" collapsible>
        {/* <SubItem icon={User} label="Model A" />
        <SubItem icon={User} label="Model B" /> */}
      </NavItem>
      <NavItem icon={UserRoundCog} label="Master Entry" collapsible>
        <SubItem icon={Store} label="Vendor" />
        <SubItem icon={PersonStanding} label="Employee" />
      </NavItem>
      <NavItem icon={PencilOff} label="Write Off" collapsible>
        <SubItem icon={Settings} label="Store" />
        <SubItem icon={Settings} label="E-Waster" />
      </NavItem>
    </div>
  );

  return (
    <div className="md:flex h-full">
      <div className="hidden md:flex w-64 flex-col border-r">
        <div className="p-4 font-semibold flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{userName}</p>
            {/* <p className="text-xs text-muted-foreground">Enterprise</p> */}
          </div>
        </div>
        <ScrollArea className="flex-1">{renderSidebarContent()}</ScrollArea>
        {/* Ensure the user info section is pinned to the bottom */}
        {/* <div className="mt-auto border-t">
          <UserSidebarTrigger />
        </div> */}
      </div>

      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="m-2">
              <ChevronDown className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <div className="h-full flex flex-col">
              <ScrollArea className="flex-1">
                {renderSidebarContent()}
              </ScrollArea>
              <div className="mt-auto border-t">
                <UserSidebarTrigger />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
