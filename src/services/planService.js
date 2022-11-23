import useApiPrivate from '../hooks/useApiPrivate';

export default function planService() {
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
