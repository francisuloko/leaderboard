import createRecord from './createRecord.js';

const form = document.getElementById('form');
const refreshButton = document.getElementById('refresh-button');

const setScore = async (e) => {
  e.preventDefault();
  const input = document.querySelectorAll('input');
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VTaz6xbP0oARGMriVttT/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: input[0].value,
      score: Number(input[1].value),
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  input[0].value = '';
  input[1].value = '';
  return response.json();
};

const getScore = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VTaz6xbP0oARGMriVttT/scores/');
  return response.json();
};

getScore().then((response) => { createRecord(response); });

form.addEventListener('submit', setScore);
refreshButton.addEventListener('click', () => { window.location.reload(); });

export default getScore;
