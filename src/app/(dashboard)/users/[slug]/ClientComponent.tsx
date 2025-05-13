"use client";
import UserAvatar from "@/components/avatar/UserAvatar";
import ButtonLeftIcon from "@/components/button/ButtonLeftIcon";
import UserIcon from "@/components/icon/UserIcon";
import TabPagination from "@/components/paginate/TabPagination";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Table } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ClientComponent = ({
  userData,
  albumData,
}: {
  userData: [];
  albumData: [];
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-1">
      <TabPagination href="http://localhost:3000/users">
        <UserIcon></UserIcon>Users
      </TabPagination>
      <div className="flex items-center gap-3">
        <button
          className="hover:bg-gray-300 rounded px-2 py-1 transition-all cursor-pointer"
          onClick={() => router.back()}
        >
          <ArrowLeftOutlined />
        </button>
        <p className="text-xl font-medium">Show User</p>
      </div>
      <Main userData={userData} data={albumData}></Main>
    </div>
  );
};

const Main = ({ userData, data }: { userData: any; data: [] }) => {
  const router = useRouter();
  const newData = data.map((item: any) => ({
    ...item,
    actions: (
      <ButtonLeftIcon
        onClick={() => router.push(`/albums/${item.id}`)}
      ></ButtonLeftIcon>
    ),
  }));

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: "10%",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      width: "24%",
    },
  ];
  return (
    <div className="bg-white rounded-lg p-5 shadow mt-3">
      <div className="rounded-lg border border-gray-200 p-5">
        <PersonInfo name={userData.name} email={userData.email}></PersonInfo>
        <div className="mt-5">
          <Table
            dataSource={newData}
            columns={columns}
            pagination={false}
            rowKey="id"
          />
        </div>
      </div>
    </div>
  );
};

const PersonInfo = ({ name, email }: { name: string; email: string }) => {
  return (
    <div className="flex items-start gap-4 border border-transparent border-b-gray-200 pb-5">
      <UserAvatar
        src={`https://ui-avatars.com/api/?background=random&name=${
          name[0] + "+" + name.split(" ")[1]
        }`}
        alt={name}
      ></UserAvatar>
      <div className="flex flex-col gap-2">
        {name}
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
