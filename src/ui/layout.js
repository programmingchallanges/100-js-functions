import { toggleLanguage } from "../utils/i18n.utils.js";
import { getTheme, toggleTheme } from "../utils/theme.utils.js";
import { getLanguage } from "../utils/i18n.utils.js";

export function renderLayout() {
  const lang = getLanguage();
  const theme = getTheme();

  return `
    <div id="root-layout">
      <header>
        <h1>100 JS Functions</h1>
        <div>
          <button class="btn primary" id="lang-toggle">${lang === "en" ? "Persian" : "English"}</button>
          <button class="btn primary" id="theme-toggle">${theme === "dark" ? "light" : "dark"}</button>
        </div>
      </header>
      <main id="content""></main>
    </div>
  `;
}

document.addEventListener("click", (e) => {
  if (e.target.id === "lang-toggle") {
    toggleLanguage();
  }

  if (e.target.id === "theme-toggle") {
    toggleTheme();
  }
});
