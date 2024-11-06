import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/App_routes";
import Arrow_up_btn from "./Components/Arrow_up_btn";
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const unlisten = router.subscribe(() => {
      window.scrollTo(0, 0);
    });

    // Cleanup on unmount
    return () => {
      unlisten();
    };
  }, []);
  return (
    <>
<Arrow_up_btn />
      <RouterProvider router={router}/>
 
    
    </>
  );
}

export default App;
