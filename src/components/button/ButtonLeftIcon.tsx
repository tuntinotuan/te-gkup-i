import { EyeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const ButtonLeftIcon = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Button onClick={onClick} className="!px-3">
      <EyeOutlined />
      Show
    </Button>
  );
};

export default ButtonLeftIcon;
