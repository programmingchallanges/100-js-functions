import { marked } from "marked";
import { getLanguage } from "../utils/i18n.utils.js";

export async function renderProblemView(container, id) {
  const lang = getLanguage();

  try {
    const response = await fetch(`/src/data/problem-${id}/${lang}.md`);
    const markdown = await response.text();

    container.innerHTML = `
      <div class="problem">
        ${marked(markdown)}
        <br/>
        <a href="/">← Back</a>
      </div>
    `;
  } catch (err) {
    container.innerHTML = `<p>Problem not found.</p>`;
  }
}
