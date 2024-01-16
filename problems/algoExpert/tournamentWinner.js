function tournamentWinner(competitions = [], results = []) {
  // Write your code here.
  let scoreBoard = {};
  let maxScore = 0;
  for (let index = 0; index < competitions.length; index++) {
    const currentWinner =
      results[index] === 0 ? competitions[index][1] : competitions[index][0];

    if (currentWinner in scoreBoard) {
      scoreBoard[currentWinner] += 3;
    } else {
      scoreBoard[currentWinner] = 3;
    }
    if (scoreBoard[currentWinner] > maxScore) {
      maxScore = scoreBoard[currentWinner];
    }
  }
  console.log(scoreBoard);
  const result = Object.keys(scoreBoard).find((key) => {
    return scoreBoard[key] === maxScore;
  });
  return console.log(result);
}

function secondTournamentWinner(competitions = [], results = []) {
  // Write your code here.
  let scoreBoard = {};
  let maxScore = 0;
  let currentBestTeam = '';
  for (let index = 0; index < competitions.length; index++) {
    const currentWinner =
      results[index] === 0 ? competitions[index][1] : competitions[index][0];
    if (currentWinner in scoreBoard) {
      scoreBoard[currentWinner] += 3;
    } else {
      scoreBoard[currentWinner] = 3;
    }
    if (scoreBoard[currentWinner] > maxScore) {
      maxScore = scoreBoard[currentWinner];
      currentBestTeam = currentWinner;
    }
  }

  return currentBestTeam;
}

secondTournamentWinner([['Bulls', 'Eagles']], [1]);
