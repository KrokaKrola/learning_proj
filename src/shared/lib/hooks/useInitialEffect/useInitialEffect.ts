import { type DependencyList, type EffectCallback, useEffect } from 'react';

export const useInitialEffect = (
  effect: EffectCallback,
  deps?: DependencyList
) => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      effect();
    }
    // eslint-disable-next-line
  }, deps || []);
};
