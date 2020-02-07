const fetchData = async () => {
  const response = await axios.get (`http://www.omdbapi.com/`, {
    params: {
      apikey: '3110868d',
      s: 'avengers',
    },
  });
  console.log (response.data);
};

fetchData ();
