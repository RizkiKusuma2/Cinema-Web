const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.movie-card');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const selected = filter.dataset.filter;
    filters.forEach((item) => item.classList.toggle('active', item === filter));
    cards.forEach((card) => {
      card.hidden = selected !== 'all' && card.dataset.status !== selected;
    });
  });
});

document.querySelector('#date-button').addEventListener('click', (event) => {
  const button = event.currentTarget;
  button.innerHTML =
    button.dataset.alternate === 'true'
      ? 'Hari ini, 10 Nov <span>⌄</span>'
      : 'Besok, 11 Nov <span>⌄</span>';
  button.dataset.alternate = button.dataset.alternate === 'true' ? 'false' : 'true';
});
