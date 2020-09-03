import { SIDE_BAR_COLLAPSED } from "../actions";

const initialState = {
  isCollapsed: false,
};

export function SideBarReducer(state = initialState, action) {
  switch (action.type) {
    case SIDE_BAR_COLLAPSED:
      return onCollapseSidebar(state);
    default:
      return state;
  }
}

function onCollapseSidebar(state) {
  console.log("call");
  return {
    isCollapsed: !state.isCollapsed,
  };
}
