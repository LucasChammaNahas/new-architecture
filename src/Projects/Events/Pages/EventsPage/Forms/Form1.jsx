import { useStates } from '../../../../../Common/Context/Context';
import Ingredient from '../Components/Ingredient/Ingredient';

export default function Form1() {
  const { states } = useStates();
  return (
    <div>
      <Ingredient />
      <h1>{states.fact}</h1>
    </div>
  );
}
