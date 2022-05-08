import { useState } from 'react';

export default function useMarioStates() {
  const [cap, setCap] = useState();
  const states = {cap, setCap};
  return states;
}
