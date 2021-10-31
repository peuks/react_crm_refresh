import { useEffect, useState } from "react";
import { getStoryIds } from "@api";

const useFetchData = (data = []) => {
  const [storiesIds, setStoriesIds] = useState(false);

  useEffect(() => {
    getStoryIds().then((e) => setStoriesIds(e));
  }, []);

  return { storiesIds };
};
export default useFetchData;
