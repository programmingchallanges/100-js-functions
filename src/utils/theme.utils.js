const THEME_KEY = "pc-theme";

export function getTheme() {
  return localStorage.getItem(THEME_KEY) || "dark";
}

export function toggleTheme() {
  const currentTheme = getTheme();
  const targetTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(targetTheme);
  applyTheme();
}

export function setTheme(theme) {
  if (theme === "dark" || theme === "light") {
    localStorage.setItem(THEME_KEY, theme);
  }
}

export function applyTheme() {
  document.documentElement.dataset.theme = getTheme();
}
