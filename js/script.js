window.onload = function()
{
    var timerId = null;
    //var nextQuestion = true;
    tikTakBoom.init(
        tasks,
        // document.getElementById('timerField'),
        document.getElementById('counterField'),
        document.getElementById('gameStatusField'),
        document.getElementById('questionField'),
        document.getElementById('answer1'),
        document.getElementById('answer2'),
        document.getElementById('answer3'),
        document.getElementById('answerFields'),
        document.getElementById('startGameBtn'),
        timerId,
        //nextQuestion,
        // document.getElementById('finishGameBtn'),
    )
    tikTakBoom.run();
    //document.getElementById('answerFields').setAttribute('disabled', 'disabled');
}
