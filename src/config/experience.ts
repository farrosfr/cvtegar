/**
 * Professional experience configuration
 * Work experience for Tegar Sukma Abiyasa
 */

import type { Experience } from '../types';

export const experience: readonly Experience[] = [
  {
    title: 'Product Development Supervisor',
    company: 'PT Bersama Untuk Membangun Indonesia (BUMI)',
    location: 'Ngawi Regency, East Java, Indonesia',
    period: 'June 2026 - July 2026',
    description: 'Supervised product development initiatives, overseeing technical drawings, material selection, and 3D CAD modeling for manufacturing processes.',
    technologies: ['AutoCAD', 'CAD', 'Product Development', '3D Design'],
  },
  {
    title: 'Design Engineer',
    company: 'PT Bersama Untuk Membangun Indonesia (BUMI)',
    location: 'Ngawi Regency, East Java, Indonesia',
    period: 'January 2026 - July 2026',
    description: 'Developed comprehensive 2D and 3D CAD models for structural and mechanical components, ensuring precision engineering and adherence to technical specifications.',
    technologies: ['Computer-Aided Design (CAD)', '3D CAD', 'Autodesk Fusion 360', 'Technical Drawing'],
  },
  {
    title: 'Production Planning & Inventory Control (PPIC)',
    company: 'PT Bersama Untuk Membangun Indonesia (BUMI)',
    location: 'Ngawi Regency, East Java, Indonesia',
    period: 'December 2025 - January 2026',
    description: 'Managed production tracking schedules, bill of materials (BOM), inventory control, and cost estimation for ongoing industrial manufacturing projects.',
    technologies: ['Production Tracking', 'PPIC', 'Cost Estimation', 'Material Planning'],
  },
  {
    title: 'Electrical Engineer',
    company: 'Lintech Duta Pratama, PT',
    location: 'Sumbawa Barat, West Nusa Tenggara, Indonesia',
    period: 'June 2025 - November 2025',
    description: 'Designed and audited electrical wiring diagrams, control panels, and power distribution systems for heavy industrial engineering and mining facilities.',
    technologies: ['Electrical Engineering', 'AutoCAD', 'Control Panels', 'Automation Engineering'],
  },
  {
    title: 'Drafter',
    company: 'Kiat Ananda Group',
    location: 'Cileungsi, West Java, Indonesia',
    period: 'September 2024 - June 2025',
    description: 'Produced technical drawings, architectural layouts, and facility schematics. Collaborated with engineering teams to optimize workspace layouts and workflow diagrams.',
    technologies: ['Technical Drawing', 'AutoCAD Architecture', 'Figma', 'Layout Design'],
  },
  {
    title: 'Drafter & 3D Visualization Engineer',
    company: 'Cimory Group (PT. Cisarua Mountain Dairy Tbk)',
    location: 'Bogor, West Java, Indonesia',
    period: 'September 2022 - August 2024',
    description: 'Created comprehensive project drawing portfolios including office layout designs, Piping & Instrumentation Diagrams (P&ID), electrical drawings, and machine layouts. Developed 3D visualization animations for new storage warehouse facilities using Lumion and AutoCAD.',
    technologies: ['Lumion', 'AutoCAD', 'P&ID', '3D Visualization', 'Machine Layout', 'Office Layout'],
  },
  {
    title: 'Electrical Engineer',
    company: 'PT. Aneka',
    location: 'Indonesia',
    period: 'May 2022 - August 2022',
    description: 'Assisted in electrical system schematics design, circuit troubleshooting, and electrical load calculations for manufacturing plants.',
    technologies: ['Electrical Engineering', 'Circuit Design', 'Technical Schematics'],
  },
  {
    title: 'Operator and Technician Trainee',
    company: 'PT. Sariguna Primatirta, Tbk (TANOBEL FOOD)',
    location: 'Kediri, East Java, Indonesia',
    period: 'March 2022 - April 2022',
    description: 'Trained on high-speed automated bottling and food packaging lines. Conducted preventative maintenance and electrical troubleshooting.',
    technologies: ['Industrial Automation', 'Preventative Maintenance', 'Equipment Operation'],
  },
  {
    title: 'Product Design & CNC Intern',
    company: 'Wooden Project',
    location: 'Ngawi, East Java, Indonesia',
    period: 'March 2021 - April 2021',
    description: 'Designed customized wooden products using 3D CAD software and operated computer numerical control (CNC) machinery for automated fabrication.',
    technologies: ['3D CAD', 'CNC Machining', 'Product Design', 'G-Code'],
  },
  {
    title: 'Startup Development & UI/UX Intern',
    company: 'PENS Sky Venture',
    location: 'Surabaya, East Java, Indonesia',
    period: 'August 2020 - November 2020',
    description: 'Participated in startup development program covering UI/UX Design, Design Thinking methodology, business pitching, and Business Model Canvas.',
    technologies: ['UI/UX Design', 'Design Thinking', 'Business Pitching', 'Figma'],
  },
] as const;
