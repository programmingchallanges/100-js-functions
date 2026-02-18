import { getLanguage } from "./i18n.utils.js";
import { getTheme } from "./theme.utils.js";

export const state = {
  lang: getLanguage(),
  theme: getTheme(),
  currentPage: 1,
  currentProblemId: null,
};

export function getState() {
  return state;
}

export function setState(newState) {
  Object.assign(state, newState);
}
