import { useStates } from '../../../Common/Context/Context';

export default function Form1() {
  const { state, setState } = useStates()
  return (
    <div>
      <button onClick={() => setState('tamandua')}>Form 1</button>
      {state}
    </div>
  );
}
