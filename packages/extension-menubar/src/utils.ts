import { isWindows } from '@norlandsoft/tide-common';

export const command = isWindows() ? 'Ctrl' : '⌘';

export const option = isWindows() ? 'Alt' : 'Option';
