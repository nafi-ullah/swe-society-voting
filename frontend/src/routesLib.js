import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import CandidatePage from "./pages/CandidatePage";


function RoutesLib() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<CandidatePage />} />
          {/* <Route path="/ai" element={<AIPage />} />
          <Route path="/room" element={<FriendsPage />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/multiplayer" element={<FriensGame />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesLib;