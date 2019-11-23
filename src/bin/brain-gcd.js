#!/usr/bin/env node

import gameEngine from '../engine';
import game from '../games/gcd';

gameEngine(() => game, 'Find the greatest common divisor of given numbers.');
