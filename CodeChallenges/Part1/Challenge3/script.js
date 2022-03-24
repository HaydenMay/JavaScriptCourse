// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

function calcAverage(scores = []) {
  let average = {
    score: 0,
    qualify: true,
  };
  for (let x = 0; x < 3; x++) {
    average.score += scores[x];
  }
  average.score = average.score / 3;
  if (average.score < 100) {
    average.qualify = false;
  }
  return average;
}

const MIN_SCORE = 100;
let winner;
function determineWinner() {
  console.log(Math.round(dolAvg.score));
  console.log(Math.round(koalaAvg.score));

  if (
    dolAvg.score === koalaAvg.score &&
    dolAvg.qualify == true &&
    koalaAvg.qualify == true
  ) {
    winner = "Its a tie";
  } else if (
    dolAvg.score > koalaAvg.score &&
    dolAvg.qualify == true &&
    koalaAvg.qualify == true
  ) {
    winner = "Dolphins win";
  } else if (
    dolAvg.score < koalaAvg.score &&
    dolAvg.qualify == true &&
    koalaAvg.qualify == true
  ) {
    winner = "Koalas win";
  }
  if (dolAvg.qualify == false) {
    winner = "Koalas win. Dolphins disqualified";
  }
  if (koalaAvg.qualify == false) {
    winner = "Dolphins win. Koalas disqualified";
  }
  if (dolAvg.qualify == false && koalaAvg.qualify == false) {
    winner = "No winner, both teams disqualified";
  }

  console.log(winner);
}

dolphinsScores = [96, 108, 89];
koalaScores = [88, 91, 110];
dolAvg = calcAverage(dolphinsScores);
koalaAvg = calcAverage(koalaScores);

determineWinner();

dolphinsScores = [97, 112, 101];
koalaScores = [109, 95, 123];
dolAvg = calcAverage(dolphinsScores);
koalaAvg = calcAverage(koalaScores);

determineWinner();

dolphinsScores = [97, 112, 101];
koalaScores = [109, 95, 106];
dolAvg = calcAverage(dolphinsScores);
koalaAvg = calcAverage(koalaScores);

determineWinner();
