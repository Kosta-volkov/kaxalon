document.getElementById('promiseOption').addEventListener('click', function() {
    window.location.href = '../../win/index.html?ending=good';
});

document.getElementById('escapeOption').addEventListener('click', function() {
    if (Math.random() > 0.5) {
        window.location.href = '../../win/index.html?ending=bad';
    } else {
        window.location.href = '../../lose/index.html';
    }
});
