
// http://www.omdbapi.com/?s=fast&apikey=d8686d53
import { Constant } from '../common/index';

const MovieService = {
  async searchMovieList(text) {
    const response = await fetch(`${Constant.BASE_URL}?s=${text}&apikey=${Constant.API_KEY}`);
    return await response.json();
  }
}

export default MovieService;