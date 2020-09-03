import React, { Component } from "react";

import CustomModal from "./modal-context";

export const CustomModalContext = React.createContext({
  openModal: () => {},
  closeModal: () => {},
  forceCloseModal: () => {},
  updatePropsModal: () => {},
  stopLoading: () => {},
});

export default class ModalContext extends Component {
  static Consumer = CustomModalContext.Consumer;

  customModal = React.createRef();

  componentDidMount = () => {
    this.forceUpdate();
  };

  _getPropToProvider = () => {
    if (!this.customModal.current) return {};
    return {
      openModal: this.customModal.current._openModal,
      closeModal: this.customModal.current._closeModal,

      forceCloseModal: this.customModal.current._forceCloseModal,
      stopLoading: this.customModal.current._stopLoading,
      updatePropsModal: this.customModal.current._updatePropsModal,
    };
  };

  render() {
    return (
      <CustomModalContext.Provider value={this._getPropToProvider()}>
        {this.props.children}
        <CustomModal ref={this.customModal} />
      </CustomModalContext.Provider>
    );
  }
}
