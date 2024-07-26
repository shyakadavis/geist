import { context } from '$lib/utils';

export type CloseFunc = () => void;

export const openContext = context<CloseFunc | undefined>('gui-command-menu');
