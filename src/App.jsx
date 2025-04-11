import React from "react";
import { Routes, Route } from "react-router-dom";
import Instagram from "./instagram";
import { UserProvider } from "./UserContext";
import UserTable from "./usertable";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/user-table" element={<UserTable />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
