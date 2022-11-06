import api from './api';

export default async function Delete(id) {
  await api.delete(`/notes/${id}`);
}
