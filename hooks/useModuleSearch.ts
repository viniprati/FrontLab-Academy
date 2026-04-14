'use client';

import { useMemo, useState } from 'react';

import { allModules } from '@/data/tracks';
import { normalize } from '@/lib/utils';

export const useModuleSearch = () => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const normalized = normalize(query.trim());
    if (!normalized) return [];

    return allModules
      .filter((module) => {
        const text = normalize(`${module.title} ${module.description} ${module.trackTitle}`);
        return text.includes(normalized);
      })
      .slice(0, 8);
  }, [query]);

  return { query, setQuery, results };
};
