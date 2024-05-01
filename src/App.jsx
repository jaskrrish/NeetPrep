import React, { useEffect } from "react";
import { Header, Footer } from "./components";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="min-h-screen min-w-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
