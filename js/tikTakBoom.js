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
        correctAnswersField,
        wrongAnswersField,
        needRightAnswersField,
        totalCorrectField,
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
        this.correctAnswersField = correctAnswersField;
        this.wrongAnswersField = wrongAnswersField;
        this.needRightAnswersField = needRightAnswersField;
        this.totalCorrectField = totalCorrectField;
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
        this.needRightAnswers = 19;
        this.currentTaskResults = {};
        this.answerListener = {};
        this.aboutGame = document.getElementById('aboutGame');
        this.gameArea = document.getElementById('gameArea');
        this.totalTime = 0;
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
            this.gameStatusField.innerText = "Игра идёт."
            this.tasks = JSON.parse(tasks);
            for (let i = 1; i<=this.countOfPlayers; i++) {
                this.playersTimers[i] = this.setTimer;
            }
            this.createTimers(this.countOfPlayers);
            this.totalTime = this.arrayItemsSum(this.playersTimers);
            this.state = 0;
            this.boomTimer = this.playersTimers[this.state];
            this.counter = 3; //delay before next question
            this.rightAnswers = 0;
            this.displayQuestion();
            this.playerFailedAnswersCount = [0, 0, 0, 0, 0];
            this.playerRightAnswersCount = [0, 0, 0, 0, 0];
            this.correctAnswersField.innerText = "Игрок №: верно: 0";
            this.wrongAnswersField.innerText = "0";
            this.totalCorrectField.innerText = "0";
            this.needRightAnswersField.innerText = this.needRightAnswers;
        });
    },

    turnOn() {
        this.answerFields.disabled = false;
        this.nextPlayer();
        this.timerField = document.getElementById(this.timerFields[this.state]);
        this.boomTimer = this.playersTimers[this.state];      
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
        this.timer();      
        this.gameStatusField.innerText = `Вопрос игроку №${this.state}`;
        const taskNumber = randomIntNumber(this.tasks.length - 1);
        if (this.totalTime > 0) {
            this.printQuestion(this.tasks[taskNumber]);
            this.tasks.splice(taskNumber, 1);
        }
        this.showPlayerState();
        if (this.totalTime === 0 && this.rightAnswers < this.needRightAnswers) {
            this.finish('lose');
        }
    },

    turnOff(value) {
        this.answerHandler(this.currentTaskResults[value]);
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
        if (this.currentTaskResults[value]) {
            this.gameStatusField.innerText = 'Верно!';
            this.rightAnswers += 1;
        } else {
            if (this.boomTimer > 0) {
                this.gameStatusField.innerText = 'Неверно!';
            }
        }
        if (this.rightAnswers < this.needRightAnswers ) {
            if (this.tasks.length === 0 || this.totalTime === 0) {
                this.finish('lose');
            } else {
                this.displayQuestion();
            }
        } else {
            this.finish('won');
        }
        for (key of Object.keys(this.currentTaskResults)) {
            let answerField = document.getElementById(`${key}`);
            if (this.answerListener[`${key}`]) {
                answerField.removeEventListener('click', this.answerListener[`${key}`]);
            }
        }
        this.answerFields.disabled = true;
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
            this.timerField.innerText = "BooM";
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
            if (this.totalTime > 0 && this.boomTimer > 0) {
                this.timerId = setTimeout(
                    () => {
                        this.timer()
                    },
                    1000,
                );
                this.boomTimer -= 1;
                this.totalTime -= 1;
            } else if (this.totalTime === 0){
                this.turnOff();
            }
            this.timerField.innerText = this.timeFormat(this.boomTimer);
            if (this.boomTimer === 0) {
                this.timerField.innerText = "BooM";
                this.answerFields.disabled = true;
                this.turnOff();
            }
        } 
    },

    questionDelay(delay = 3000) {
        Promise.resolve()
        .then(() => this.questionDelayId = setTimeout(() => {
            if (this.totalTime > 0) {
                this.turnOn();
            }
            this.answerFields.disabled = false;
        }, delay));
    },

    countDown() {
        this.counter -= 1;
        // if (this.totalTime === 0) {
        //     this.counter = 0;
        // }
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
            newTimer.innerText = this.timeFormat(this.setTimer);//"00:00";
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

    answerHandler(answer) {
        if (!answer) {
            this.playerFailedAnswersCount[this.state]++;
            this.boomTimer > 5 ? this.boomTimer -= 5 : this.boomTimer = 0;
        } else {
            //this.playerFailedAnswersCount[this.state] = 0; 
            this.playerRightAnswersCount[this.state] ++;
            this.boomTimer +=5;
        }
        this.playersTimers[this.state] = this.boomTimer;
        this.totalTime = this.arrayItemsSum(this.playersTimers);
        // this.correctAnswersField.innerText = `Игрок №${this.state}: верно: ` + this.playerRightAnswersCount[this.state];
        // this.wrongAnswersField.innerText =  this.playerFailedAnswersCount[this.state];
        // this.totalCorrectField.innerText = this.rightAnswers;
        this.showPlayerState();
        this.timerField.innerText = this.timeFormat(this.boomTimer);
        if (this.playerFailedAnswersCount[this.state] > 2 || !this.boomTimer) {
            this.boomTimer = 0;
            this.timerField.innerText = "BooM";
            this.answerFields.disabled = true;
        }
    },

    arrayItemsSum(arr) {
        let sum = 0;
        return sum = arr.reduce(function(a, b) {
            return a + b;
        });
    },

    timeFormat(value) {
        let sec = value % 60;
        let min = (value - sec) / 60;
        sec = (sec >= 10) ? sec : '0' + sec;
        min = (min >= 10) ? min : '0' + min;
        return `${min}:${sec}`;
    },

    nextPlayer() {
        do {
            this.state = (this.state === this.countOfPlayers) ? 1 : this.state + 1;
            this.totalTime = this.arrayItemsSum(this.playersTimers);
            if (this.totalTime === 0) {
                this.counter = 0;
            }
        } while (!this.playersTimers[this.state] && this.totalTime > 0);
    },

    showPlayerState() {
        this.correctAnswersField.innerText = `Игрок №${this.state}: верно: ` + this.playerRightAnswersCount[this.state];
        this.wrongAnswersField.innerText =  this.playerFailedAnswersCount[this.state];
        this.totalCorrectField.innerText = this.rightAnswers;
    },
}