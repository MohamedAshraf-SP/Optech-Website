import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
 
 export default function MainLayout() {
 


  return (
    <>
 
      {/* our navbar */}
      <Navbar cusotm={true} />
      {/* Other routes */}
      <main>
 
          <Outlet />
 
      </main>
      {/* Our Footers */}
      <Footer />
    </>
  );
}
