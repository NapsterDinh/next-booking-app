import { byteCountBySJIS } from "@Utils/StringUtil";
import React from "react";

/**
 * 入力値の必須チェック
 * @param {any} value 入力値
 * @param {boolean} requireSetting 必須チェック対象か
 * @returns 必須チェック対象かつ入力値が無い場合true
 */
const isNotInput = ({
  value,
  requireSetting = true,
}: {
  /** 入力値 */ value: any;
  /** 必須チェック対象か */ requireSetting?: boolean;
}): boolean => {
  // 必須チェック対象で無ければ固定でfalse
  if (!requireSetting) return false;

  return value ? false : true;
};

/**
 * 数値の必須チェック（0を許可）
 * @param {number} value 入力値
 * @param {boolean} requireSetting 必須チェック対象か
 * @return 必須チェック対象かつ入力値が無い場合true
 */
const isNotInputInteger = ({
  value,
  requireSetting = true,
}: {
  /** 入力値 */ value: number | null | undefined;
  /** 必須チェック対象か */ requireSetting?: boolean;
}): boolean => {
  // 必須チェック対象で無ければ固定でfalse
  if (!requireSetting) return false;

  return 0 === value || value ? false : true;
};

/**
 * 半角数字以外の文字が含まれるか
 * @param {string} value 入力値
 * @returns 半角数字以外が入っているとき場合true
 */
const isNotHankakuNumeric = ({ value }: { /** 文字列 */ value: string }): boolean => {
  return value.match(/^[0-9]*$/) ? false : true;
};

/**
 * 半角文字以外(全角)が含まれるか
 * @param {string} value 入力値
 * @returns 半角文字以外(全角)が入っている場合true
 */
const isNotHankaku = ({ value }: { /** 文字列 */ value: string }): boolean => {
  return value.match(/^[\x01-\x7E\uFF65-\uFF9F]*$/) ? false : true;
};

/**
 * 半角英数以外の文字が含まれるか
 * @param {string} value 入力値
 * @returns 半角英数以外が入っているとき場合true
 */
const isNotHankakuAlphanumeric = ({ value }: { /** 文字列 */ value: string }): boolean => {
  return value.match(/^[A-Za-z0-9]*$/) ? false : true;
};

/**
 * 半角英数記号カナ以外の文字が含まれるか
 * @param {string} value 入力値
 * @returns 半角英数記号カナ以外が入っているとき場合true（以下の記号は許可しない）
 * % ^ * ( ) ' [ ] < > " ,
 */
