import React from 'react';
import ToolbarItem from './ToolbarItem';

const BLOCK_TYPES = [
  { label: 'H1', type: 'header-one' },
  { label: 'H2', type: 'header-two' },
  { icon: 'list-unordered', type: 'unordered-list-item' },
  { icon: 'list-ordered', type: 'ordered-list-item' },
  { icon: 'quotes-left', type: 'blockquote' }
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
      {BLOCK_TYPES.map(block => (
        <ToolbarItem
          key={block.label || block.icon}
          active={block.style === blockType}
          {...block}
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

  onMouseLeave = () => this.setState({ expanded: true });

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
