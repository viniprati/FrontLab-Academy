'use client';

import { useEffect, useMemo, useState } from 'react';

import { storageKeys } from '@/lib/storage';
import { ProgressState } from '@/types/course';

const initialProgress: ProgressState = {
  completedModuleIds: [],
  favoriteTrackSlugs: [],
  recentModuleIds: [],
  streak: 1
};

export const useLearningProgress = () => {
  const [progress, setProgress] = useState<ProgressState>(initialProgress);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKeys.progress);
      if (raw) {
        const parsed = JSON.parse(raw) as ProgressState;
        setProgress({ ...initialProgress, ...parsed });
      }
    } catch {
      setProgress(initialProgress);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(storageKeys.progress, JSON.stringify(progress));
  }, [progress, ready]);

  const api = useMemo(
    () => ({
      progress,
      ready,
      toggleModule: (moduleId: string) => {
        setProgress((prev) => {
          const exists = prev.completedModuleIds.includes(moduleId);
          const completedModuleIds = exists
            ? prev.completedModuleIds.filter((id) => id !== moduleId)
            : [...prev.completedModuleIds, moduleId];

          return { ...prev, completedModuleIds };
        });
      },
      toggleFavoriteTrack: (slug: string) => {
        setProgress((prev) => {
          const exists = prev.favoriteTrackSlugs.includes(slug);
          const favoriteTrackSlugs = exists
            ? prev.favoriteTrackSlugs.filter((id) => id !== slug)
            : [...prev.favoriteTrackSlugs, slug];
          return { ...prev, favoriteTrackSlugs };
        });
      },
      pushRecentModule: (moduleId: string) => {
        setProgress((prev) => ({
          ...prev,
          recentModuleIds: [moduleId, ...prev.recentModuleIds.filter((id) => id !== moduleId)].slice(0, 8)
        }));
      }
    }),
    [progress, ready]
  );

  return api;
};
