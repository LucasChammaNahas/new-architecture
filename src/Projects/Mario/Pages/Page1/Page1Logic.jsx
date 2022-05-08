import Form1 from '../../Forms/Form1';
import Form2 from '../../Forms/Form2';
import { useStates } from '../../../../Common/Context/Context';

export default function Page1() {
  const states = useStates();
  
  return (
    <>
    <button onClick={() => states.setState('c')}>Page 1</button>
    {states.state}
      <Form1 />
      <Form2 />
    </>
  );
}