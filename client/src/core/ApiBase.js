
class ApiBase {
  static request(urlPath, options = {}) {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    options.headers = headers;
    options.body = JSON.stringify(options.body);

    return fetch(urlPath, options)
      .then(response => response.json());
  }
}

export default ApiBase;
