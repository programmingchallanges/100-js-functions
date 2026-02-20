import { problems } from "../../public/data/problems.js";
import { getLanguage } from "../utils/i18n.utils.js";

const PER_PAGE = 10;

export function renderProblemList(container) {
  const lang = getLanguage();

  container.innerHTML = `
    <div class="problems-list">
      ${problems
        .map(
          (p) => `
          <a href="?id=${p.id}">
            ${p.title[lang]}
          </a>
      `,
        )
        .join("")}
    </div>
  `;
}
