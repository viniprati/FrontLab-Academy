export type Difficulty = 'Iniciante' | 'Intermediario' | 'Avancado';

export type ModuleType = 'lesson' | 'exercise' | 'quiz' | 'reference';

export type ModuleContentBlock = {
  id: string;
  title: string;
  simplifiedExplanation: string;
  practicalExample: string;
  commonMistakes: string[];
  quickSummary: string;
  nextStep: string;
};

export type CourseModule = {
  id: string;
  title: string;
  description: string;
  conceptSummary: string;
  shortExample: string;
  importantTip: string;
  officialReference: string;
  type: ModuleType;
  durationMinutes: number;
  content: ModuleContentBlock;
};

export type TechTrack = {
  slug: string;
  title: string;
  tagline: string;
  category: 'Linguagem' | 'Framework' | 'Ferramenta' | 'Fundamentos';
  difficulty: Difficulty;
  prerequisites: string[];
  modulesCount: number;
  estimatedHours: number;
  icon: string;
  coverGradient: string;
  officialDocs: string;
  intro: string;
  roadmap: string[];
  modules: CourseModule[];
};

export type ProgressState = {
  completedModuleIds: string[];
  favoriteTrackSlugs: string[];
  recentModuleIds: string[];
  streak: number;
};

export type PlaygroundSnippet = {
  id: string;
  label: string;
  language: 'html' | 'css' | 'javascript' | 'typescript';
  code: string;
  description: string;
};
