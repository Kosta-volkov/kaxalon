        document.getElementById('yesButton').addEventListener('click', function() {
            document.getElementById('response').textContent = "Чудовий вибір! Твоя пригода починається...";
        });

        document.getElementById('noButton').addEventListener('click', function() {
            document.getElementById('response').textContent = "Що ж, відпочинь і повертайся, коли будеш готовий.";
        });
        
        document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = 'dal.html';
});


 document.getElementById('noButton').addEventListener('click', function() {
    window.location.href = 'stop.html';
});
