import React from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import MovieDetail from '../../pages/MovieDetail/MovieDetail';
import { useParams } from 'react-router-dom';

const MovieDetailTemplate = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <MovieDetail MovieId={id} />
      <Footer />
    </div>
  );
};

export default MovieDetailTemplate;
