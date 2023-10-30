import { writable } from 'svelte/store';

export enum Section {
	None,
	Hero,
	Info,
	Qualification,
	Reward,
	Timeline,
	Scope,
	Contact
}

export const currentSection = writable(Section.None);
