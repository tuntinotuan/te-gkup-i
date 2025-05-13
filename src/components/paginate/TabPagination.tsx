import React from "react";
import Link from "next/link";

const TabPagination = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Link href={href} className="flex items-center gap-1 text-gray-500">
        {children}
      </Link>
      <p>/</p>
      <p>Show</p>
    </div>
  );
};

export default TabPagination;
