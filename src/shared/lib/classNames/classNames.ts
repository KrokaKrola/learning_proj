export type Mods = Record<string, boolean | string | undefined>;

export const classNames = (
  cls: string,
  mods?: Mods,
  additional?: Array<string | undefined>
): string => {
  return [
    cls,
    ...Object.entries(mods || {})
      .filter(([_cls, value]) => Boolean(value))
      .map(([cls]) => cls),
    ...(additional || []).filter(Boolean),
  ].join(' ');
};
