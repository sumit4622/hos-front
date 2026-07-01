// src/components/Button.tsx
import React from "react";
import { Button as AntdButton } from "antd";
import type { CustomButtonProps } from "../types/button.types";

export const Button: React.FC<CustomButtonProps> = ({
  analyticsId,
  isPremiumFeature,
  children,
  onClick,
  ...props //
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 1. Fire an analytics event if an ID was passed
    if (analyticsId) {
      console.log(`Analytics logged for: ${analyticsId}`);
    }

    // 2. Trigger the normal onClick behavior passed by the user
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <AntdButton onClick={handleClick} {...props}>
      {isPremiumFeature && "👑 "}
      {children}
    </AntdButton>
  );
};
//
