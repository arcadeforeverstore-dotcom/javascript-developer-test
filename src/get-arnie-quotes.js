const { httpGet } = require('./mock-http-interface');

/**
 * @param {GetArnieQuotesInput} urls
 * @returns {ArnieQuoteResponse}
 */
const getArnieQuotes = async (urls) => {
  return Promise.all(
    urls.map(async (url) => {
      const response = await httpGet(url);
      const bodyMsg = JSON.parse(response.body);
      return response.status === 200 ? { 'Arnie Quote': bodyMsg.message } : { 'FAILURE': bodyMsg.message };
    })
  );
};

module.exports = {
  getArnieQuotes,
};
