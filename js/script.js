document.getElementById('yesButton').addEventListener('click', function() {
            document.getElementById('response').textContent = "Чудовий вибір! Твоя пригода починається...";
            // Тут можна додати перехід до наступного етапу квесту (якщо він буде на цій же сторінці або на іншій).
        });

        document.getElementById('noButton').addEventListener('click', function() {
            document.getElementById('response').textContent = "Що ж, відпочинь і повертайся, коли будеш готовий.";
        });
document.getElementById('yesButton').addEventListener('click', function() {
            document.getElementById('response').textContent = "Чудовий вибір! Твоя пригода починається...";
            // Тут можна додати перехід до наступного етапу квесту (якщо він буде на цій же сторінці або на іншій).
        });

        document.getElementById('noButton').addEventListener('click', function() {
            document.getElementById('response').textContent = "Що ж, відпочинь і повертайся, коли будеш готовий.";
        });
        
  const yesButton = document.getElementById('yesButton');

  yesButton.addEventListener('click', function() {
    window.location.href = 'igra/geme.html';
  });
