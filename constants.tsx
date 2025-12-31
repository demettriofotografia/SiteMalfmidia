
import { VideoWork, FAQItem, GalleryImage } from './types';

export const VIDEO_WORKS: VideoWork[] = [
  {
    id: '1',
    title: 'Projeto 01',
    category: 'Publicidade',
    videoUrl: './assets/videos/trabalho1.mp4',
    thumbnail: './assets/images/thumb1.jpg',
  },
  {
    id: '2',
    title: 'Projeto 02',
    category: 'Moda',
    videoUrl: './assets/videos/trabalho2.mp4',
    thumbnail: './assets/images/thumb2.jpg',
  },
  {
    id: '3',
    title: 'Projeto 03',
    category: 'Documentário',
    videoUrl: './assets/videos/trabalho3.mp4',
    thumbnail: './assets/images/thumb3.jpg',
  },
  {
    id: '4',
    title: 'Projeto 04',
    category: 'Eventos',
    videoUrl: './assets/videos/trabalho4.mp4',
    thumbnail: './assets/images/thumb4.jpg',
  }
];

export interface GalleryItem extends GalleryImage {
  videoUrl?: string;
}

export const BEHIND_THE_SCENES: GalleryItem[] = [
  { 
    id: 'b1', 
    url: './assets/images/backstage1.jpg', 
    alt: 'Produção MALF MIDIA 01',
    videoUrl: './assets/videos/backstage1.mp4'
  },
  { 
    id: 'b2', 
    url: './assets/images/backstage2.jpg', 
    alt: 'Produção MALF MIDIA 02',
    videoUrl: './assets/videos/backstage2.mp4'
  },
  { 
    id: 'b3', 
    url: './assets/images/backstage3.jpg', 
    alt: 'Produção MALF MIDIA 03',
    videoUrl: './assets/videos/backstage3.mp4'
  },
  { 
    id: 'b4', 
    url: './assets/images/backstage4.jpg', 
    alt: 'Produção MALF MIDIA 04',
    videoUrl: './assets/videos/backstage4.mp4'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Qual o tempo médio de entrega de um projeto?',
    answer: 'Depende da complexidade, mas geralmente entre 7 a 20 dias úteis para vídeos comerciais.'
  },
  {
    question: 'Vocês atendem em todo o Brasil?',
    answer: 'Sim! Nossa sede é fixa, mas nossa equipe é móvel e preparada para produções em qualquer localidade.'
  },
  {
    question: 'Quais equipamentos vocês utilizam?',
    answer: 'Trabalhamos com o que há de mais moderno no cinema digital, incluindo câmeras 4K/6K, drones homologados e sistemas de iluminação profissional.'
  },
  {
    question: 'Oferecem serviços de edição para materiais já gravados?',
    answer: 'Com certeza. Temos uma ilha de pós-produção dedicada para color grading, sound design e montagem.'
  }
];
