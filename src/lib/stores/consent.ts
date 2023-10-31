import { writable } from 'svelte/store';

const consent = writable(false);
const verify = writable(false);

export { consent, verify };
