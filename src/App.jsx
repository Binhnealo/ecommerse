import HomePage from "@components/HomePage/HomePage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routeter from "./routers/router";
import { Suspense } from "react";
import { SidebarProvider } from "@/contexts/SidebarProvider";
import SideBar from "@components/SideBar/SideBar";
import { ToastProvider } from "@/contexts/ToastProvider";
import { StoreProvider } from "@/contexts/StoreProvider";



function App() {
  return (
  <StoreProvider>
    <ToastProvider>
      <SidebarProvider>
      
      <BrowserRouter>
      <SideBar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routeter.map((item, index) => {
            return (
              <Route
                path={item.path}
                element={<item.component />}
                key={index}
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
    </SidebarProvider>
  </ToastProvider>
  </StoreProvider>
  );
}

export default App;
