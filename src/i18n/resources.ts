import { Lang } from './constants';
import { english } from './copies/en';
import { ukraine } from './copies/uk';

export const resources = {
  [Lang.Ukraine]: {
    translation: ukraine,
  },
  [Lang.English]: {
    translation: english,
  },
};
