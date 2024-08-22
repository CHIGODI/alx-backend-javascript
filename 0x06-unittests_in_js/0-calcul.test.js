#!/usr/bin/node

import calculateNumber from './0-calcul.js';
import assert from 'assert'

describe('calculateNumber', function () {
    it('returns sum as an integer', function () {
        assert.strictEqual(calculateNumber(2.2, 4.4), 6);
    });
});
