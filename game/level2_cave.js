document.getElementById('leverOption').addEventListener('click', function() {
    if (Math.random() > 0.4) {
        window.location.href = 'level3_cave.html';
    } else {
        window.location.href = '../lose.html';
    }
});

document.getElementById('digOption').addEventListener('click', function() {
    if (Math.random() > 0.6) {
        window.location.href = 'level3_cave.html';
    } else {
        window.location.href = '../lose.html';
    }
});
