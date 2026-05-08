(function(document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');

  document.addEventListener('click', function(e) {
    var target = e.target;

    if(!checkbox.checked ||
       sidebar.contains(target) ||
       (target === checkbox || target === toggle)) return;

    checkbox.checked = false;
  }, false);
})(document);

(function(document, window) {
  var storageKey = 'site-theme';
  var toggleButton = document.querySelector('#theme-toggle');

  function setButtonLabel(isDark) {
    if (!toggleButton) return;
    var label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    toggleButton.setAttribute('aria-label', label);
    toggleButton.setAttribute('title', label);
  }

  function applyTheme(theme) {
    var isDark = theme === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    setButtonLabel(isDark);
  }

  var savedTheme = null;
  try {
    savedTheme = window.localStorage.getItem(storageKey);
  } catch (e) {}

  if (savedTheme === 'dark' || savedTheme === 'light') {
    applyTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  if (toggleButton) {
    toggleButton.addEventListener('click', function() {
      var nextTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
      applyTheme(nextTheme);
      try {
        window.localStorage.setItem(storageKey, nextTheme);
      } catch (e) {}
    });
  }
})(document, window);
