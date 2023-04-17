import { LANGUAGE_TYPE } from "@constants/index";
import { useRouter } from "next/router";

import vi from "../../public/lang/vi.json";
import en from "../../public/lang/en.json";
import kr from "../../public/lang/kr.json";


export type TranslateFn = (
  _id: string,
  _defaultMessage?: string,
  _values?: Record<string, any>,
) => string;

/* eslint-disable no-undef*/
interface ILangMenuItem {
  key: TLanguage;
  data: any;
}

const LangMenu: Map<TLanguage, ILangMenuItem> = new Map([
  [
    LANGUAGE_TYPE.EN,
    {
      key: LANGUAGE_TYPE.EN,
      data: en,
    },
  ],
  [
    LANGUAGE_TYPE.VI,
    {
      key: LANGUAGE_TYPE.VI,
      data: vi,
    },
  ],
  [
    LANGUAGE_TYPE.KR,
    {
      key: LANGUAGE_TYPE.KR,
      data: kr,
    },
  ],
]);

const useTranslate = (): any => {
  const { locale } = useRouter();

  if (!locale) {
    return LangMenu.has(LANGUAGE_TYPE.EN) ? LangMenu.get(LANGUAGE_TYPE.EN) : null;
  }
  return LangMenu.get(locale);
};

export default useTranslate;
