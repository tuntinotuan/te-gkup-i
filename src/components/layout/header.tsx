import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex px-4 py-5">
      <Link href="/">
        <Image
          className="cursor-pointer"
          src="/geekup.svg"
          alt="Geek up logo"
          width={100}
          height={38}
          priority
        />
      </Link>
    </div>
  );
};

export default Header;
