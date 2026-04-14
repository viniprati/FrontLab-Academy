import { notFound } from 'next/navigation';

import { StudyPageClient } from '@/components/course/study-page-client';
import { tracks } from '@/data/tracks';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return tracks.map((track) => ({ slug: track.slug }));
}

export default async function TrackStudyPage({ params }: Props) {
  const { slug } = await params;
  const track = tracks.find((item) => item.slug === slug);

  if (!track) notFound();

  return <StudyPageClient track={track} />;
}
