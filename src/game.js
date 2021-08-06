const GameID = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Bug Crusher',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
};

export default GameID;
