document.getElementById('leverOption').addEventListener('click', function() {
    if (Math.random() > 0.4) {
        window.location.href = '../level3_cave/index.html';
    } else {
        window.location.href = '../../lose/index.html';
    }
});

document.getElementById('digOption').addEventListener('click', function() {
    if (Math.random() > 0.6) {
        window.location.href = '../level3_cave/index.html';
    } else {
        window.location.href = '../../lose/index.html';
    }
});
