/**
 * Extracurricular activities configuration
 */

import type { ExtraCurricularRole, ExtraCurricularActivity } from '../types';

export const extraCurricularRoles: readonly ExtraCurricularRole[] = [
  {
    role: 'Head of Media and Propaganda Department',
    institution: 'PMII Komisariat Sepuluh Nopember',
    location: 'Surabaya, Indonesia',
    year: '2021 - Present',
  },
  {
    role: 'Active Member',
    institution: 'Automation Club PENS',
    location: 'Politeknik Elektronika Negeri Surabaya',
    year: '2019 - 2021',
  },
] as const;

export const extraCurricularActivities: readonly ExtraCurricularActivity[] = [
  {
    title: 'Media & Communications Leadership',
    description: 'Directed digital graphic design, social media campaigns, and public relations for PMII organization.',
    institution: 'PMII Komisariat Sepuluh Nopember',
    location: 'Surabaya',
    year: '2021 - 2023',
  },
  {
    title: 'Industrial Automation Workshops & PLC Mentorship',
    description: 'Participated in hands-on workshops on PLC programming (Siemens, Omron), SCADA systems, and industrial sensor wiring.',
    institution: 'Automation Club PENS',
    location: 'Surabaya',
    year: '2019 - 2021',
  },
] as const;
