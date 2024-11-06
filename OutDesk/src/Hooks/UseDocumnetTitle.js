import { useEffect } from "react";

const UseDocumnetTitle = (Title) => {
  useEffect(() => {
    document.title = Title;
  }, [Title]);
};
export default UseDocumnetTitle;
