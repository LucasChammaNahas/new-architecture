import { useStates } from '../../../Common/Context/Context';

export default function Form2() {
  const { state, setState } = useStates()
  return (
    <div>
      <button onClick={() => setState('jamanta')}>Form 2</button>
      {state}
    </div>
  );
}
