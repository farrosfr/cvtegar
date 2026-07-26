/**
 * Education and courses configuration
 * Educational background and certifications for Tegar Sukma Abiyasa
 */

import type { Education, Course } from '../types';

export const education: readonly Education[] = [
  {
    degree: 'Diploma 3 (D3) in Electrical and Electronics Engineering',
    major: 'Electrical & Automation Engineering',
    institution: 'Politeknik Elektronika Negeri Surabaya (PENS)',
    location: 'Surabaya, East Java, Indonesia',
    year: '2018 - 2021',
    description: 'Graduated with GPA 3.42 / 4.00. Focus areas: Industrial Automation, Electrical Circuit Design, PLC Programming, Control Systems, Microcontrollers, and Technical CAD Schematics.',
  },
  {
    degree: 'High School Diploma (IPA)',
    institution: 'SMA Negeri 2 Ngawi',
    location: 'Ngawi, East Java, Indonesia',
    year: '2015 - 2018',
    description: 'Natural Sciences Stream.',
  },
  {
    degree: 'Junior High School Diploma',
    institution: 'SMPN 1 Karangjati',
    location: 'Karangjati, Ngawi, Indonesia',
    year: '2012 - 2015',
  },
] as const;

export const courses: readonly Course[] = [
  {
    title: 'PLC Automation Technician Certification',
    description: 'National Professional Certification issued by BNSP (Badan Nasional Sertifikasi Profesi). Credential ID: 14138336 (Valid July 2025 - July 2028). Covers Industrial PLC programming, sensor integration, and automation troubleshooting.',
    institution: 'BNSP (Badan Nasional Sertifikasi Profesi)',
    location: 'Indonesia',
    year: '2025 - 2028',
  },
  {
    title: '3D Design with Fusion 360 Workshop Series',
    description: 'Speaker and lead instructor for online workshops on 3D parametric modeling, rendering, and assembly design using Autodesk Fusion 360.',
    institution: 'PMII Rayon PENS & Today CAD Pro',
    location: 'Surabaya, Indonesia',
    year: '2020 - 2021',
  },
] as const;
