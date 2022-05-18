import { useStates } from '../../../Common/Context/Context';

export default function Form1() {
  const {states, handlers} = useStates();
  return (
    <div>
    <button onClick={handlers.handleButtonClick}>Form 1</button>
    {states.cap}
    </div>
  );
}
