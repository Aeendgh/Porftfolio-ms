
import type React from 'react';

export interface Skill {
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Education {
  degree: string;
  university: string;
  year: number;
}

export interface Certificate {
  name: string;
  hours: number;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  liveUrl?: string;
  codeUrl?: string;
}

export interface Hobby {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}
