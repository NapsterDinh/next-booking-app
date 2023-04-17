/**
 * 空白のみの場合は空文字（長さ0の文字列）を返す
 *
 * @param {string} value 文字列
 * @returns 変換後の文字列
 */
const spaceOnlyRemove = (value: string | null): string => {
  if (!value) return "";
  const work: string = value.replace(/[ 　]/g, "");
  if (work.length == 0) {
    return "";
  }
  return value;
};

/**
 * Shift_JISにおける文字列のバイト数を取得する
 * @param {string} value 入力値
 * @returns バイト数
 */
const byteCountBySJIS = (value: string): number => {
  const byteArray = Array.from(value).map((c, i) => value.charCodeAt(i));
  const byteCount = byteArray.reduce((sum: number, char: number) => {
    if (
      (char >= 0x0 && char < 0x81) ||
      char === 0xf8f0 ||
      (char >= 0xff61 && char < 0xffa0) ||
      (char >= 0xf8f1 && char < 0xf8f4)
    ) {
      return sum + 1;
    } else {
      return sum + 2;
    }
  }, 0);
  return byteCount;
};

/**
 * 文字列を置換する
 * @param {string} base 置換前の文字列
 * @param {object} values 置換するキーと値のオブジェクト （置換前の文字列に${キー}と一致する部分を置換する）
 * @returns 置換後の文字列
 */
const stringFormat = (base: string, values: object | null | undefined): string => {
  return values
    ? new Function(...Object.keys(values), `return \`${base}\`;`)(...Object.values(values).map((value) => value ?? ""))
    : base;
};

export { spaceOnlyRemove, byteCountBySJIS, stringFormat };
