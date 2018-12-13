import React from 'react';
import { createPortal } from 'react-dom';

export default class PortalComponent extends React.Component {
  root = document.createElement('div');

  componentDidUpdate(prevProps) {
    if (this.props.open && this.props.open !== prevProps.open) {
      document.body.appendChild(this.root);
    }

    if (!this.props.open && prevProps.open) {
      document.body.removeChild(this.root);
    }
  }

  componentWillUnmount() {
    if (this.props.open) {
      document.body.removeChild(this.root);
    }
  }

  render() {
    const content = !this.props.open ? null : (
      <div>
        {this.props.message}
      </div>
    );

    return createPortal(content, this.root);
  }
}
