export function paginate(current: number, max: number) {
  const prev = current === 1 ? null : current - 1;
  const next = current === max ? null : current + 1;
  const items: (number | "ellipsis")[] = [1];

  if (current === 1 && max === 1) {
    return { current, prev, next, items };
  }

  if (current > 4) {
    items.push("ellipsis");
  }

  const r = 1;
  const r1 = current - r;
  const r2 = current + r;

  for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) {
    items.push(i);
  }

  if (r2 + 1 < max) {
    items.push("ellipsis");
  }

  if (r2 < max) {
    items.push(max);
  }

  return { current, prev, next, items };
}
