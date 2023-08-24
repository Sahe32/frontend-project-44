import {Random, onGames } from '../index.js'

    const ofevenGame = 'Answer "yes" if the number is even, otherwise answer "no".';

    const ForEvenGame = () => {
    const namberRandom = Random(100);

    const Even = (namber) => namber % 2 === 0;

    const question =  namberRandom;
    const result = Even(namber) ? 'yes' : 'no' ;

    return [question,result];
};
 onGames(ofevenGame, ForEvenGame);

export default evenGame;







import readlineSync from 'readline-sync';

export const Random = (max) => Math.round(Math.random() * max);

 export const onGames = (poseOfGame, For) => {
    console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(poseOfGame);  

  for ( let i = 0; i < 3; i += 1) {
    const questionAndResult = For();

    console.log(`Question: ${questionAndResult[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = question[1];
    if (userAnswer === rightAnswer) {
        console.log ('Correct!');
  }else {
    return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${name}!`);
}
  }
  return console.log(`Congratulations, ${name}!`);
};

