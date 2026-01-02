
export interface SoundFrequency {
  id: string;
  name: string;
  frequency: number;
  description: string;
  element: 'Madeira' | 'Fogo' | 'Terra' | 'Metal' | 'Água' | 'Geral';
  benefits: string[];
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface SoundSessionState {
  isPlaying: boolean;
  activeFrequency: SoundFrequency | null;
  volume: number;
}
