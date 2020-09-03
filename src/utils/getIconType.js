/* eslint-disable no-unreachable */
import {
  BookOutlined,
  CarOutlined,
  CheckOutlined,
  EditOutlined,
  EyeOutlined,
  FolderOpenOutlined,
  InfoCircleOutlined,
  IssuesCloseOutlined,
  KeyOutlined,
  LockOutlined,
  MailOutlined,
  PieChartOutlined,
  PlusOutlined,
  ProfileOutlined,
  SolutionOutlined,
  StarOutlined,
  SwitcherOutlined,
  TagsOutlined,
  ToolOutlined,
  UnlockOutlined,
  UnorderedListOutlined,
  UsergroupAddOutlined,
  WarningOutlined,
  AlignCenterOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import React from "react";

const listIcons = {
  InfoCircleOutlined,
  PlusOutlined,
  EditOutlined,
  MailOutlined,
  LockOutlined,
  EyeOutlined,
  KeyOutlined,
  CheckOutlined,
  IssuesCloseOutlined,
  TagsOutlined,
  UnorderedListOutlined,
  UnlockOutlined,
  ProfileOutlined,
  UsergroupAddOutlined,
  WarningOutlined,
  PieChartOutlined,
  SolutionOutlined,
  SwitcherOutlined,
  FolderOpenOutlined,
  BookOutlined,
  CarOutlined,
  ToolOutlined,
  StarOutlined,
  AlignCenterOutlined,
  CheckCircleFilled,
};

export default (iconType, iconProps = {}) => {
  const Icon =
    iconType && iconType.trim() && listIcons[iconType]
      ? listIcons[iconType]
      : null;

  return Icon && <Icon {...iconProps} />;
};
