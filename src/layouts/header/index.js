import Header from "./header";
import { withRouter } from "react-router-dom";
import { connectAutoDispatch } from "../../utils";
import { onCollapseSidebar } from "../../redux/actions";

const withReduxHeader = connectAutoDispatch(
  (state) => {
    return {};
  },
  { onCollapseSidebar },
)(Header);

export default withRouter(withReduxHeader);
