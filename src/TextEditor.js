import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import SideToolbar from './components/toolbar';

import './index.scss';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  componentDidMount() {
    // this.editor.focus();
  }

  onChange = editorState => this.setState({ editorState });

  editorRef = (ref) => {
    this.editor = ref;
  };

  handleKeyCommand = (command) => {
    const { editorState } = this.state;
    const nextState = RichUtils.handleKeyCommand(editorState, command);
    if (nextState) {
      this.onChange(nextState);
      return true;
    }
    return false;
  }

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <SideToolbar editorState={editorState} />
        <Editor
          ref={this.editorRef}
          editorState={editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
        />
      </div>
    );
  }
}

export default TextEditor;
