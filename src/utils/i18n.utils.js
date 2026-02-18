const LANGUAGE_KEY = "pc-lang";

export function getLanguage() {
  return localStorage.getItem(LANGUAGE_KEY) || "en";
}

export function setLanguage(language) {
  localStorage.setItem(LANGUAGE_KEY, language);
  document.documentElement.setAttribute("lang", language);
  // window.location.reload();
}

export function setDirection(direction) {
  document.documentElement.setAttribute("dir", direction);
}

export function toggleLanguage() {
  const currentLanguage = getLanguage();
  const targetLanguage = currentLanguage === "en" ? "fa" : "en";
  const targetDirection = targetLanguage === "en" ? "ltr" : "rtl";
  setLanguage(targetLanguage);
  setDirection(targetDirection);
}
