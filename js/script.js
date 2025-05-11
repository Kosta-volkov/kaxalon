document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').textContent = "Чудовий вибір! Твоя пригода починається...";
    setTimeout(() => {
        window.location.href = 'game/level1.html';
    }, 1500);
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('response').textContent = "Що ж, відпочинь і повертайся, коли будеш готовий.";
});
