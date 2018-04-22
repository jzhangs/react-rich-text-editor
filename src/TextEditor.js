import React from 'react';
import { Editor, EditorState } from 'draft-js';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onChange = editorState => this.setState({ editorState });

  render() {
    const { editorState } = this.state;
    return <Editor editorState={editorState} onChange={this.onChange} />;
  }
}

export default TextEditor;
