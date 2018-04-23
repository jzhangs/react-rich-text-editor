import React from 'react';
import classNames from 'classnames';

export default ({
  label, icon, active, onToggle
}) => {
  const className = classNames({
    'ant-editor-toolbar-icon': true,
    active
  });

  return (
    <li className={className} onMouseDown={onToggle}>
      {label || <i className={`icon-${icon}`} />}
    </li>
  );
};
