import { baseFontSize, fontMultipliers, spacings } from './settings';

export const rem = px => `${px / baseFontSize}rem`;
export const fontSize = key => rem(baseFontSize * fontMultipliers[key]);
export const spacing = key => rem(spacings[key]);
