if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.getElementById('clickMe').addEventListener('click', () => {
  window.location.href = 'https://heavenlinegodisgood.my.canva.site/';
});

// Verse of the Day - automatically changes based on today's date
const verses = [
  '"For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future." - Jeremiah 29:11',
  "I can do all things through Christ who strengthens me. - Philippians 4:13",
  "The LORD is my shepherd; I shall not want. - Psalm 23:1",
  "Trust in the LORD with all your heart, and do not lean on your own understanding. - Proverbs 3:5",
  "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go. - Joshua 1:9",
  "This is the day that the LORD has made; let us rejoice and be glad in it. - Psalm 118:24",
  "And we know that for those who love God all things work together for good. - Romans 8:28"
];

const verseEl = document.getElementById('verseText');
if (verseEl) {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const todaysVerse = verses[dayOfYear % verses.length];
  verseEl.textContent = todaysVerse;
}

// Dark / Light mode toggle
const modeToggle = document.getElementById('modeToggle');
if (modeToggle) {
  try {
    const savedMode = localStorage.getItem('heavenlineMode');
    if (savedMode === 'light') {
      document.body.classList.add('light-mode');
      modeToggle.textContent = 'Dark Mode';
    }
  } catch (e) {
    // localStorage unavailable (private browsing, etc.) - just skip remembering the choice
  }

  modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    modeToggle.textContent = isLight ? 'Dark Mode' : 'Light Mode';
    try {
      localStorage.setItem('heavenlineMode', isLight ? 'light' : 'dark');
    } catch (e) {
      // ignore if storage isn't available
    }
  });
}