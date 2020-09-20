import * as core from '@actions/core';

export interface Inputs {
  tag: string;
  image: string | undefined;
  separator: string;
}

export const getInputs = (): Inputs => {
  const tag = core.getInput('tag', { required: true });
  const imageInput = core.getInput('image');
  const image =
    typeof imageInput === 'string' && imageInput.length > 0
      ? imageInput
      : undefined;
  const separator = core.getInput('separator');

  return {
    tag,
    image,
    separator,
  };
};
