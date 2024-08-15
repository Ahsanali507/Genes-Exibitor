import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import DashboardLayout from "./layouts/DashboardLayout";
import InvitePhysicianPage from "./pages/InvitePhysicianPage";
import InviteDirectorsPage from "./pages/InviteDirectorsPage";

const Context = React.createContext({
  name: 'Default',
});
export const ContextProvider = Context.Provider

function App() {

  return (
    <Router>
      <ContextProvider value={{ name: 'App' }}>
        {/* <ErrorBoundary> */}
        <Routes>
          <Route path="/login" element={<h3 className="text-3xl text-green-500">Hello</h3>} />
          <Route path="/register" element={<></>} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="invite-physicians" element={<InvitePhysicianPage />} />
            <Route path="invite-lab" element={<InviteDirectorsPage />} />
          </Route>
        </Routes>
        {/* </ErrorBoundary> */}
      </ContextProvider>
    </Router>
  )
}

export default App
