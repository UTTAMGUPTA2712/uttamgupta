const prompt = require("prompt-sync")({ sigint: true });
var users = [];
var question = [];
var currentUser = null;
var currentquestion = null;
function generateRandomNumber() {
    const min = 1000000000;
    const max = 9999999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
function isEmail(email) {
    var pattern = /^[\w.-]+@[\w.-]+\.\w+$/;
    return pattern.test(email);
}
function getMultipleInputs() {
    var inputString = prompt("Enter multiple tags separated by commas:");
    var inputs = inputString.split(",");
    inputs = inputs.map(function (input) {
        return input.trim();
    });
    return inputs;
}
class Question {
    constructor(head, ques, tags) {
        this.id = generateRandomNumber();
        this.head = head;
        this.ques = ques;
        this.answerposted = [];
        this.tags = tags;
    }
    ViewQues() {
        console.log(currentquestion.head, "\n");
        console.log(currentquestion.tags);
        console.log(currentquestion.ques, "\n");
        if (currentquestion.answerposted.length > 0) {
            for (let ans of currentquestion.answerposted) {
                ViewAns(ans);
            }
        }
        const addAns = prompt("To Give you Answer Enter 'YES'");
        if (addAns == "YES") {
            PostAnswer();
            return;
        }
        console.log(
            "To help any answerer increase there 'Reputation' or to add any 'Comments and Like' by Enter answer Id Below or Enter 'exit' to exit"
        );
        let id = prompt();
        while (id != "exit") {
            for (let ans of currentquestion.answerposted) {
                if (+ans.id == id) {
                    console.log(
                        "1. To add Like\n2. To add comment\n3. Help Answerer\n4. EXIT"
                    );
                    let option = prompt("");
                    while (option != "4") {
                        switch (option) {
                            case "1":
                                ans.likes++;
                                console.log("Answer Liked");
                                break;
                            case "2":
                                const comment = prompt("Type Comment");
                                ans.comments.push(comment);
                                console.log("comment updated");
                                break;
                            case "3":
                                IncreaseReputation(ans);
                                console.log("Thanks for helping!");
                                break;
                            default:
                                console.log("No such option");
                        }
                        option = prompt("");
                    }
                    if (option == 4) {
                        currentquestion.ViewQues();
                    }
                }
            }
            id = prompt();
        }
        if (id == "exit") {
            MainPage();
        }
    }
}
class Answers {
    constructor(answers) {
        this.id = generateRandomNumber();
        this.answerer = currentUser.email;
        this.answers = answers;
        this.comments = [];
        this.likes = 0;
    }
}
function ViewAns(ans) {
    console.log(ans.answerer, "---- id :", ans.id);
    console.log(ans.answers, "\n");
    console.log("Likes :", ans.likes);
    console.log("Comment");
    for (let comment of ans.comments) {
        console.log("----", comment);
    }
}
function IncreaseReputation(ans) {
    for (let user of users) {
        if (ans.answerer == user.email) {
            user.reputation++;
        }
    }
}
function PostAnswer() {
    console.log("Type your answer below:");
    const ans = prompt();
    currentquestion.answerposted.push(new Answers(ans));
    console.log("Answer Posted successfully");
    currentquestion.ViewQues();
}
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.questionposted = [];
        this.answerposted = [];
        this.reputation = 0;
    }
    ShowDetails() {
        console.log("Name :", this.name);
        console.log("Email :", this.email);
        console.log("Reputation Level :",currentUser.reputation);
        console.log("Question Posted :");
        for (let ques in currentUser.questionposted) {
            console.log(ques);
        }
        console.log("Answer Posted :");
        for (let ans in currentUser.answerposted) {
            console.log(ans);
        }
    }
}
function SearchQuestion() {
    const searchValue = prompt("Enter tag be Searched :");
    let selectedquestion = [];
    let flag = 0;
    for (let ques of question) {
        let tag = ques.tags;
        if (tag.includes(searchValue)) {
            console.log(flag, ques.id, "--", ques.head);
            selectedquestion.push(ques);
            flag++;
        }
    }
    if (flag == 0) {
        console.log("No tag found\nPress 1: To Re-Enter Tag\nPress ANY: Exit");
        const option = prompt();
        switch (option) {
            case "1":
                SearchQuestion();
                break;
            default:
                MainPage();
        }
    }

    let searchId = prompt("Id to be Opened:");
    while (searchId >= flag) {
        console.log("No such option");
        searchId = prompt("Id to be Opened:");
    }
    currentquestion = selectedquestion[+searchId];
    currentquestion.ViewQues();
}
function PostQuestion() {
    const head = prompt("Give your question a suitable heading :");
    console.log("Type your Question here :");
    const ques = prompt();
    const tags = getMultipleInputs();
    const quesobj = new Question(head, ques, tags);
    currentUser.questionposted.push(quesobj);
    question.push(quesobj);
    console.log("question posted successfully");
    MainPage();
}
function MainPage() {
    console.log("1. Post a Question\n2. Search a Question\n3. View Profile");
    const option = prompt();
    switch (option) {
        case "1":
            PostQuestion();
            break;
        case "2":
            SearchQuestion();
            break;
        case "3":
            currentUser.ShowDetails();
            MainPage();
            break;
        default:
            console.log("No such option");
            MainPage();
    }
}
function Login() {
    const email = prompt("Enter Email :");
    const password = prompt("Enter Password :");
    let flag = false;
    for (let user of users) {
        if (user.email == email) {
            flag = true;
            if (user.password == password) {
                currentUser = user;
                console.log("Successfully logged in!");
                MainPage();
                break;
            } else {
                console.log("Wrong Password");
            }
        }
    }
    if (!flag) {
        console.log("No User Found.\n");
        Start();
    }
}
function CreateUser() {
    const name = prompt("Enter Name :");
    const email = prompt("Enter Email :");
    if (isEmail(email)) {
        const password = prompt("Enter Password :");
        const rePassword = prompt("Enter Password Again :");
        if (password == rePassword) {
            users.push(new User(name, email, password));
            console.log("User Created Successfully");
            Start();
        } else {
            console.log("Passwords are not same");
            CreateUser();
        }
    } else {
        console.log("Please type correct Email");
        CreateUser();
    }
}
function Start() {
    // console.log(users);
    console.log("1. Login\n2. Create User\n3. EXIT");
    const option = prompt();
    switch (option) {
        case "1":
            Login();
            break;
        case "2":
            CreateUser();
            break;
        case "3":
            return;
            break;
        default:
            console.log("No such option");
            Start();
    }
}

