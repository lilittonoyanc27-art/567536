import test from 'node:test';
import assert from 'node:assert/strict';
import {
  timecodeToSeconds,
  secondsToTimecode,
  findActiveSubtitleIndex,
  calculatePercentage,
  checkOrderSequence,
  getPerformanceFeedback,
} from './logic.ts';

test('timecodeToSeconds converts mm:ss correctly', () => {
  assert.equal(timecodeToSeconds('00:00'), 0);
  assert.equal(timecodeToSeconds('00:15'), 15);
  assert.equal(timecodeToSeconds('01:27'), 87);
  assert.equal(timecodeToSeconds('02:05'), 125);
});

test('secondsToTimecode formats seconds to mm:ss', () => {
  assert.equal(secondsToTimecode(0), '00:00');
  assert.equal(secondsToTimecode(15), '00:15');
  assert.equal(secondsToTimecode(87), '01:27');
  assert.equal(secondsToTimecode(125), '02:05');
});

test('calculatePercentage calculates correctly', () => {
  assert.equal(calculatePercentage(15, 15), 100);
  assert.equal(calculatePercentage(10, 20), 50);
  assert.equal(calculatePercentage(0, 10), 0);
  assert.equal(calculatePercentage(17, 20), 85);
});

test('findActiveSubtitleIndex locates subtitle within bounds', () => {
  const sampleSubs = [
    { seconds: 0, endSeconds: 5 },
    { seconds: 5, endSeconds: 9 },
    { seconds: 9, endSeconds: 15 },
  ];
  assert.equal(findActiveSubtitleIndex(2, sampleSubs), 0);
  assert.equal(findActiveSubtitleIndex(6, sampleSubs), 1);
  assert.equal(findActiveSubtitleIndex(12, sampleSubs), 2);
});

test('checkOrderSequence verifies correct order', () => {
  assert.equal(checkOrderSequence([1, 2, 3, 4], [1, 2, 3, 4]), true);
  assert.equal(checkOrderSequence([1, 3, 2, 4], [1, 2, 3, 4]), false);
});

test('getPerformanceFeedback assigns correct level', () => {
  assert.equal(getPerformanceFeedback(90).level, 'excelente');
  assert.equal(getPerformanceFeedback(70).level, 'bueno');
  assert.equal(getPerformanceFeedback(40).level, 'regular');
});
