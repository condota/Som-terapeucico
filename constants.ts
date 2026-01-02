
import { SoundFrequency } from './types';

export const THERAPEUTIC_SOUNDS: SoundFrequency[] = [
  // --- ESCALA SOLFEGGIO (ESPIRITUAL/EMOCIONAL) ---
  {
    id: '174hz',
    name: '174 Hz - Alívio e Segurança',
    frequency: 174,
    description: 'Anestésico natural. Reduz dores físicas e proporciona sensação de segurança aos órgãos.',
    element: 'Terra',
    benefits: ['Alívio de dor', 'Segurança', 'Organização'],
    color: 'bg-amber-100 border-amber-300 text-amber-900'
  },
  {
    id: '285hz',
    name: '285 Hz - Regeneração Tecidual',
    frequency: 285,
    description: 'Atua no campo energético para restaurar tecidos e órgãos ao seu estado original.',
    element: 'Metal',
    benefits: ['Cura celular', 'Vitalidade', 'Reestruturação'],
    color: 'bg-zinc-100 border-zinc-300 text-zinc-900'
  },
  {
    id: '396hz',
    name: '396 Hz - Liberação de Medo',
    frequency: 396,
    description: 'Dissolve bloqueios de culpa e medo. Ajuda a transformar tristeza em alegria.',
    element: 'Água',
    benefits: ['Fim da culpa', 'Realização', 'Enraizamento'],
    color: 'bg-blue-100 border-blue-300 text-blue-900'
  },
  {
    id: '417hz',
    name: '417 Hz - Limpeza de Traumas',
    frequency: 417,
    description: 'Limpa experiências negativas do passado e facilita mudanças produtivas.',
    element: 'Madeira',
    benefits: ['Mudança', 'Transformação', 'Limpeza'],
    color: 'bg-emerald-100 border-emerald-300 text-emerald-900'
  },
  {
    id: '528hz',
    name: '528 Hz - Amor e Milagres',
    frequency: 528,
    description: 'A "Frequência dos Milagres". Usada para reparação do DNA e trazer paz ao coração.',
    element: 'Fogo',
    benefits: ['Cura de DNA', 'Paz', 'Energia vital'],
    color: 'bg-rose-100 border-rose-300 text-rose-900'
  },
  {
    id: '639hz',
    name: '639 Hz - Conexão e União',
    frequency: 639,
    description: 'Melhora a comunicação, compreensão, tolerância e o amor nos relacionamentos.',
    element: 'Fogo',
    benefits: ['Harmonia', 'Relacionamentos', 'Família'],
    color: 'bg-pink-100 border-pink-300 text-pink-900'
  },
  {
    id: '741hz',
    name: '741 Hz - Expressão Pura',
    frequency: 741,
    description: 'Limpa as células de toxinas e promove a expressão pessoal clara e verdadeira.',
    element: 'Metal',
    benefits: ['Desintoxicação', 'Autoexpressão', 'Soluções'],
    color: 'bg-teal-100 border-teal-300 text-teal-900'
  },
  {
    id: '852hz',
    name: '852 Hz - Intuição Superior',
    frequency: 852,
    description: 'Desperta a intuição e ajuda a ver a verdade além das ilusões materiais.',
    element: 'Madeira',
    benefits: ['Visão interior', 'Espiritualidade', 'Clareza'],
    color: 'bg-indigo-100 border-indigo-300 text-indigo-900'
  },
  {
    id: '963hz',
    name: '963 Hz - Conexão Divina',
    frequency: 963,
    description: 'Ativa a glândula pineal e conecta com a luz divina e a unidade do ser.',
    element: 'Água',
    benefits: ['Unidade', 'Luz', 'Espírito'],
    color: 'bg-purple-100 border-purple-300 text-purple-900'
  },

  // --- FREQUÊNCIAS UNIVERSAIS E BIOLÓGICAS ---
  {
    id: '40hz',
    name: '40 Hz - Foco e Cognição',
    frequency: 40,
    description: 'Onda Gamma. Associada à clareza mental, foco profundo e processamento de informações.',
    element: 'Madeira',
    benefits: ['Foco', 'Memória', 'Antioxidante'],
    color: 'bg-cyan-50 border-cyan-200 text-cyan-900'
  },
  {
    id: '63hz',
    name: '63 Hz - Expansão Astral',
    frequency: 63,
    description: 'Frequência de ressonância para expansão da consciência e relaxamento muscular.',
    element: 'Madeira',
    benefits: ['Projeção', 'Relaxamento', 'Músculos'],
    color: 'bg-violet-50 border-violet-200 text-violet-900'
  },
  {
    id: '111hz',
    name: '111 Hz - Rejuvenescimento',
    frequency: 111,
    description: 'Frequência sagrada que estimula endorfinas e regeneração celular.',
    element: 'Geral',
    benefits: ['Endorfinas', 'Células', 'Bem-estar'],
    color: 'bg-orange-50 border-orange-200 text-orange-900'
  },
  {
    id: '128hz',
    name: '128 Hz - Equilíbrio da Terra',
    frequency: 128,
    description: 'Frequência de "Mestre" para aterramento físico e redução de espasmos.',
    element: 'Terra',
    benefits: ['Circulação', 'Aterramento', 'Calma'],
    color: 'bg-lime-50 border-lime-200 text-lime-900'
  },
  {
    id: '136hz',
    name: '136.1 Hz - Frequência OM',
    frequency: 136.1,
    description: 'Ano terrestre. Abre o chakra do coração e promove paz absoluta.',
    element: 'Terra',
    benefits: ['Paz profunda', 'Meditação', 'Coração'],
    color: 'bg-emerald-50 border-emerald-200 text-emerald-900'
  },
  {
    id: '432hz',
    name: '432 Hz - Sintonia Natural',
    frequency: 432,
    description: 'Ressonância harmônica com a natureza e o universo. Reduz batimentos cardíacos.',
    element: 'Madeira',
    benefits: ['Calma', 'Natureza', 'Harmonia'],
    color: 'bg-sky-50 border-sky-200 text-sky-900'
  },

  // --- SUB-HARMÔNICAS (RESSONÂNCIA FÍSICA) ---
  {
    id: '17.4hz',
    name: '17.4 Hz - Alívio Profundo',
    frequency: 17.4,
    description: 'Sub-harmônica de 174Hz. Focada no alívio de dores crônicas profundas no corpo.',
    element: 'Terra',
    benefits: ['Dor crônica', 'Densidade', 'Fisicalidade'],
    color: 'bg-slate-100 border-slate-300 text-slate-900'
  },
  {
    id: '28.5hz',
    name: '28.5 Hz - Recuperação Orgânica',
    frequency: 28.5,
    description: 'Sub-harmônica de 285Hz. Auxilia na recuperação pós-cirúrgica e lesões físicas.',
    element: 'Metal',
    benefits: ['Pós-operatório', 'Órgãos', 'Reparo'],
    color: 'bg-zinc-200 border-zinc-400 text-zinc-900'
  },
  {
    id: '39.6hz',
    name: '39.6 Hz - Enraizamento',
    frequency: 39.6,
    description: 'Sub-harmônica de 396Hz. Fortalece o instinto de sobrevivência e conexão com a terra.',
    element: 'Água',
    benefits: ['Base', 'Sobrevivência', 'Segurança'],
    color: 'bg-blue-200 border-blue-400 text-blue-900'
  },
  {
    id: '52.8hz',
    name: '52.8 Hz - Harmonização Fetal',
    frequency: 52.8,
    description: 'Sub-harmônica de 528Hz. Ressonância suave para equilíbrio emocional básico e vitalidade.',
    element: 'Fogo',
    benefits: ['Vitalidade', 'Emoções', 'Calma'],
    color: 'bg-rose-200 border-rose-400 text-rose-900'
  }
];
