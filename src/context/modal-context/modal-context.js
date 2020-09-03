import React, { Component } from "react";
import { Modal } from "antd";
import update from "immutability-helper";

export default class CustomModal extends Component {
  state = {
    visible: false,
    confirmLoading: false,
    propsModal: {},
    propsComponent: {},
  };

  internalSetState = (change, callback = () => {}) => {
    if (this.mounted) {
      this.setState((currentState) => {
        return typeof change === "function" ? change(currentState) : change;
      }, callback);
    }
  };

  componentDidMount = () => {
    this.mounted = true;
  };

  componentWillUnmount = () => {
    this.mounted = false;
  };

  propModal = {};

  _openModal = (propsComponent = {}, propsModal = {}) => {
    this.internalSetState({
      visible: true,
      propsComponent: { ...propsComponent },
      propsModal: { ...propsModal },
    });
  };

  _closeModal = () => {
    const { callBack } = this.state.propsComponent;
    this.internalSetState(
      (prev) => {
        return update(prev, {
          visible: { $set: false },
          confirmLoading: { $set: false },
          propsModal: {
            component: { $set: null },
          },
        });
      },
      () => {
        Modal.destroyAll();
        callBack && callBack();
      },
    );
  };

  _stopLoading = (component = null) => {
    if (component) {
      this.internalSetState((prev) => {
        return update(prev, {
          confirmLoading: { $set: false },
          propsModal: {
            component: { $set: component },
          },
        });
      });
    } else {
      this.internalSetState({ confirmLoading: false });
    }
  };

  _updatePropsModal = (component) => {
    this.internalSetState((prev) => {
      return update(prev, {
        propsModal: {
          component: { $set: component },
        },
      });
    });
  };

  _forceCloseModal = () => {
    const { callBack } = this.state.propsComponent;
    this.internalSetState(
      (prev) => {
        return update(prev, {
          visible: { $set: false },
          confirmLoading: { $set: false },
          propsModal: {
            component: { $set: null },
          },
        });
      },
      () => {
        Modal.destroyAll();
        callBack && callBack();
      },
    );
  };

  _handleClickOk = () => {
    const { onSubmit } = this.state.propsComponent;
    if (onSubmit) {
      this.internalSetState({ confirmLoading: true }, () => onSubmit());
    } else {
      this._closeModal();
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (!this.state.visible && prevState.visible) {
      this.internalSetState((prev) => {
        return update(prev, {
          propsComponent: { $set: null },
          propsModal: { $set: {} },
        });
      });
    }
  };

  modal = null;

  render() {
    const { visible, confirmLoading, propsModal } = this.state;

    return (
      <Modal
        ref={(ref) => {
          this.modal = ref;
        }}
        okText="Xác nhận"
        cancelText="Bỏ qua"
        {...propsModal}
        style={{ top: 20 }}
        visible={visible}
        confirmLoading={confirmLoading}
        onCancel={this._closeModal}
        onOk={this._handleClickOk}
      >
        {propsModal.component}
      </Modal>
    );
  }
}
