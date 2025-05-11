document.getElementById('calmGhostOption').addEventListener('click', function() {
    if (Math.random() > 0.5) {
        window.location.href = '../level4_cave/index.html';
    } else {
        window.location.href = '../../lose/index.html';
    }
});

document.getElementById('promiseOption').addEventListener('click', function() {
    if (Math.random() > 0.3) {
        window.location.href = '../level4_cave/index.html';
    } else {
        window.location.href = '../../lose/index.html';
    }
});
