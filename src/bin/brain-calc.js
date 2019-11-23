#!/usr/bin/env node

import gameEngine from '../engine';
import game from '../games/calc';

gameEngine(() => game, 'What is the result of the expression?');
