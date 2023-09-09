// FETCH
// export class UnsplashAPI {
//   #BASE_URL = 'https://api.unsplash.com';
//   #END_POINT = '/search/photos';
//   #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';
//   //   #query = '';
//   constructor(perPage) {
//     this.per_page = perPage;
//     this.page = 1;
//     this.query = '';
//   }

//   fetchPhotos() {
//     const params = new URLSearchParams({
//       query: this.query,
//       page: this.page,
//       per_page: this.per_page,
//       client_id: this.#API_KEY,
//       orientation: 'portrait',
//     });
//     return fetch(`${this.#BASE_URL}${this.#END_POINT}?${params}`).then(resp => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }
//       return resp.json();
//     });
//   }

//   //   set query(newQuery) {
//   //     this.#query = newQuery;
//   //   }
// }

// AXIOS
import axios from 'axios';

export class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com';
  #END_POINT = '/search/photos';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  constructor(perPage) {
    this.per_page = perPage;
    this.page = 1;
    this.query = '';
  }

  getPhotos() {
    return axios
      .get(`${this.#BASE_URL}${this.#END_POINT}`, {
        params: {
          query: this.query,
          page: this.page,
          per_page: this.per_page,
          client_id: this.#API_KEY,
          orientation: 'portrait',
        },
      })
      .then(resp => resp.data);
  }
}
