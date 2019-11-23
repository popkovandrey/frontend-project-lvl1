#!/usr/bin/env node

import gameEngine from '../engine';
import game from '../games/odd-even';

gameEngine(() => game, 'Answer "yes" if the number is even, otherwise answer "no".');
