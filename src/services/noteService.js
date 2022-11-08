import api from './api';

export async function DeleteNote(id) {
  await api.delete(`/notes/${id}`);
}
