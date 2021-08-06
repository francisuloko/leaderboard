const createRecord = (scores) => {
  const ul = document.getElementById('leaderboard-records');
  ul.innerHTML = '';
  const sortList = scores.result;
  sortList.sort((a, b) => b.score - a.score);
  sortList.forEach((game) => {
    const li = document.createElement('li');
    const name = document.createElement('span');
    const score = document.createElement('span');
    li.classList.add('list-group-item');
    name.innerHTML = `${game.user} `;
    score.innerHTML = game.score;
    li.appendChild(name);
    li.appendChild(score);
    ul.appendChild(li);
  });
};

export default createRecord;
