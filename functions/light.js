const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "light function!" }),
  };
};

module.exports = { handler };
