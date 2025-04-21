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

  const changeLanguage = (lng) => i18n.changeLanguage(lng);
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
            onClick={() => changeLanguage(lang.code)}
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
