window.onload = function()
{
    var timerId = null;
    tikTakBoom.init(
        tasks,
        document.getElementById('counterField'),
        document.getElementById('gameStatusField'),
        // document.getElementById('questionField'),
        // document.getElementById('answer1'),
        // document.getElementById('answer2'),
        // document.getElementById('answer3'),
        document.getElementById('answerFields'),
        document.getElementById('startGameBtn'),
        document.getElementById('finishGameBtn'),
        timerId,
    )
    tikTakBoom.run();
}