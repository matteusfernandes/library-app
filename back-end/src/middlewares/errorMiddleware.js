module.exports = (error, _request, response, _next) => {
  if (error.status) {
    return response.status(error.status).json({ message: error.message });
  }

  console.error(error);
  return response.status(500).json({ message: 'Internal Server Error' });
};
