import createRecord from './createRecord.js';

const form = document.getElementById('form');
const refreshButton = document.getElementById('refresh-button');
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zAG1ExHNiELiNGcSYJXT/scores/';

const setScore = async (e) => {
  e.preventDefault();
  const input = document.querySelectorAll('input');
  const response = await fetch(baseUrl, {
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
  const response = await fetch(baseUrl);
  return response.json();
};

getScore().then((response) => { createRecord(response); });

form.addEventListener('submit', setScore);
refreshButton.addEventListener('click', () => { window.location.reload(); });

export default getScore;
