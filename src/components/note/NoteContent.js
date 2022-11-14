import MDEditor from '@uiw/react-md-editor';
import { Fade } from 'react-reveal';
import styled from 'styled-components';

export default function NoteContent({
  content, clickNoteId, id, edit,
}) {
  return (
    <Fade opposite collapse when={clickNoteId === id && !edit}>

      <Content data-color-mode="light" con={clickNoteId === id && !edit}>
        <MDEditor.Markdown
          source={content}
          linkTarget="_blank"
          style={{ maxHeight: '350px', overflow: 'auto' }}
        />

      </Content>
    </Fade>

  );
}

const Content = styled.div`
  padding: 15px;
  background: white;
  border-radius: 5px;
`;
