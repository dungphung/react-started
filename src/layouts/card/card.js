import React from "react";
import { Card } from "antd";

function CardBlock({ children, style, ...props }) {
  return (
    <Card style={style} {...props}>
      {style
        ? React.Children.map(children, (child) => {
            return React.cloneElement(child, { style });
          })
        : children}
    </Card>
  );
}

export default CardBlock;
