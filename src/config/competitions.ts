/**
 * Competitions, Honors and Achievements configuration
 */

import type { Competition } from '../types';

export const competitions: readonly Competition[] = [
  {
    title: 'PLC Automation Technician Certification (BNSP)',
    description: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    achievement: 'Certified PLC Automation Technician (Credential ID: 14138336)',
    year: '2025',
  },
  {
    title: '1st Rank of Class at 3rd Semester',
    description: 'Politeknik Elektronika Negeri Surabaya (PENS)',
    achievement: 'Achieved Top Rank 1 academic performance in 3rd Semester D3 Electrical Engineering',
    year: '2020',
  },
  {
    title: 'Finalist in National Level PLC Competition',
    description: 'National Industrial Automation Competition',
    achievement: 'Finalist representing PENS in programmable logic controllers and industrial automation design',
    year: '2020',
  },
  {
    title: 'Student Creativity Event (PKM-KC) Funding Awardee',
    description: 'Ministry of Education, Culture, Research, and Technology',
    achievement: 'Awarded national research funding for innovative electrical engineering project (Karsa Cipta)',
    year: '2020',
  },
  {
    title: 'Speaker - 3D Design with Fusion 360 Workshop Batch 1',
    description: 'PMII Rayon PENS & Today CAD Pro',
    achievement: 'Invited Expert Speaker teaching 3D CAD modeling techniques',
    year: '2020',
  },
  {
    title: 'Speaker - 3D Design with Fusion 360 Workshop Batch 2',
    description: 'PMII Rayon PENS & Today CAD Pro',
    achievement: 'Invited Expert Speaker conducting advanced Fusion 360 assembly & rendering sessions',
    year: '2021',
  },
] as const;
