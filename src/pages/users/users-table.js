import React, { useMemo } from "react";
import { Pagination, Table } from "antd";
import { Button } from "../../components";
import { UserFullInfo } from "../../layouts";

const UserTables = ({
  dataSource,
  pagination,
  loading,
  onLoadMore,
  onReset,
  refetchData,
  history,
}) => {
  const columns = useMemo(
    () => [
      {
        title: "Tên thành viên",
        dataIndex: "cus_name",
        key: "cus_name",
        className: "custom-table-header",
        render: (cus_name, record) => (
          <>
            <UserFullInfo cus_name={cus_name} cus_email={record.cus_email} />
          </>
        ),
      },

      {
        title: "Ngày tham gia",
        dataIndex: "created_date",
        key: "created_date",
        render: (text) => <span>{text}</span>,
      },
      {
        key: "action",
        title: "Hành động",
        render: (customer) => {
          return (
            <Button
              icon="AlignCenterOutlined"
              type="danger"
              onClick={() => {}}
            />
          );
        },
      },
    ],
    [],
  );

  return (
    <>
      <Table
        loading={loading}
        rowKey={(record) => record.shard_id}
        columns={columns}
        dataSource={dataSource}
        className="mb-20"
        pagination={false}
      />
      {pagination && (
        <Pagination
          showSizeChanger={false}
          style={{ float: "right", marginTop: 20 }}
          onChange={(page) => onLoadMore({ page })}
          total={pagination.totalItem}
          current={pagination.page}
          pageSize={pagination.itemPerPage}
        />
      )}
    </>
  );
};

export default UserTables;
