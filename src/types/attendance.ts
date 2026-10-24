export interface Developer {
  name: string;
  role: string;
  department: string;
  bio: string;
  avatar: string;
  website?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  email: string;
  stack: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