var question1 = new Question(
    "How to sort an array in JavaScript?",
    "I'm trying to sort an array of numbers in JavaScript. Can anyone provide a sample code?",
    ["JavaScript", "hi", "Array", "Sorting"]
);
var question2 = new Question(
    "What is the capital of France?",
    "I'm curious to know the capital city of France. Can anyone enlighten me?",
    ["Geography", "France", "Capital"]
);
var question3 = new Question(
    "Best practices for secure password storage?",
    "I'm developing a web application and need advice on securely storing user passwords. Any suggestions?",
    ["hi", "Web Development", "Security", "Passwords"]
);
question.push(question1, question2, question3);

// const answer1 = new Answers("To format a hard drive, you can use disk management tools provided by the operating system.");
// const answer2 = new Answers("Python is often recommended as the best programming language for beginners due to its simplicity and readability.");
// const answer3 = new Answers("You can solve a quadratic equation using the quadratic formula.");
// const answer4 = new Answers("Formatting a hard drive will erase all data stored on it, so make sure to backup important files before proceeding.");
// const answer5 = new Answers("Java is a popular programming language for beginners as it is widely used in various domains.");
// const answer6 = new Answers("To solve a quadratic equation, you can also try factoring or completing the square.");
// const answer7 = new Answers("Before formatting a hard drive, ensure you have a backup of all your important files to avoid data loss.");
// const answer8 = new Answers("JavaScript is a beginner-friendly language commonly used for web development.");
// const answer9 = new Answers("You can use the quadratic formula: x = (-b ± √(b^2 - 4ac)) / (2a)");
// answers.push(answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9);

const user1 = new User("John Doe", "john.doe@example.com", "password123");
const user2 = new User("Jane Smith", "jane.smith@example.com", "password456");
const user3 = new User(
    "Mike Johnson",
    "mike.johnson@example.com",
    "password789"
);
const user4 = new User("Emily Davis", "emily.davis@example.com", "passwordabc");
const user5 = new User("123", "123", "123");
users.push(user1, user2, user3, user4, user5);

Start();
