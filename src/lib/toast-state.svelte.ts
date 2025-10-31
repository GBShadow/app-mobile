import { getContext, onDestroy, setContext } from 'svelte';
import type { Toast } from './types';
import { SvelteMap } from 'svelte/reactivity';

export class ToastState {
	toasts = $state<Toast[]>([]);
	toastToTimeoutMap = new SvelteMap<string, NodeJS.Timeout>();
	constructor() {
		onDestroy(() => {
			for (const timeout of this.toastToTimeoutMap.values()) {
				clearTimeout(timeout);
			}
			this.toastToTimeoutMap.clear();
		});
	}

	add({ title, message, variant, durationMs = 5000 }: Omit<Toast, 'id'> & { durationMs?: number }) {
		const id = crypto.randomUUID();
		this.toasts.push({
			id,
			title,
			message,
			variant
		});

		this.toastToTimeoutMap.set(
			id,
			setTimeout(() => {
				this.remove(id);
			}, durationMs)
		);
	}

	remove(id: string) {
		const timeout = this.toastToTimeoutMap.get(id);
		if (timeout) {
			clearTimeout(timeout);
			this.toastToTimeoutMap.delete(id);
		}
		this.toasts = this.toasts.filter((toast) => toast.id !== id);
	}
}

const TOAST_KEY = Symbol('TOAST');

export function setToastState() {
	return setContext(TOAST_KEY, new ToastState());
}

export function getToastState() {
	return getContext<ReturnType<typeof setToastState>>(TOAST_KEY);
}
