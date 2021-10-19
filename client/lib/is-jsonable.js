import { isPlainObject } from './is-plain-object.js';

export const isJSONable = (thing) =>
  thing !== undefined &&
  (thing instanceof Date ||
    thing === null ||
    typeof thing === 'boolean' ||
    typeof thing === 'number' ||
    typeof thing === 'string' ||
    (Array.isArray(thing) && !thing.some((entry) => !isJSONable(entry))) ||
    (isPlainObject(thing) &&
      !Object.entries(thing).some((entry) => !isJSONable(entry))));
