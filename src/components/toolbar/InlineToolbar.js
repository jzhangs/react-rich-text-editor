import React from 'react';
import ToolbarItem from './ToolbarItem';

const INLINE_STYLES = [{ icon: 'bold', type: 'BOLD' }, { icon: 'italic', type: 'ITALIC' }];

export default ({ editorState, onToggle, position }) => {
  const currentStyle = editorState.getCurrentInlineStyle();
  return (
    <div className="toolbar" style={position}>
      <ul className="toolbar-icons">
        {INLINE_STYLES.map(inline => (
          <ToolbarItem
            key={inline.label || inline.icon}
            active={currentStyle.has(inline.type)}
            {...inline}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
};
