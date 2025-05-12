"use client";
import { EyeOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";

export default function AlbumPage() {
  const dataSource = [
    {
      id: "1",
      title: "Mike",
      user: 32,
      actions: (
        <Button>
          <EyeOutlined />
          Show
        </Button>
      ),
    },
    {
      id: "2",
      title: "John",
      user: 42,
      actions: (
        <Button>
          <EyeOutlined />
          Show
        </Button>
      ),
    },
    {
      id: "3",
      title: "John",
      user: 42,
      actions: (
        <Button>
          <EyeOutlined />
          Show
        </Button>
      ),
    },
    {
      id: "4",
      title: "John",
      user: 42,
      actions: (
        <Button>
          <EyeOutlined />
          Show
        </Button>
      ),
    },
    {
      id: "5",
      title: "John",
      user: 42,
      actions: (
        <Button>
          <EyeOutlined />
          Show
        </Button>
      ),
    },
    {
      id: "6",
      title: "John",
      user: 42,
      actions: (
        <Button>
          <EyeOutlined />
          Show
        </Button>
      ),
    },
    {
      id: "7",
      title: "John",
      user: 42,
      actions: (
        <Button>
          <EyeOutlined />
          Show
        </Button>
      ),
    },
    {
      id: "8",
      title: "John",
      user: 42,
      actions: (
        <Button>
          <EyeOutlined />
          Show
        </Button>
      ),
    },
    {
      id: "9",
      title: "John",
      user: 42,
      actions: (
        <Button>
          <EyeOutlined />
          Show
        </Button>
      ),
    },
    {
      id: "10",
      title: "John",
      user: 42,
      actions: (
        <Button>
          <EyeOutlined />
          Show
        </Button>
      ),
    },
    {
      id: "11",
      title: "John",
      user: 42,
      actions: (
        <Button>
          <EyeOutlined />
          Show
        </Button>
      ),
    },
  ];
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
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      width: "14%",
    },
  ];
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
}
