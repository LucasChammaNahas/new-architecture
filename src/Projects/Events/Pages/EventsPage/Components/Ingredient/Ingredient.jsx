import TextInput from'../../../../../../Common/Components/TextInput';
import useEventsStates from '../../Core/states';
import useEventHandlers from '../../Core/eventHandlers';
import { useStates } from'../../../../../../Common/Context/Context';

export default function Ingredient(props) {
  const {states} = useStates();

  const textInputProps = {
    value: states.fact,
    handleChange: (e) => states.setFact(e.target.value),
  };


  return (
    <TextInput {...textInputProps}/>
  );
}