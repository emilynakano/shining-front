import useApiPrivate from '../hooks/useApiPrivate';

export default function noteService() {
  const api = useApiPrivate();

  async function deleteNote(id) {
    await api.delete(`/notes/${id}`);
  }

  async function reviewNote(id) {
    const notes = await api.patch(`notes/${id}/review`, {});
    return notes.data;
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
    deleteNote, getNotes, getTodayNotes, reviewNote,
  };
}
