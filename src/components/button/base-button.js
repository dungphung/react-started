import React from "react";
import { Button } from "antd";
import { getIconType } from "../../utils";

const BaseButton = ({ className, type, title, icon, ...props }) => {
  return (
    <Button
      className={`${className} ant-btn-${
        type !== "primary" ? `custom-` : ``
      }${type}`}
      icon={getIconType(icon)}
      {...props}
    >
      {title}
    </Button>
  );
};

export default BaseButton;
