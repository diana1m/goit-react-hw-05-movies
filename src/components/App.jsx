import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';
import { SharedLayout } from "./SharedLayout";

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
  );
};
