import Image from "next/image";
import React from "react";

const UserAvatar = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Image
      src={src}
      width={30}
      height={30}
      alt={alt}
      className="rounded-full"
    ></Image>
  );
};

export default UserAvatar;
