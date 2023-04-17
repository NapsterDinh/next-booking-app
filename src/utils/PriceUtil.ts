import React from "react";

/**
 * 値をコンマ区切りで取得
 * - 小数対応
 *
 * TODO 絶対値が 2^53 以上の数値リテラルは大きすぎるため、整数として正確に表現できません。
 */
const toThousandsSeparator = (value: React.ReactText) => {
  const temp = String(value).split(".");
  let result = temp[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  if (temp.length > 1) result += `.${temp[1]}`;
  return result;
};

/** 金額処理 */
export default { toThousandsSeparator };
