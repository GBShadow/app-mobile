import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const baseURL = 'https://homolog.txaicon.txaidesenvolvimento.com.br/api/v2';
