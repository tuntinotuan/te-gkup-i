import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import AlbumIcon from "../icon/AlbumIcon";
import UserIcon from "../icon/UserIcon";
import { Tooltip } from "antd";

const Sidebar = () => {
  const [resizeWidth, setResizeWidth] = useState(false);
  const lists = [
    {
      name: "albums",
      icon: <AlbumIcon></AlbumIcon>,
      href: {
        pathname: "/albums",
        query: {
          pageSize: 10,
          current: 1,
        },
      },
    },
    {
      name: "users",
      icon: <UserIcon></UserIcon>,
      href: "/users",
    },
  ];
  return (
    <div
      className={`relative flex flex-col gap-1 h-[90vh] px-1 pt-2 transition-all ${
        resizeWidth ? "w-[50px]" : "w-[230px]"
      }`}
    >
      <div className="sticky top-0 flex flex-col gap-1">
        {lists.map((item) => (
          <Item
            key={item.name}
            icon={item.icon}
            name={item.name}
            href={item.href}
            resizeWidth={resizeWidth}
          ></Item>
        ))}
      </div>
      <div
        className="absolute bottom-0 flex items-center justify-center mt-auto w-full text-blue-400 py-4 cursor-pointer"
        onClick={() => setResizeWidth((pre) => !pre)}
      >
        {resizeWidth && <RightOutlined />}
        {!resizeWidth && <LeftOutlined />}
      </div>
    </div>
  );
};

const Item = ({
  icon,
  name,
  href,
  resizeWidth,
}: {
  icon: React.ReactNode;
  name: string;
  href: string | URL | { pathname: string; query?: Record<string, number> };
  resizeWidth: boolean;
}) => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  const Main = () => {
    return (
      <Link
        href={href}
        className={`flex items-center gap-2 text-sm rounded-lg px-5 py-[10px] transition-all cursor-pointer ${
          pathname.includes(name)
            ? "bg-[#E6F4FF] text-blue-400"
            : "hover:bg-gray-100"
        } ${resizeWidth ? "justify-center" : ""}`}
      >
        <div>{icon}</div>
        {!resizeWidth && (
          <p
            className={`capitalize transition-all ${
              resizeWidth ? "opacity-0" : "opacity-100"
            }`}
          >
            {name}
          </p>
        )}
      </Link>
    );
  };
  if (resizeWidth)
    return (
      <Tooltip title={name} placement="right">
        <div>
          <Main />
        </div>
      </Tooltip>
    );
  return <Main />;
};

export default Sidebar;
