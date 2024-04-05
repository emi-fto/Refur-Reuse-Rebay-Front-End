import { useTranslation } from "react-i18next";
import "../Styles/LanguageSwitcher.css";
import i18n from "./TranslationComponent";

const LanguageSwitcher = () => {
  const { t } = useTranslation();

  const handleLanguageChange = (newLang) => {
    i18n.changeLanguage(newLang);
  };

  return (
    <div class="switchCtn">
      <button
        onClick={() => handleLanguageChange("en")}
        className={i18n.language === "en" ? "active" : ""}
      >
        EN
      </button>
      <div class="vl"></div>
      <button
        onClick={() => handleLanguageChange("de")}
        className={i18n.language === "de" ? "active" : ""}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;
