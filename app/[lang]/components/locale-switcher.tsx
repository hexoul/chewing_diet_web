"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { GlobeIcon } from "lucide-react";

import { i18n, type Locale } from "../../../i18n-config";

const LITERAL = {
  en: "English",
  es: "Español",
  hi: "हिन्दी",
  ja: "日本語",
  ko: "한국어",
};

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <Select
      defaultValue={pathname.split("/")[1] as Locale}
      onValueChange={(value) =>
        router.replace(redirectedPathname(value as Locale))
      }
    >
      <SelectTrigger>
        <GlobeIcon />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {i18n.locales.map((locale) => (
            <SelectItem key={locale} value={locale}>
              {LITERAL[locale]}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
