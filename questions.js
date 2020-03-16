// stdout
process.stdout.write("hello");

//questions 
const questions = [
    "What is your name",
    "How are you?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(' > ');
};

ask();

const answers = []
process.stdin.on('data', data => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    const [name, mood] = answers;
    console.log(`
    
    Hi ${name}! I'm glad you are doing ${mood}
    
    `);
});