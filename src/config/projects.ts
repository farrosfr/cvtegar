/**
 * Projects configuration
 * Import project JSON files for Tegar Sukma Abiyasa
 */

import type { Project } from '../types';

import storageWarehouse3d from './projects/storage-warehouse-3d.json';
import officeMachineLayout from './projects/office-machine-layout.json';
import bnspPlcAutomation from './projects/bnsp-plc-automation.json';
import cncHardwareDesign from './projects/cnc-hardware-design.json';

export const projects: readonly Project[] = [
  storageWarehouse3d,
  officeMachineLayout,
  bnspPlcAutomation,
  cncHardwareDesign,
] as Project[];
