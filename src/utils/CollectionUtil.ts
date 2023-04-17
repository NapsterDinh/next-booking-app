import React from "react";

const groupBy = <T, K>(array: T[], getKeyFn: (arg: T) => K): { key: K; values: T[]; count: number }[] => {
  const grouped = (array ?? []).reduce((result: Map<K, T[]>, cur: T) => {
    const collection = result.get(getKeyFn(cur)) ?? [];
    collection.push(cur);
    result.set(getKeyFn(cur), collection);
    return result;
  }, new Map<K, T[]>());
  return Array.from(grouped, (v) => ({
    key: v[0],
    values: v[1],
    count: v[1].length,
  }));
};
export default { groupBy };
