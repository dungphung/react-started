import { Button, Result } from "antd";
import React from "react";
// import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  //   const navigate = useNavigate();

  const navigate = () => {};

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry"
      extra={
        <Button type="primary" onClick={() => navigate("/")}>
          Not found
        </Button>
      }
    />
  );
};

export default NotFoundPage;
