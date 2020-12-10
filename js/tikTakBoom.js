tikTakBoom = {
    init(
        tasks,
        counterField,
        gameStatusField,
        // textFieldQuestion,
        // textFieldAnswer1,
        // textFieldAnswer2,
        // textFieldAnswer3,
        answerFields,
        runGameBtn,
        endGameBtn,
        timerId,
        countDownId,
        questionDelayId,
    ) {
        this.timerField = null;
        this.timerFields = [undefined];
        this.counterField = counterField;
        this.gameStatusField = gameStatusField;
        // this.textFieldQuestion = textFieldQuestion;
        // this.textFieldAnswer1 = textFieldAnswer1;
        // this.textFieldAnswer2 = textFieldAnswer2;
        // this.textFieldAnswer3 = textFieldAnswer3;
        this.answerFields = answerFields;
        this.runGameBtn = runGameBtn;
        this.endGameBtn = endGameBtn;
        this.timerId = timerId;
        this.countDownId = countDownId;
        this.questionDelayId = questionDelayId;
        this.endGame = document.getElementById('finishGameBtn').addEventListener('click', () => {
            if (this.timerId) {
                clearTimeout(this.timerId);
            }
            if (this.countDownId) {
                clearTimeout(this.countDownId);
            }
            if (this.questionDelayId) {
                clearTimeout(this.questionDelayId);
            }
            this.finish('lose');
        });
        this.needRightAnswers = 3;
        this.currentTaskResults = {};
        this.answerListener = {};
        this.aboutGame = document.getElementById('aboutGame');
        this.gameArea = document.getElementById('gameArea');
    },

    run() {
        this.runGameBtn.addEventListener('click', () => {
            this.playersTimers = [0];
            this.countOfPlayers = Number(document.getElementById('people').value);
            this.setTimer = Number(document.getElementById('time').value);
            this.aboutGame.hidden = true;
            this.runGameBtn.hidden = true;
            this.endGameBtn.hidden = false;
            this.gameArea.hidden = false;
            this.answerListener = {};
            this.removeAllChildes(this.answerFields);
            this.createTimers(this.countOfPlayers);
            if (this.timerId) {
                clearTimeout(this.timerId);
            }
            this.gameStatusField.innerText = "Игра идёт."
            this.tasks = JSON.parse(tasks);
            for(let i = 1; i<=this.countOfPlayers; i++) {
                this.playersTimers[i] = this.setTimer;
            }
            //this.playersTimers = [0, 30, 30, 30, 30];
            this.state = 0;
            this.boomTimer = this.playersTimers[this.state];
            this.counter = 3; //delay before next question
            this.rightAnswers = 0;
            // this.turnOn(); // went to questionDelay()
            // this.timer(); // went to turnOn()
            this.displayQuestion();
        });
    },

    turnOn() {
        this.state = (this.state === this.countOfPlayers) ? 1 : this.state + 1;
        this.timerField = document.getElementById(this.timerFields[this.state]);
        this.boomTimer = this.playersTimers[this.state];      
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
        this.timer();      
        this.gameStatusField.innerText = `Вопрос игроку №${this.state}`;
        const taskNumber = randomIntNumber(this.tasks.length - 1);    
        this.printQuestion(this.tasks[taskNumber]);
        this.tasks.splice(taskNumber, 1);
    },

    turnOff(value) {
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
        if (this.currentTaskResults[value]) {
            this.gameStatusField.innerText = 'Верно!';
            this.rightAnswers += 1;
            console.log(this.rightAnswers);
        } else {
            this.gameStatusField.innerText = 'Неверно!';
        }
        if (this.rightAnswers < this.needRightAnswers) {
            if (this.tasks.length === 0) {
                this.finish('lose');
                this.runGameBtn.hidden = false;
                this.endGameBtn.hidden = true;
            } else {
                this.displayQuestion();
            }
        } else {
            this.finish('won');
            this.runGameBtn.hidden = false;
            this.endGameBtn.hidden = true;
        }
        for (key of Object.keys(this.currentTaskResults)) {
            let answerField = document.getElementById(`${key}`);
            answerField.removeEventListener('click', this.answerListener[`${key}`]);
        }
    },

    printQuestion(task) {
        this.createQuestionFields(task);
        for (key of Object.keys(this.currentTaskResults)) {
            let answerField = document.getElementById(`${key}`);
            answerField.addEventListener('click', this.answerListener[`${key}`] = () => {
                this.turnOff(answerField.id);
            });
        }
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
        this.clearQuestionFields(answerFields);
        this.runGameBtn.hidden = false;
        this.endGameBtn.hidden = true;
        console.log(this);
    },

    timer() {
        if (this.state) {
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
                );
                this.boomTimer -= 1;
            } else {
                this.finish('lose');
            }
        } 
    },

    questionDelay(delay = 3000) {
        Promise.resolve()
        .then(() => this.questionDelayId = setTimeout(() => {
            this.turnOn();
            this.answerFields.disabled = false;
        }, delay));
    },

    countDown() {
        this.counter -= 1;
        this.counterField.innerText = this.counter;
        if (this.counter > 0) {
            this.countDownId = setTimeout(
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
        this.removeAllChildes(playersTimers);
        for (let i = 1; i <= playersCount; i++) {
            const newDiv = document.createElement("div");
            const newTimer = document.createElement("div");
            newTimer.className = 'timer-output rounded m-2 p-2 playerTimer';
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

    taskSize(task) {
        let size = -1;
        for (let item in task) {
            if (task.hasOwnProperty) {
                size++;
            } 
        }
        return size;
    },

    createQuestionFields(task) {
        this.removeAllChildes(this.answerFields);
        this.currentTaskResults = {};
        const size = this.taskSize(task);
        const answerDiv = document.createElement("div");
        answerDiv.className = "row";
        const answerHeader = document.createElement("h4");
        answerHeader.id = "questionField";
        answerHeader.innerText = task.question;
        this.answerFields.appendChild(answerDiv).appendChild(answerHeader);
        for (let i = 1; i <= size; i++) {
            const newDiv = document.createElement("div");
            newDiv.className = "row";
            const newButton = document.createElement("button");
            newButton.className = "btn btn-outline-dark form-control text-left";
            newButton.id = `answer${i}`;
            newButton.innerText = task[`answer${i}`].value;
            this.answerFields.appendChild(newDiv).appendChild(newButton);
            this.currentTaskResults[`answer${i}`] = task[`answer${i}`].result;
        }
        console.log(this.currentTaskResults);
    },

    removeAllChildes(parentNode){
        while (parentNode.firstChild) {
            parentNode.removeChild(parentNode.firstChild);
        }
    },

    clearQuestionFields(parentNode){
       var ndList = parentNode.childNodes;
       ndList.forEach(child => child.firstChild.innerText = '');
    },
}