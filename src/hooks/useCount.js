import { useState } from "react";

const useCount = (numb = 5) => {
  const [count, setCount] = useState(numb);
  return { count, setCount };
};

export default useCount;
