#!/usr/bin/env node

import gameEngine from '../engine';
import game from '../games/progression';

gameEngine(() => game, 'What number is missing in the progression?');
