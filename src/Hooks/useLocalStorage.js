import { useState, useEffect } from 'react';

export default function useLocalStorage(key, defoltValue) {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defoltValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
