import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2025-29',
    title: 'TIET',
    subtitle: 'Computer Engineering',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2026',
    title: 'WorldQuant',
    subtitle: '',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2026',
    title: 'Humanoid/Robotics Stealth Startup',
    subtitle: 'Lead RL engineer',
    position: 'left',
  },
]