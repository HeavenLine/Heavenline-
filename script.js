document.getElementById('clickMe').addEventListener('click', () => {
  const messages = [
    "You found the secret button! 🎉",
    "Nice click! Have a great day 😄",
    "You're awesome for visiting my site! ✨",
    "Keep exploring — more coming soon 🚀"
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  let msgBox = document.getElementById('funMessage');
  if (!msgBox) {
    msgBox = document.createElement('p');
    msgBox.id = 'funMessage';
    msgBox.style.marginTop = '1.5rem';
    msgBox.style.fontSize = '1.2rem';
    msgBox.style.color = '#2cb67d';
    document.querySelector('.hero').appendChild(msgBox);
  }

  msgBox.textContent = randomMessage;
});
