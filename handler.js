const fetch = require("node-fetch").default;

module.exports.aviasales = async () => {
  const response = await fetch("https://front-test.beta.aviasales.ru/search");
  const { searchId } = await response.json();
  const tickets = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(await tickets.json()),
  };
};
