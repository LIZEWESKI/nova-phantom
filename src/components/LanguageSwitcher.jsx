import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { i18n } from "./i18n-provider"; // Import the i18n instance directly
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem("current-lang") || "en" );
  useEffect(()=> {
    
  },[])
  const getLanguage = (language) => {
    setCurrentLanguage(language);
    localStorage.setItem("current-lang",language);
    i18n.changeLanguage(currentLanguage)
  }
  console.log(localStorage.getItem("current-lang"),currentLanguage)
  // Language options with their native names
  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
    { code: "fr", name: "Français" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" >
          <Globe />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => getLanguage(lang.code)}
            className='cursor-pointer'
          >
            {lang.name}
          </DropdownMenuItem>
        ))}

      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSwitcher;
