import * as core from '@actions/core';
import { getInputs } from './inputs';
import { replicate } from './replicate';

core.setOutput('tags', replicate(getInputs()));
