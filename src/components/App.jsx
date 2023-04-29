import Home from "Pages/Home";
import Layout from "Pages/Layout";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route index element={<Home/>}/>
        
      </Routes>
      
    </>
  );
};
