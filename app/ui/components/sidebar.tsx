import { Button } from "@nextui-org/react";
import { Eye, LayoutDashboard, LogOut, PieChart, User, UserPlus } from "lucide-react";
import Image from "next/image";
import DollarLogo from "../logo/logo";

export default function Sidebar({
  children,
  props,
}: {
  children: React.ReactNode;
  props?: any;
}) {
  return (
    <div
      color="default"
      className="w-80 text-gray-300 bg-gray-800 h-screen"
    >
      <div className="mx-auto">{children}</div>
    </div>
  );
}

export function Logo({ name, slogan }: { name: string; slogan: string }) {
  return (
    <div className="flex items-center justify-center py-10 border-b">
      <DollarLogo />
      <div className="space-y-px">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-sm">{slogan}</p>
      </div>
    </div>
  );
}

export function SideButtons() {
  const buttons = [
    { icon: <LayoutDashboard />, text: "Dashboard" },
    { icon: <User />, text: "My Profile" },
    { icon: <Eye />, text: "History" },
    { icon: <PieChart />, text: "Lottery" },
    { icon: <UserPlus />, text: "Invite Friends" },
  ];

  return (
    <div className="flex flex-col p-4 justify-between h-[660px]">
      <div className="w-full space-y-2">
        {buttons.map(({ icon, text }, index) => (
          <Button
            key={index}
            startContent={icon}
            radius="lg"
            size="lg"
            className="w-full justify-start bg-transparent hover:bg-slate-600"
          >
            {text}
          </Button>
        ))}
      </div>
      <Button
        radius="lg"
        size="lg"
        className="w-full bg-transparent hover:bg-slate-600"
        startContent={<LogOut />}
      >
        Log Out
      </Button>
    </div>
  );
}
