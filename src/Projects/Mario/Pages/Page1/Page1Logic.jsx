import { useEffect } from "react";
import Form1 from '../../Forms/Form1';
import Form2 from '../../Forms/Form2';
import { useStates } from '../../../../Common/Context/Context';

export default function Page1() {
  const {states, handlers} = useStates();
  useEffect(() => {
    states.setCap('batata');
  },[]);
  
  return (
    <>
    <button onClick={handlers.handleButtonClick}>Page 1</button>
    {states.cap}
      <Form1 />
      <Form2 />
    </>
  );
}

/**
 * destructuring
 * states
 * useEffect
 * functions
 * logic
 * packaging
 * render functions
 * return
 */