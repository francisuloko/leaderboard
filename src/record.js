const createRecord = () => {
  const ul = document.getElementById('leaderboard-records');
  let counter = 1;
  ul.innerHTML = '';
  for (let i = 0; i < 5; i += 1) {
    const li = document.createElement('li');
    const name = document.createElement('span');
    const score = document.createElement('span');
    li.classList.add('record');
    name.innerHTML = 'Name: ';
    score.innerHTML = 100 + counter;
    li.appendChild(name);
    li.appendChild(score);
    ul.appendChild(li);
    counter += 1;
  }
};

export default createRecord;
