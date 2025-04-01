import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getUri=(path:string)=>{
  return process.env.GITHUB_PAGES ? `/website${path}` : path;
}

interface Params {
  slug: string;
}

export interface PageParams {
  params: Params;
}