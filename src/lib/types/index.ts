export type User = {
	username: string;
	name: string;
	email: string;
	level: string;
};

export type Variant = 'alert-error' | 'alert-warning' | 'alert-success' | 'alert-info';

export type Toast = {
	id: string;
	title: string;
	message: string;
	variant: Variant;
};
