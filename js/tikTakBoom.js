tikTakBoom = {
    init(
        tasks,
        // timerField,
        counterField,
        gameStatusField,
        textFieldQuestion,
        textFieldAnswer1,
        textFieldAnswer2,
        textFieldAnswer3,
        answerFields,
        runGame,
        timerId,
    ) {
        //this.boomTimer = [0, 30, 30, 30, 30]; // went tu run
        this.countOfPlayers = 2;
        //this.tasks = JSON.parse(tasks); // went tu run
        // this.timerField = timerField;
        this.timerField = null;
        this.timerFields = [undefined];
        this.counterField = counterField;
        this.gameStatusField = gameStatusField;
        this.textFieldQuestion = textFieldQuestion;
        this.textFieldAnswer1 = textFieldAnswer1;
        this.textFieldAnswer2 = textFieldAnswer2;
        this.textFieldAnswer3 = textFieldAnswer3;
        this.answerFields = answerFields;
        this.runGame = runGame;
        this.timerId = timerId;
        this.needRightAnswers = 3;
    },

    run() {
        this.runGame.addEventListener('click', () => {
            this.answerFields.disabled = true;
            this.textFieldQuestion.style.color = "#ccc";
            this.createTimers(this.countOfPlayers);
            // this.timerFields = document.querySelectorAll('.timer-output');
            if (this.timerId) {
                clearTimeout(this.timerId);
            }
            this.gameStatusField.innerText = "Игра идёт."
            this.tasks = JSON.parse(tasks);
            this.playersTimers = [undefined, 30, 30, 30, 30];
            this.state = 0;
            this.boomTimer = this.playersTimers[this.state - 1];
            this.counter = 3; //delay before next question
            this.rightAnswers = 0;
            // this.turnOn(); // went to questionDelay()
            // this.timer(); // went to turnOn()
            this.displayQuestion();
        });
    },

    turnOn() {
        // console.log(this.timerFields);
        // console.log(document.getElementById(this.timerFields[this.state]));
        this.state = (this.state === this.countOfPlayers) ? 1 : this.state + 1;
        console.log(this.state);
        this.timerField = document.getElementById(this.timerFields[this.state]);
        
        // this.timerField = document.getElementById(this.timerFields[this.state - 1]);
        // this.boomTimer = this.playersTimers[this.state - 1];
        console.log(this.playersTimers);
        this.boomTimer = this.playersTimers[this.state];
        console.log(`player ${this.state} playersTimers ${this.playersTimers[this.state]} boomTimer ${this.boomTimer}`);
        
        if (this.timerId) {
            clearTimeout(this.timerId);
        }

        this.timer();
        
        this.gameStatusField.innerText = `Вопрос игроку №${this.state}`;

        const taskNumber = randomIntNumber(this.tasks.length - 1);
        
        this.printQuestion(this.tasks[taskNumber]);

        this.tasks.splice(taskNumber, 1);

        // this.state = (this.state === this.countOfPlayers) ? 1 : this.state + 1;

    },

    turnOff(value) {
        // this.playersTimers[this.state - 1] = this.boomTimer;
        // this.boomTimer = this.playersTimers[this.state - 1];

        if (this.timerId) {
            clearTimeout(this.timerId);
        }

        if (this.currentTask[value].result) {
            this.gameStatusField.innerText = 'Верно!';
            this.rightAnswers += 1;
        } else {
            this.gameStatusField.innerText = 'Неверно!';
        }
        if (this.rightAnswers < this.needRightAnswers) {
            if (this.tasks.length === 0) {
                this.finish('lose');
                
            } else {
                this.displayQuestion();
            }
        } else {
            this.finish('won');
        }

        this.textFieldAnswer1.removeEventListener('click', answer1);
        this.textFieldAnswer2.removeEventListener('click', answer2);
        this.textFieldAnswer3.removeEventListener('click', answer3);

        this.answerFields.disabled = true;
        this.textFieldQuestion.style.color = "#ccc";
    },

    printQuestion(task) {
        this.textFieldQuestion.innerText = task.question;
            this.textFieldAnswer1.innerText = task.answer1.value;
            this.textFieldAnswer2.innerText = task.answer2.value;
            this.textFieldAnswer3.innerText = task.answer3.value;

            this.textFieldAnswer1.addEventListener('click', answer1 = () => {
                this.turnOff('answer1');
            });
            this.textFieldAnswer2.addEventListener('click', answer2 = () => {
                this.turnOff('answer2');
            });this.textFieldAnswer3.addEventListener('click', answer3 = () => {
                this.turnOff('answer3');
            });
            this.currentTask = task;
    },

    finish(result = 'lose') {
        if (result === 'lose') {
            this.gameStatusField.innerText = `Вы проиграли!`;
            this.answerFields.disabled = true;
        }
        if (result === 'won') {
            this.gameStatusField.innerText = `Вы выиграли!`;
            this.answerFields.disabled = true;
        }

        this.textFieldQuestion.innerText = ``;
        this.textFieldAnswer1.innerText = ``;
        this.textFieldAnswer2.innerText = ``;
        this.textFieldAnswer3.innerText = ``;

        console.log(this);
    },

    timer() {
        if (this.state) {
            this.boomTimer -= 1;
            let sec = this.boomTimer % 60;
            let min = (this.boomTimer - sec) / 60;
            sec = (sec >= 10) ? sec : '0' + sec;
            min = (min >= 10) ? min : '0' + min;
            this.timerField.innerText = `${min}:${sec}`;
            if (this.boomTimer > 0) {
                this.timerId = setTimeout(
                    () => {
                        this.timer()
                    },
                    1000,
                )
            } else {
                this.finish('lose');
            }
        } 
    },

    questionDelay(delay = 3000) {
        Promise.resolve()
        .then(() => setTimeout(() => {
            this.turnOn();
            this.answerFields.disabled = false;
            this.textFieldQuestion.style.color = "black";
        }, delay));
    },

    countDown() {
        this.counter -= 1;
        this.counterField.innerText = this.counter;
        if (this.counter > 0) {
            setTimeout(
                () => {
                    this.countDown();
                    this.playersTimers[this.state] = this.boomTimer;
                },
                1000,
            )
        } else {
            this.counter = 3;
        }
    },

    displayQuestion() {
        this.questionDelay();
        this.countDown();
    },

    createTimers(playersCount = 1) {
        let playersTimers = document.getElementById("playersTimers");
        while (playersTimers.firstChild) {
            playersTimers.removeChild(playersTimers.firstChild);
        }
        for (let i = 1; i <= playersCount; i++) {
            const newDiv = document.createElement("div");
            const newTimer = document.createElement("div");
            newTimer.className = 'timer-output m-2 p-2 playerTimer';
            newTimer.id = `timerField${i}`;
            newTimer.innerText = "00:00";
            this.timerFields.push(newTimer.id);

            const newTimerText = document.createElement("div");
            newTimerText.className = "m-2 p-0 text-center";
            newTimerText.innerHTML = `игрок №${i}`;
            newTimerText.id = "timerText";

            newDiv.appendChild(newTimerText).appendChild(newTimer);
            playersTimers.appendChild(newDiv);
        }
    },
}