const isNotHankakuAlphanumericSymbolsKana = ({ value }: { /** 文字列 */ value: string }): boolean => {
  return value.match(/^[a-zA-Z0-9ｦ-ﾟ\d!?_+`#$&\-\\@;:./=~|{}]*$/) ? false : true;
};

/**
 * 全角カナと長音符以外の文字が含まれるか
 * @param {string} value 入力値
 * @returns 全角カナと長音符以外が入っているとき場合true
 */
const isNotKana = ({ value }: { /** 文字列 */ value: string }): boolean => {
  return value.match(/[^ァ-ヶー]/) ? true : false;
};

/**
 * 文字列が与えられた文字数を超えているか
 * @param {string} value 入力値
 * @param {number} maxLength 最大文字数
 * @return 文字数以上ならtrue
 */
const isStringLengthOver = ({
  value,
  maxLength,
}: {
  /** 文字列 */ value: string;
  /** 最大文字数 */ maxLength: number;
}): boolean => {
  return maxLength < value.length;
};

/**
 * 数値が与えられた桁数を超えているか
 * @param {number} value 入力値
 * @param {number} maxLength 最大桁数
 * @return 桁数以上ならtrue
 */
const isNumberLengthOver = ({
  value,
  maxLength,
}: {
  /** 整数値 */ value: number;
  /** 最大桁数 */ maxLength: number;
}): boolean => {
  return maxLength < String(value).length;
};
/**
 * 文字列数値が与えられた桁数を超えているか
 * @param {number} value 入力値
 * @param {number} maxLength 最大桁数
 * @return 桁数以上ならtrue
 */
const isStringNumberLengthOver = ({
  value,
  integralMaxLength,
  decimalMaxLength,
}: {
  /** 文字列数字 */ value: string;
  /** 整数最大桁数 */ integralMaxLength: number;
  /** 小数最大桁数 */ decimalMaxLength: number;
}): boolean => {
  const valueArray = value.split(".");
  // 半角数字以外許可しない
  if (valueArray.some((strNumber) => !strNumber.match(/^[0-9]*$/))) {
    return true;
  }

  // ドット（.）が1個以下
  if (valueArray.length > 2) return true;
  if (integralMaxLength < valueArray[0].length) return true;
  if (valueArray[1] && decimalMaxLength < valueArray[1].length) return true;

  return false;
};

/**
 * 数値が与えられた桁数と一致していないか
 * @param {number} value 入力値
 * @param {number} fixedNumberLength 桁数
 * @return 一致していない場合true
 */
const isNumberLengthNotMatch = ({
  value,
  fixedNumberLength,
}: {
  /** 整数値 */ value: number;
  /** 桁数 */ fixedNumberLength: number;
}): boolean => {
  return fixedNumberLength !== String(value).length;
};

/**
 * 数値が与えられた最大値を超えているか
 * @param {number} value 入力値
 * @param {number} max 最大値
 * @return 最大値以上ならtrue
 */
const isNumberOver = ({ value, max }: { /** 整数値 */ value: number; /** 最大値 */ max: number }): boolean => {
  return max < value;
};

/**
 * 配列の件数が与えられた件数を超えているか
 * @param {Array<any>} value 配列
 * @param {number} maxLength 最大件数
 * @return 最大件数以上ならtrue
 */
const isArrayLengthOver = ({
  value,
  maxLength,
}: {
  /** 配列 */ value: any[];
  /** 最大桁数 */ maxLength: number;
}): boolean => {
  return maxLength < value.length;
};

/**
 * ファイルの拡張子が不正か
 * @param {File} file ファイル
 * @return ファイルの拡張子がない、または許可されていないものだったときtrue
 */
const isInvalidExtension = (file: File) => {
  try {
    const fileNameArray = file.name.split(".");
    if (fileNameArray.length <= 1) return true;
    const extension = fileNameArray.slice(-1)[0].toLowerCase();
    return TARGET_EXTENSION.some((target) => extension === target);
  } catch (error) {
    return false;
  }
};

/**
 * ファイルのサイズが不正か
 * @param {File} file ファイル
 * @param {number} maxByte 最大サイズ（byte）
 * @return ファイルのサイズが最大サイズを超えているときtrue
 */
const isFileSizeOver = (file: File, maxByte = 104857600) => {
  // Fileから取得できるサイズの単位はbyte
  return maxByte < file.size;
};

/**
 * FAX・電話番号形式が不正か
 * @param {string} value 入力値
 * @return 形式が不正ならtrue
 */
const isNotTel = ({ value }: { /** 入力値 */ value: string }) => {
  // TEL/FAX用正規表現
  return value.match("^([\\d]{2,5}-[\\d]{1,4}-[\\d]{2,4})$") ? false : true;
};

/**
 * 郵便番号形式が不正か
 * @param {string} value 入力値
 * @return 形式が不正ならtrue
 */
const isNotZipCode = ({ value }: { /** 入力値 */ value: string }) => {
  const valueArray = value.split("-");
  // 半角数字以外許可しない
  if (valueArray.some((strNumber) => strNumber === "" || !strNumber.match(/^[0-9]*$/))) {
    return true;
  }
  // ハイフン（-）が1文字必須
  if (valueArray.length !== 2) return true;
  // ハイフン前は3桁
  if (valueArray[0].length !== 3) return true;
  // ハイフン後は4桁
  if (valueArray[1].length !== 4) return true;

  return false;
};

/**
 * メールアドレス形式が不正か
 * @param {string} value 入力値
 * @return 形式が不正ならtrue
 */
const isNotEmailAddress = ({ value }: { /** 入力値 */ value: string }) => {
  // Email用正規表現
  if (!value.match("^([\\w\\.\\-~/]+)@([\\w_\\-]+)\\.([\\w_\\.\\-]*)[a-z][a-z]$")) {
    return true;
  }
  if (value.indexOf("..") >= 0 || value.indexOf(".@") >= 0) {
    return true;
  }
  return false;
};

/**
 * 数値の正規表現バリデーションチェック
 * - 行頭マイナス記号許容、整数の桁指定、小数の桁指定
 * @param { string | number } value 入力値
 * @param { number } integer 整数の桁数指定
 * @param { number | undefined } decimal 小数の桁数指定
 * @return { boolean } 形式が不正なら true
 */
const isNumberRegExpFormat = ({
  value,
  integer,
  decimal,
}: {
  value: React.ReactText;
  integer: number;
  decimal?: number;
}): boolean => {
  // ハイフンのみの入力は許可しない
  if (value === "-") return true;

  const pattern = decimal
    ? `^[-]?([1-9][0-9]{0,${integer - 1}}|0)(\\.[0-9]{1,${decimal}})?$`
    : `^[-]?([1-9][0-9]{0,${integer - 1}}|0)?$`;
  const format = new RegExp(pattern);
  return !format.test(String(value));
};

/**
 * 法人番号が不正か
 * @param {string} value 入力値
 * @return 形式が不正ならtrue
 */
const isNotCorpGenuineId = ({ value }: { /** 入力値 */ value: number }) => {
  if (value.toString().length == 0) return false;
  // 頭文字が0以外の13桁数字でない場合は不正
  if (!value.toString().match("^[1-9]{1}[0-9]{12}$")) {
    return true;
  }
  const cd1 = parseInt(value.toString().substring(0, 1));
  const num = value.toString().substring(1);
  let sum = 0;
  for (let i = 1; i <= num.length; i++) {
    const p: number = parseInt(num.substring(num.length - i, num.length - i + 1));
    const q = i % 2 == 0 ? 2 : 1;
    sum += p * q;
  }
  const cd2 = 9 - (sum % 9);
  return cd1 !== cd2;
};

/**
 * 法人格を含むか
 * @param {string} value 入力値
 * @returns 法人格を含む場合はtrue
 */
const isContainsJuridicalPersonallity = ({ value }: { /** 文字列 */ value: string }): boolean => {
  const juridicalPersonalities = [
    "株式会社",
    "（株）",
    "㈱",
    "㍿",
    "㊑",
    "有限会社",
    "（有）",
    "㈲",
    "㊒",
    "合名会社",
    "（合）",
    "（名）",
    "㊔",
    "㈴",
    "合資会社",
    "（資）",
    "㈾",
    "㊮",
    "合同会社",
    "（同）",
  ];
  return juridicalPersonalities.some((item) => value.indexOf(item) != -1);
};

/**
 * 文字列が与えられたバイト数を超えているか
 * @param {string} value 入力値
 * @param {number} maxBytes 最大バイト数
 * @returns バイト数を超えるならtrue
 */
const isByteCountOverBySJIS = ({
  value,
  maxBytes,
}: {
  /** 文字列 */ value: string;
  /** 最大バイト数 */ maxBytes: number;
}): boolean => {
  const byteCount = byteCountBySJIS(value);
  return maxBytes < byteCount;
};

/**
 * フリガナに使用可能な文字列か
 *
 * @param {string} value 入力値
 * @returns フリガナに使用可能文字列の場合はtrue
 */
const isFuriganaOnly = ({ value }: { /** 文字列 */ value: string }): boolean => {
  const pattern =
    "^([ｦ-ﾟァ-ヶ゛゜ーゝゞヽヾ\\x8140-〓∈-∩∠-∬◯Α-Ωα-ωА-Яа-я─-╂～－!#$&+./0-9:;=?@A-Z\\_`a-z{|}~！＃＄％＆（）＋，．／０-９：；＜＝＞？＠Ａ-Ｚ［￥］＾＿｀ａ-ｚ｛｜｝￣「」 　｡｢｣､・･-]*)$";
  return value.match(pattern) ? true : false;
};

