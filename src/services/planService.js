// eslint-disable-next-line import/no-cycle
import useApiPrivate from '../hooks/useApiPrivate';

export default function noteService() {
  const api = useApiPrivate();

  async function changeToPremiumPlan() {
    await api.patch('/plan/premium');
  }

  async function changeToFreePlan() {
    await api.patch('/plan/free');
  }

  return {
    changeToPremiumPlan, changeToFreePlan,
  };
}
