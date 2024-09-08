// src/types/AstroData.ts
export interface Astro {
    craft: string;
    name: string;
  }
  
  export interface AstroApiResponse {
    people: Astro[];
    number: number;
    message: string;
  }
  