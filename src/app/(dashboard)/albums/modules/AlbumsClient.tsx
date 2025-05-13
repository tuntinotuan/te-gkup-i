"use client";
import UserAvatar from "@/components/avatar/UserAvatar";
import ButtonLeftIcon from "@/components/button/ButtonLeftIcon";
import { Table, TablePaginationConfig } from "antd";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
  email: string;
}
const AlbumsClient = ({ data }: { data: [] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch albums and users
  useEffect(() => {
    const fetchData = async () => {
      const [usersRes] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
      ]);

      const usersData = await usersRes.json();

      setUsers(usersData);
      setLoading(false);
    };

    fetchData();
  }, []);
  console.log("users", users);
  // Map userId → user
  const userMap = users && new Map(users.map((user) => [user.id, user]));
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

      width: "6%",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      width: "22%",
      render: (_: string, record: any) => {
        const user = userMap.get(record.userId);
        return user ? (
          <Link
            href={`/users/${user.id}`}
            style={{ display: "flex", alignItems: "center", gap: 8 }}
            className="text-blue-500 font-semibold cursor-pointer"
          >
            <UserAvatar
              src={`https://ui-avatars.com/api/?background=random&name=${
                user.name[0] + "+" + user.name.split(" ")[1]
              }`}
              alt={user.name}
            ></UserAvatar>
            <span>{user.name}</span>
          </Link>
        ) : (
          "Unknown"
        );
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      width: "14%",
    },
  ];

  const current = parseInt(searchParams.get("current") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);

  const handleChange = (pagination: TablePaginationConfig) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("current", (pagination.current ?? 1).toString());
    params.set("pageSize", (pagination.pageSize ?? 10).toString());

    router.push(`?${params.toString()}`);
  };
  return (
    <>
      <p className="font-semibold mb-4">Albums</p>
      <Table
        dataSource={newData}
        columns={columns}
        loading={loading}
        pagination={{
          current,
          pageSize,
          total: data.length,
          showSizeChanger: true,
        }}
        onChange={handleChange}
        rowKey="id"
      />
    </>
  );
};

export default AlbumsClient;
