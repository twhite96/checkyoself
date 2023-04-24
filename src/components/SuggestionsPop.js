import React from 'react'
import { Popover } from 'antd'
import '../smde-editor.css'

class SuggestionsPop extends React.Component {
  state = {
    visible: false
  };

  hide = () => {
    this.setState({
      visible: false
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    let { suggestion, children } = this.props;
    return (
      <Popover
        content={suggestion.reason}
        trigger="hover"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <span className="suggestion">
          {children}
        </span>
      </Popover>
    );
  }
}

export default SuggestionsPop;