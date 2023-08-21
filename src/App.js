import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { HomePage } from "./components/Home.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/super-heroes"
              element={<SuperHeroesPage />}
            />
            <Route
              path="/rq-super-heroes"
              element={<RQSuperHeroesPage />}
            />
            <Route
              path="/"
              element={<HomePage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
