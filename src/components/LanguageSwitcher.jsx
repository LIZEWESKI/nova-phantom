import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { i18n } from "./i18n-provider"; // Import the i18n instance directly

export function LanguageSwitcher() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    // Use the imported i18n instance directly
    i18n.changeLanguage(lng);
    setIsOpen(false);
    console.log(`Language changed to: ${lng}`);
  };

  // Language options with their native names
  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
    { code: "fr", name: "Français" },
  ];

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="p-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-black transition-colors flex items-center gap-1"
        aria-label={t("language")}
      >
        <Globe className="h-5 w-5 hover:bg-accent hover:text-accent/50 dark:text-white" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-black ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`block w-full text-left px-4 py-2 text-sm cursor-pointer ${
                  i18n.language === lang.code
                    ? "bg-rose-50 text-rose-700 dark:bg-gray-600/20 dark:text-white"
                    : "text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                role="menuitem"
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
