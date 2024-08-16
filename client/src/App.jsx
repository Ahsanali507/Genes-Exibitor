import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import LoginPage from './pages/LoginPage';
import DashboardLayout from "./layouts/DashboardLayout";
import InvitePhysicianPage from "./pages/InvitePhysicianPage";
import InviteDirectorsPage from "./pages/InviteDirectorsPage";
import SignupPage from "./pages/SignupPage";

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
          <Route path="/" element={<LoginPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
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
