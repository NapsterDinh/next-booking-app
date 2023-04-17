import { LANGUAGE_TYPE } from "@constants/index";

export * from "./components";
export * from "./elements";
export * from "./hooks";

/* eslint-disable no-unused-vars */
/** エラーオブジェクト */
interface IAppError {
    code?: number;
    message?: string;
    path?: string;
    stack?: any;
}

/** 入力コンポーネントイベント */
type THandleInput<T> = (inputValue: T) => void;

/** 入力コンポーネントサイズ */
type TComponentSize = "XXS" | "XS" | "S" | "M" | "L" | "AUTO";

declare global {
    type TLanguage = typeof LANGUAGE_TYPE[keyof typeof LANGUAGE_TYPE];
}


