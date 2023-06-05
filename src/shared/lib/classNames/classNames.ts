type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods?: Mods,
  additional?: string[]
): string => {
  return [
    cls,
    ...Object.entries(mods || {})
      .filter(([_cls, value]) => Boolean(value))
      .map(([cls]) => cls),
    ...(additional || []).filter(Boolean),
  ].join(' ');
};
