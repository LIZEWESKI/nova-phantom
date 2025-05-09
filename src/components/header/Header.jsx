import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import GlowingButton from "../ui/GlowingButton";
import AppLogo from "../AppLogo";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { ModeToggle } from "../ModeToggle";

export default function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const navigation = [
    { href: "#features", name: t("nav.features") },
    { href: "#testimonials", name: t("nav.testimonials") },
    { href: "#pricing", name: t("nav.pricing") },
    { href: "#faq", name: t("nav.faq") },
  ];
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 flex justify-center z-50 border-b-[1px] px-6 md:px-20 py-2 w-full backdrop-blur-lg transition-all duration-300 ${
        isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-bold">
          <AppLogo />
          <span>{t("nav.brand")}</span>
        </a>
        <nav className="hidden md:flex gap-8">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex gap-4 items-center">
          <LanguageSwitcher />
          <ModeToggle />
          <a href="#contact">
            <GlowingButton text={t("nav.getStarted")} />
          </a>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
             className="bg-transparent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-12 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
        >
          <div className="container py-4 flex flex-col gap-4 items-center">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </a>
            ))}

            <div className="flex flex-col gap-2 pt-2 border-t">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                <GlowingButton text={t("nav.getStarted")} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
