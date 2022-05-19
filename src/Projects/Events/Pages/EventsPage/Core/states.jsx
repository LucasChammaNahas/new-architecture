import { useState } from 'react';

export default function useEventsStates() {
  const [fact, setFact] = useState('vazio');
  const states = {fact, setFact};
  return states;
}
