export function getLanguageFromLocalStorage(): string {
  const item = localStorage.getItem("language");
  return item === "fa" ? item : "en";
}

export function changeLanguage(language: string): void {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "fa" ? "rtl" : "ltr";

  localStorage.setItem("language", language);
}
