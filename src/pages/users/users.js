import React from "react";
import { Col, Row } from "antd";
import UsersTable from "./users-table";
import { Users as ListUsers, Pagination } from "../../fake-data";
import { Card } from "../../layouts";

const Users = (props) => (
  <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 32 }} className="mb-20">
    <Col span={24}>
      <Row className="no-margin" gutter={{ xs: 24, sm: 24, md: 24, lg: 32 }}>
        <Card style={{ width: "100%" }}>
          <UsersTable
            dataSource={ListUsers}
            pagination={Pagination}
            onLoadMore={() => {}}
          />
        </Card>
      </Row>
    </Col>
  </Row>
);

export default Users;
