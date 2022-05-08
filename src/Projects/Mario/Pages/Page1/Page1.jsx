import { useState } from 'react';
import Page1Logic from '../Page1/Page1Logic';
import { Provider } from '../../../../Common/Context/Context';

export default function Page1() {
  const [state, setState] = useState();
  const states = {state, setState};
  
  return (
    <Provider states={states}>
      <Page1Logic />
    </Provider>
  );
}