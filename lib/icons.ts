import {
  Atom,
  Braces,
  FileCode2,
  GitBranch,
  Globe2,
  Layers,
  Palette,
  Paintbrush,
  Rocket,
  ShieldCheck,
  Workflow
} from 'lucide-react';
import { ComponentType } from 'react';

type IconProps = { className?: string };

const map: Record<string, ComponentType<IconProps>> = {
  FileCode2,
  Palette,
  Braces,
  ShieldCheck,
  Atom,
  Rocket,
  Paintbrush,
  Layers,
  Workflow,
  GitBranch,
  Globe2
};

export const getIconByName = (name: string) => map[name] ?? FileCode2;
