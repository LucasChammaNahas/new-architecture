import { useEffect } from "react";
import { useStates } from '../../../../Common/Context/Context';

export default function EventsLogic() {
  const { states } = useStates();

  useEffect(() => {
    states.setFact('batata frita');
  },[]);
  
  return null;
}
