const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Define o tema inicial
if (currentTheme) {
  document.body.classList.add(currentTheme);
  themeToggle.textContent = currentTheme === 'light' ? '🌞' : '🌙';
} else {
  localStorage.setItem('theme', 'dark');
}

// Alterna o tema ao clicar no botão
themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  const newTheme = isLight ? 'light' : 'dark';
  themeToggle.textContent = isLight ? '🌞' : '🌙';
  localStorage.setItem('theme', newTheme);
});
