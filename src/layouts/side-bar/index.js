import { withRouter } from "react-router-dom";
import SideBar from "./side-bar";
import { connectAutoDispatch } from "../../utils";
import { onCollapseSidebar } from "../../redux/actions";

const withSideBarRedux = connectAutoDispatch(
  (state) => {
    console.log(state);
    return {
      isCollapsed: state.SideBarReducer.isCollapsed,
    };
  },
  {
    onCollapseSidebar,
  },
)(SideBar);

export default withRouter(withSideBarRedux);
