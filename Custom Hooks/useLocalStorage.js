import React from "react";
import reactDom from "react-dom";

const useLocalStorage = (key, initial) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : initial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state, key])

  return [state, setState];

};

export default useLocalStorage;
