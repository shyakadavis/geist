import { context } from "$lib/utils";

export type CloseFunc = () => void; 

export const closeContext = context<CloseFunc | undefined>('gui-command-menu');