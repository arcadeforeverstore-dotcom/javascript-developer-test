const { httpGet } = require('./mock-http-interface');

/**
 * @param {GetArnieQuotesInput} urls
 * @returns {ArnieQuoteResponse}
 */
const getArnieQuotes = async (urls) => {
  return Promise.all(
    urls.map(async (url) => {
      const response = await httpGet(url);
      const bodymsg = JSON.parse(response.body);
      return response.status === 200 ? { 'Arnie Quote': bodymsg.message } : { 'FAILURE': bodymsg.message };
    })
  );
};

module.exports = {
  getArnieQuotes,
};
