import { Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<h1>Loadin......</h1>}>
        <div className="m-auto py-5 max-w-[1000px] h-[calc(100vh-50px)] md:overflow-hidden">
          <Outlet />
        </div>
      </Suspense>
    </>
  );
}

export default App;
