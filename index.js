
const request = require('request')

async function graphQLRequest (uri, query, variables = {}) {
  return new Promise((resolve, reject) => {
    request.post({
      uri: uri,
      body: {
        query: query,
        variables: variables
      },
      jar: true,
      json: true
    },
    (e, r, body) => {
      if (e) {
        reject(e)
      } else {
        resolve(body.data)
      }
    })
  })
}

module.exports = graphQLRequest
