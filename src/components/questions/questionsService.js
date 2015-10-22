export default function Questions ($resource) {
  const API = 'http://api.stackexchange.com/2.2';

  const resource = $resource(`${API}/questions/:id`, {
    id: '@id',
    site: 'stackoverflow',
    page: 1,
    key: 'm9xuawYoiKRhIW65G4dfJQ(('
  }, {
    get: {
      params: {
        filter: '!-*f(6rkuau1P'
      }
    },
    search: {
      url: `${API}/search/`,
      method: 'GET',
      pagesize: 10
    },
    byAuthor: {
      url: `${API}/users/:id/questions`,
      params: {
        id: '@id',
        sort: 'votes',
        pagesize: 5
      }
    },
    byTag: {
      url: `${API}/tags/:tag/faq`,
      params: {
        tag: '@tag',
        pagesize: 5
      }
    },
    answers: {
      url: `${API}/questions/:id/answers`,
      method: 'GET',
      params: {
        filter: '!9YdnSM68i'
      }
    }
  });

  return resource;
};
