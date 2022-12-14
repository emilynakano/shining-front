import useApiPrivate from '../hooks/useApiPrivate';

export default function noteService() {
  const api = useApiPrivate();

  async function editNote({ id, content }) {
    await api.patch(`/notes/${id}`, { content });
  }

  async function deleteNote(id) {
    await api.delete(`/notes/${id}`);
  }

  async function reviewNote(id) {
    await api.patch(`notes/${id}/review`, {});
  }

  async function getNotes() {
    const notes = await api.get('/notes');
    return notes.data;
  }

  async function getTodayNotes() {
    const notes = await api.get('/notes/today');
    return notes.data;
  }

  return {
    deleteNote, getNotes, getTodayNotes, reviewNote, editNote,
  };
}
