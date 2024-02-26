import { BrowserRouter, Route, Routes } from "react-router-dom";

import Admin from "./admin/Admin";
import AlreadyVoted from "./pages/AlreadyVoted";
import CandidatePage from "./pages/CandidatePage";
import LoginPage from "./pages/LoginPage";


function RoutesLib() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<CandidatePage />} />
          <Route path="/vote-complete" element={<AlreadyVoted />} />
          <Route path="/killeradmin" element={<Admin />} />
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