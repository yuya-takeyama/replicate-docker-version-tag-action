import type { Inputs } from './inputs';

export const replicate = (inputs: Inputs): string => {
  const image = inputs.image ? `${inputs.image}:` : '';

  if (isSemver(inputs.tag)) {
    const result: string[] = [];
    const elems = inputs.tag.split('.');
    const elemsLen = elems.length;

    for (let i = 1; i <= elemsLen; i++) {
      result.push(image + elems.join('.'));
      elems.length = elems.length - 1;
    }

    return result.join(inputs.separator);
  }

  return image + inputs.tag;
};

const isSemver = (tag: string): boolean => {
  return /^v?\d+(\.\d+)*$/.test(tag);
};
