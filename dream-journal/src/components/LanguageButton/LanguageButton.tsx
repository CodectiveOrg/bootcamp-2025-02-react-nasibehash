import { useTranslation } from "react-i18next";

import TwemojiFlagUnitedKingdom from "../../icons/TwemojiFlagUnitedKingdom.tsx";
import TwemojiFlagIran from "../../icons/TwemojiFlagIran.tsx";

import Button from "../Button/Button.tsx";

export default function LanguageButton() {
  const { i18n } = useTranslation();

  return (
    <Button
      variant="solid"
      size="medium"
      shape="square"
      onClick={() => i18n.changeLanguage(i18n.language === "fa" ? "en" : "fa")}
    >
      {i18n?.language === "fa" ? (
        <TwemojiFlagIran />
      ) : (
        <TwemojiFlagUnitedKingdom />
      )}
    </Button>
  );
}
