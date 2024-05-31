import React, { useEffect, useState } from 'react';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';
import { getDateParts } from '../../utils/utils.js';
import './MovieDetail.scss';
import moment from 'moment';
import VideoTrailer from '../../components/VideoTrailer/VideoTrailer.jsx';
const MovieDetail = ({ MovieId }) => {
  const [movieDetail, setMovieDetail] = useState({});
  const [releaseDate, setReleaseDate] = useState(null);
  const [dateParts, setDateParts] = useState({
    year: null,
    month: null,
    day: null,
  });

  useEffect(() => {
    quanLyPhimServ
      .layThongTinPhim(MovieId)
      .then(res => {
        console.log(res.data.content);
        setMovieDetail(res.data.content);
        setReleaseDate(res.data.content.ngayKhoiChieu);
        console.log(releaseDate);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (releaseDate) {
      const parts = getDateParts(releaseDate);
      setDateParts(parts);
    }
  }, [releaseDate]);
  return (
    <div className="container">
      <div className="movie mb-16">
        <h2 className="pl-4 mt-12 mb-7 uppercase text-xl font-bold">
          {movieDetail.tenPhim}
        </h2>
        <div className="movie__info flex ">
          <div className="movie__image  basis-1/4 relative border-4 border-yellow-400">
            <span className="absolute left-2 top-2 w-11 h-11 border-2 rounded-full text-center pt-2 bg-yellow-400 text-bold">
              {movieDetail.danhGia}
            </span>
            <img src={movieDetail.hinhAnh} alt="" />
          </div>
          <div className="info basis-3/4 px-10 ">
            <p>
              <strong>Country: </strong>Viet Nam, USA
            </p>
            <p>
              <strong>Category: </strong> Adventure, Action, Drama
            </p>
            <p>
              <strong>Release Date: </strong>
              {dateParts.day}/{dateParts.month}/{dateParts.year}
            </p>
            <p>
              <strong>Language: </strong> Japanese, English, VietNamese
            </p>
            <p>
              <strong></strong>
            </p>

            <div className="trailer mt-16">
              <VideoTrailer trailer={movieDetail.trailer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
