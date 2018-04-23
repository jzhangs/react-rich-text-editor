import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { SideToolbar, InlineToolbar } from './components/toolbar';

import './index.scss';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      inlineToolbar: { show: false }
    };
  }

  componentDidMount() {
    // this.editor.focus();
  }

  onChange = (editorState) => {
    if (!editorState.getSelection().isCollapsed()) {
      this.setState({
        inlineToolbar: {
          show: true
        }
      });
    } else {
      this.setState({
        inlineToolbar: { show: false }
      });
    }

    this.setState({ editorState });
  };

  editorRef = (ref) => {
    this.editor = ref;
  };

  focus = () => this.editor.focus();

  handleKeyCommand = (command) => {
    const { editorState } = this.state;
    const nextState = RichUtils.handleKeyCommand(editorState, command);
    if (nextState) {
      this.onChange(nextState);
      return true;
    }
    return false;
  };

  toggleBlockType = (type) => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, type));
  };

  toggleInlineStyle = (style) => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, style));
  };

  render() {
    const { editorState, inlineToolbar } = this.state;

    const sideToolBarOffsetTop = 0;
    return (
      <div className="editor" onClick={this.focus}>
        <SideToolbar
          editorState={editorState}
          style={{ top: sideToolBarOffsetTop }}
          onToggle={this.toggleBlockType}
        />

        {
          inlineToolbar.show
          ? <InlineToolbar editorState={editorState} onToggle={this.toggleInlineStyle} />
          : null
        }
        <Editor
          ref={this.editorRef}
          placeholder="Write something"
          editorState={editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
        />
      </div>
    );
  }
}

export default TextEditor;
