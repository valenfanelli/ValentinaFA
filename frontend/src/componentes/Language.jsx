import '../App.css';
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

export const Language = () => {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        i18n.changeLanguage(newLang);
    };
    return <>
        <button className="m-3 fs-7 montserrat btn-lang" onClick={() => i18n.changeLanguage(i18n.language === "es" ? "en" : "es")}>
           {i18n.language === "es" ? "English" : "Español"}
        </button>
    </>
}