import {Random, onGames } from '../index.js'
    const evenGame = () => {
    const ofevenGame = 'Answer "yes" if the number is even, otherwise answer "no".';

    const ForEvenGame = () => {
    const namberRandom = Random(100);

    const Even = (namber) => namber % 2 === 0;

    const question =  namberRandom;
    const result = Even(namberRandom) ? 'yes' : 'no' ;

    return [question,result];
};
 onGames(ofevenGame, ForEvenGame);
    };
export default evenGame;
