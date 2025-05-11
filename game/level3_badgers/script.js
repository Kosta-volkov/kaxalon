document.getElementById('solveOption').addEventListener('click', function() {
    if (Math.random() > 0.4) {
        window.location.href = '../level4_badgers/index.html';
    } else {
        window.location.href = '../../lose/index.html';
    }
});

document.getElementById('forceOption').addEventListener('click', function() {
    if (Math.random() > 0.8) {
        window.location.href = '../level4_badgers/index.html';
    } else {
        window.location.href = '../../lose/index.html';
    }
});
