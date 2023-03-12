const API_URL = import.meta.env.VITE_BACKEND_API;

const post = async <BodyT>(
  endpoint: string,
  body: BodyT,
  language = 'en-GB'
): Promise<Response> =>
  fetch(API_URL + endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': language,
    },
    credentials: 'include',
    body: JSON.stringify(body),
  });

const get = async (endpoint: string, language = 'en-GB'): Promise<Response> =>
  fetch(API_URL + endpoint, {
    method: 'GET',
    headers: {
      'Accept-Language': language,
    },
    credentials: 'include',
  });

const apiClient = {
  post,
  get,
};

export default apiClient;
