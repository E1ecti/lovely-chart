import { GUTTER } from './constants';

export function xScaleLevelToStep(scaleLevel) {
  return Math.pow(2, scaleLevel);
}

export function xStepToScaleLevel(step) {
  return Math.ceil(Math.log2(step));
}

export function yScaleLevelToStep(scaleLevel) {
  return scaleLevel <= 13
    ? Math.pow(scaleLevel, 2) * 2
    : ((scaleLevel % 10) || 1) * Math.pow(10, Math.floor(scaleLevel / 10) + 1);
}

export function yStepToScaleLevel(step) {
  return Math.ceil(
    step <= 288
      ? Math.sqrt(step / 2)
      : 10 * Math.floor(Math.log10(step) - 1) + step / Math.pow(10, Math.floor(Math.log10(step))),
  );
}

export function applyYEdgeOpacity(opacity, xPx, plotWidth) {
  const edgeOffset = Math.min(xPx + GUTTER, plotWidth - xPx);
  if (edgeOffset <= GUTTER * 4) {
    opacity = Math.min(1, opacity, edgeOffset / (GUTTER * 4));
  }
  return opacity;
}

export function applyXEdgeOpacity(opacity, yPx) {
  return (yPx - GUTTER <= GUTTER * 2)
    ? Math.min(1, opacity, (yPx - GUTTER) / (GUTTER * 2))
    : opacity;
}

export function getPieTextSize(percent, radius) {
  return (radius + percent * 150) / 8;
}

export function getPieTextShift(percent, radius) {
  return percent >= 0.99 ? 0 : Math.min(1 - Math.log(percent * 30) / 5, 4 / 5) * radius;
}

export function getDatasetMinimapVisibility(state, key) {
  return Math.max(0, Math.min(state[`opacity#${key}`] * 2 - 1, 1))
}
