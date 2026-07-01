import React from "react";
import { Descriptions, Typography, Button } from "antd";
import type { DashboardHeaderProps } from "../types/header.types";

const { Title, Text } = Typography;

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  logo,
  title,
  subTitle,
}) => {
  return (
    <div
      style={{
        background: "#f5f5f5",
        padding: "29px",
        borderRadius: "8px",
      }}
    >
      <div className="flex ">
        <div className="w-64">
          <img
            src={logo}
            alt="Logo"
            style={{
              // width: "125px",
              height: "65px",
              objectFit: "contain",
            }}
          />

          <Title level={2} style={{ marginTop: 3 }}>
            {title}
          </Title>
          <Text type="secondary">{subTitle}</Text>
        </div>
        <div className=" tittle">
          <p>this is select button</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
