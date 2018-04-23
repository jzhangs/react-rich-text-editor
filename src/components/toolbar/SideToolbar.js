import React from 'react';
import ToolbarItem from './ToolbarItem';

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { icon: 'list-unordered', style: 'unordered-list-item' },
  { icon: 'list-ordered', style: 'ordered-list-item' },
  { icon: 'quotes-left', style: 'blockquote' }
];

const SideToolbarExtras = ({ editorState, onToggle }) => {
  const selecton = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selecton.getStartKey())
    .getType();

  return (
    <div className="toolbar side">
      <ul className="toolbar-icons" />
      {BLOCK_TYPES.map(type => (
        <ToolbarItem
          key={type.label || type.icon}
          active={type.style === blockType}
          {...type}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

class SideToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  onMouseEnter = () => this.setState({ expanded: true });

  // onMouseDown = (e) =

  onMouseLeave = () => this.setState({ expanded: false });

  render() {
    const { expanded } = this.state;
    const { editorState, onToggle, style } = this.props;

    return (
      <div style={style} className="side-toolbar">
        <i className="icon-menu" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          {expanded ? <SideToolbarExtras editorState={editorState} onToggle={onToggle} /> : null}
        </i>
      </div>
    );
  }
}

export default SideToolbar;