/**
 * 入力値が後述の特殊文字のみで構成されているか　%^*()'[]<>",半角スペース 全角スペース
 * @param {string} source 入力値
 * @return 特殊文字のみで構成されているならばtrue
 */
const isOnlySpecialCharacter = ({ source }: { /** 入力値 */ source: string }): boolean => {
  return source.match(/^[%^*()'\[\]<>", 　]*$/) ? true : false;
};

/**
 * XSS回避
 * @param {string} source 入力値
 * @return HTMLタグを空文字に置換
 * */
const sanitizeHtmlTag = (source: string) => source.replace(/[<>]/g, "");

export {
  isNotInput,
  isNotInputInteger,
  isNotHankakuNumeric,
  isNotHankaku,
  isNotHankakuAlphanumeric,
  isNotHankakuAlphanumericSymbolsKana,
  isNotKana,
  isStringLengthOver,
  isNumberLengthOver,
  isStringNumberLengthOver,
  isNumberLengthNotMatch,
  isNumberOver,
  isArrayLengthOver,
  isInvalidExtension,
  isFileSizeOver,
  isNotTel,
  isNotZipCode,
  isNotEmailAddress,
  isNumberRegExpFormat,
  isNotCorpGenuineId,
  isContainsJuridicalPersonallity,
  isByteCountOverBySJIS,
  isFuriganaOnly,
  isOnlySpecialCharacter,
  sanitizeHtmlTag,
};

/** 許可されていない拡張子 */
const TARGET_EXTENSION = [
  "ade",
  "adp",
  "apk",
  "bat",
  "chm",
  "cmd",
  "com",
  "cpl",
  "dll",
  "dmg",
  "exe",
  "hta",
  "ins",
  "isp",
  "jar",
  "js",
  "jse",
  "lib",
  "lnk",
  "mde",
  "msc",
  "msi",
  "msp",
  "mst",
  "nsh",
  "pif",
  "scr",
  "sct",
  "shb",
  "sys",
  "vb",
  "vbe",
  "vbs",
  "vxd",
  "wsc",
  "wsf",
  "wsh",
  "cab",
];
/** 携帯電話 */
const MOBILE_PHONE = ["050", "060", "070", "080", "090"] as const;
/** 固定電話 */
const FIXED_PHONE = ["01", "02", "03", "04", "05", "06", "07", "08", "09"] as const;
