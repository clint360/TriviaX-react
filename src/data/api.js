const URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

const getQuestions = () => fetch(URL).then((res) => res.json());

export default getQuestions;
