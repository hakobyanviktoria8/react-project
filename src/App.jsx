import "./util/styles/App.css";
import { BrowserRouter } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router";
import { useState, createContext } from "react";

import Items from "./pages/items/Items";
import Games from "./pages/games/Games";
import { Posts } from "./pages/posts/Posts";
import { User } from "./pages/items/User";

export const DataContext = createContext();

function App() {
  const [data, setData] = useState(null);

  return (
    <DataContext.Provider value={[data, setData]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/users" element={<Items />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="games" element={<Games />} />
          <Route path="games/:params" element={<Games />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
