import React, { useCallback } from "react";
import { Button, Checkbox, Form, Input } from "antd";
// import { useNavigate, useLocation } from "react-router-dom";

import "./index.css";

const LoginForm = ({ history }) => {
  const onPressed = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <div className="form-login">
      <Form className="login-page-form">
        <h2>REACT ANTD ADMIN</h2>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "username is required！" }]}
        >
          <Input placeholder="username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "password is required！" }]}
        >
          <Input type="password" placeholder="password" />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            className="login-page-form_button"
            onClick={onPressed}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
