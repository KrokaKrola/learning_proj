import { lazy } from 'react';

const ArticlesPageAsync = lazy(async () => await import('./ArticlesPage'));

export { ArticlesPageAsync };
