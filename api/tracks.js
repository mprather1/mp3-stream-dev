import fetch from 'isomorphic-fetch'

export default {
  list: function () {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch(`${process.env['BASE_URL']}/api/tracks`, options).then(response => response.json())
  }
}
