document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/questions')
        .then(response => response.json())
        .then(questions => {
            const container = document.getElementById('questions');
            questions.forEach(q => {
                const card = document.createElement('div');
                card.innerHTML = `
                    <h3>${q.question}</h3>
                    <p>Réponse : ${q.reponse}</p>
                `;
                container.appendChild(card);
            });
        })
        .catch(err => console.error("Erreur :", err));
});