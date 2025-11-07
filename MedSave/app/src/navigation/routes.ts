// src/navigation/routes.ts
import type { Href } from 'expo-router';

export const ROUTES = {
  LOGIN: '/Login/login',
  MENU: '/Menu/menu',
  PROFILE: '/Profile/profile',
  MED_LIST: '/MedicationList/medicationList',
  MED_DETAIL: '/MedicationDetail/medicationDetail',
  ADD_MED: '/AddMedicines/addMedicines',
  ADD_USER: '/AddUser/addUser',
} as const satisfies Record<string, Href>;
