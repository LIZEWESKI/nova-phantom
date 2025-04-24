import {Link} from "react-router"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import AppLogo from "../AppLogo"
import { useTranslation } from "react-i18next"

export default function Footer() {
    const { t } = useTranslation()
    const footer = (value) => t(`footer.${value}`)
  return (
    <footer className="w-full border-t flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="container flex flex-col gap-8 px-4 py-2 md:px-6 lg:py-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold">
                <AppLogo/>
              <span>Nova Phantom</span>
            </div>
            <p className="text-sm text-muted-foreground">{footer("description")}</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="size-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="size-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">{footer("product")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("features.title")}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("pricing.section")}
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">{footer("company")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                {footer("about")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                {footer("careers")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                {footer("privacy")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                {footer("terms")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/90 pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {t("brand")}. {footer("copyright")}
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            {footer("privacy")}
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            {footer("terms")}
            </a>
            {/* <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
