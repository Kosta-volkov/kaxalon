document.getElementById('bypassOption').addEventListener('click', function() {
    if (Math.random() > 0.5) {
        window.location.href = 'level3_badgers.html';
    } else {
        window.location.href = '../lose.html';
    }
});

document.getElementById('calmOption').addEventListener('click', function() {
    if (Math.random() > 0.3) {
        window.location.href = 'level3_badgers.html';
    } else {
        window.location.href = '../lose.html';
    }
});
