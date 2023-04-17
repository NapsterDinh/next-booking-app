/**
 * ファイルサイズを適切な単位付き文字列に変換
 * @param {number} size
 * @return {string} 単位付きファイルサイズ文字列
 */
const toUnit = ({ size }: { size: number }): string => {
  const { target, unit } = getTarget(size);
  const newSize = target !== null ? Math.floor((size / target) * Math.pow(10, 2)) / Math.pow(10, 2) : size;

  return newSize + unit;
};

const KB = 1024;
const TARGET_ENTRIES = {
  B: { target: null, unit: "byte" },
  KB: { target: KB, unit: "KB" },
  MB: { target: Math.pow(KB, 2), unit: "MB" },
  GB: { target: Math.pow(KB, 3), unit: "GB" },
  TB: { target: Math.pow(KB, 4), unit: "TB" },
};
/**
 * 入力されたファイルサイズを元に計算につかうバイト数と単位を返却
 * @param {number} size
 * @return {{target, unit}}
 */
const getTarget = (size: number) => {
  if (size >= TARGET_ENTRIES.TB.target) return TARGET_ENTRIES.TB;
  if (size >= TARGET_ENTRIES.GB.target) return TARGET_ENTRIES.GB;
  if (size >= TARGET_ENTRIES.MB.target) return TARGET_ENTRIES.MB;
  if (size >= TARGET_ENTRIES.KB.target) return TARGET_ENTRIES.KB;
  return TARGET_ENTRIES.B;
};

export default { toUnit };
