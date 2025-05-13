"use client";
import UserAvatar from "@/components/avatar/UserAvatar";
import AlbumIcon from "@/components/icon/AlbumIcon";
import TabPagination from "@/components/paginate/TabPagination";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ClientComponent = ({
  userData,
  photoData,
  album,
}: {
  userData: [];
  photoData: [];
  album: any;
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-1">
      <TabPagination href="http://localhost:3000/albums?pageSize=10&current=1">
        <AlbumIcon></AlbumIcon>Albums
      </TabPagination>
      <div className="flex items-center gap-3">
        <button
          className="hover:bg-gray-300 rounded px-2 py-1 transition-all cursor-pointer"
          onClick={() => router.back()}
        >
          <ArrowLeftOutlined />
        </button>
        <p className="text-xl font-medium">Show Album</p>
      </div>
      <Main userData={userData} photoData={photoData} album={album}></Main>
    </div>
  );
};

const Main = ({
  userData,
  photoData,
  album,
}: {
  userData: any;
  photoData: [];
  album: any;
}) => {
  return (
    <div className="bg-white rounded-lg p-5 shadow mt-3">
      <div className="rounded-lg border border-gray-200 p-5">
        <PersonInfo
          name={userData.name}
          email={userData.email}
          id={userData.id}
        ></PersonInfo>
        <p className="text-lg font-semibold mt-5">{album.title}</p>
        <div className="grid grid-cols-6 gap-1 mt-5">
          {photoData.map((item: any) => (
            <div key={item.id} className="relative flex items-start">
              <div className="absolute inset-0 hover:bg-black/40 transition-all cursor-pointer"></div>
              <Image src={item.url} width={20} height={50} alt=""></Image>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PersonInfo = ({
  name,
  email,
  id,
}: {
  name: string;
  email: string;
  id: number;
}) => {
  return (
    <div className="flex items-start gap-4 border border-transparent border-b-gray-200 pb-5">
      <UserAvatar
        src={`https://ui-avatars.com/api/?background=random&name=${
          name[0] + "+" + name.split(" ")[1]
        }`}
        alt={name}
      ></UserAvatar>
      <div className="flex flex-col gap-2">
        <Link
          href={`/users/${id}`}
          className="text-blue-500 font-semibold cursor-pointer"
        >
          {name}
        </Link>
        <a
          href={`mailto:${email}?subject=Hello&body=How%20are%20you?`}
          className="text-sm text-blue-500 cursor-pointer"
        >
          {email}
        </a>
      </div>
    </div>
  );
};

export default ClientComponent;
