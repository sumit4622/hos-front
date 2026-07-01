// src/types/button.ts
import type { ButtonProps as AntdButtonProps } from "antd";

export interface CustomButtonProps extends AntdButtonProps {
  analyticsId?: string;
  isPremiumFeature?: boolean;
  color?:
    | "danger"
    | "default"
    | "primary"
    | "blue"
    | "purple"
    | "cyan"
    | "green"
    | "magenta"
    | "pink"
    | "red"
    | "orange"
    | "yellow"
    | "volcano"
    | "geekblue"
    | "lime"
    | "gold"
    | undefined;
}
