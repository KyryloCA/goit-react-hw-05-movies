import MoviesPage from 'Pages/MoviesPage';
import HomePage from 'Pages/HomePage';
import Layout from 'Pages/Layout';
import { Routes, Route } from 'react-router-dom';
import MovieCard from './MovieCard';
import Page404 from './Page404';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}></Route>
          <Route path="movies/:id" element={<MovieCard />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/404" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
};
