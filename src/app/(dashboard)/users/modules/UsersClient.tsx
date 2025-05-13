"use client";
import UserAvatar from "@/components/avatar/UserAvatar";
import ButtonLeftIcon from "@/components/button/ButtonLeftIcon";
import { Table, TablePaginationConfig } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
  email: string;
}
const UsersClient = ({ data }: { data: [] }) => {
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
  // const userMap = users && new Map(users.map((user) => [user.id, user]));
  const newData = data.map(
    (item: {
      email: string;
      phone: number;
      website: string;
      id: number;
      name: string;
    }) => ({
      ...item,
      actions: (
        <ButtonLeftIcon
          onClick={() => router.push(`/users/${item.id}`)}
        ></ButtonLeftIcon>
      ),
      avatar: (
        <UserAvatar
          src={`https://ui-avatars.com/api/?background=random&name=${
            item.name[0] + "+" + item.name.split(" ")[1]
          }`}
          alt={item.name}
        ></UserAvatar>
      ),
      email: (
        <a
          href={`mailto:${item.email}`}
          className="text-sm text-blue-500 cursor-pointer"
        >
          {item.email}
        </a>
      ),
      phone: (
        <a
          href={`tel:${item.phone}`}
          className="text-sm text-blue-500 cursor-pointer"
        >
          {item.phone}
        </a>
      ),
      website: (
        <a
          href={`https://${item.website}/`}
          target="_blank"
          className="text-sm text-blue-500 cursor-pointer"
        >
          {item.website}
        </a>
      ),
    })
  );

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",

      width: "6%",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "22%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "22%",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: "22%",
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website",
      width: "22%",
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
      <p className="font-semibold mb-4">Users</p>
      <Table
        dataSource={newData}
        columns={columns}
        loading={loading}
        pagination={
          data.length <= 10
            ? false
            : {
                current,
                pageSize,
                total: data.length,
                showSizeChanger: true,
              }
        }
        onChange={handleChange}
        rowKey="id"
      />
    </>
  );
};

export default UsersClient;
