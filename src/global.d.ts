interface env {
  /** config名 */ readonly NAME: string;
  /** APIのURL */ readonly API_URL: string;
  /** ログイン画面URL */ readonly LOGIN_URL: string;
  /** es.infomartのURL */ readonly ES_INFOMART_URL: string;
  /** 見積書PFへ遷移させるためのURL */ readonly ESTIMATE_INFOMART_URL: string;
}

/**
 * APP環境変数
 */
declare namespace app {
  const env: env;
}

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
