import "./util/styles/App.css";
import { BrowserRouter } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router";
import { useState, createContext } from "react";

import Items from "./components/items/Items";
import Games from "./components/games/Games";
import { Posts } from "./components/posts/Posts";
import { User } from "./components/items/User";

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
