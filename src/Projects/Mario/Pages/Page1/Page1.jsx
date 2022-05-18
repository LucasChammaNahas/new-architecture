import Page1Logic from '../Page1/Page1Logic';
import { Provider } from '../../../../Common/Context/Context';
import useMarioStates from '../../States/State1';
import handlersFun from './functions';

export default function Page1(props) {
  const states = useMarioStates();
  const handlers =  handlersFun(states);
  
  return (
    <Provider states={{states, handlers}}>
      <Page1Logic />
    </Provider>
  );
}