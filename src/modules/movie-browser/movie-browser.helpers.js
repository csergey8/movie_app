const TMBD_IMAGE_BASE_URL = (width = 300) => `https://image.tmbd.org/t/p/w${width}`;

const updateMoviePicturesUrls = (movieResult, width = 300) => ({
  ...movieResult,
  backdrop_path: `${TMBD_IMAGE_BASE_URL(width)}${movieResult.backdrop_path}`,
  poster_path: `${TMBD_IMAGE_BASE_URL(width)}${movieResult.backdrop_path}`
});

export const getMovieList = (moviesResponse) => {
  return !!moviesResponse ? ([
    ...moviesResponse.results.map(movieResult => updateMoviePicturesUrls(movieResult))
  ]) : null;
}