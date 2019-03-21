import { DPR } from './constants';

export function setupCanvas({ width, height }) {
  const canvas = document.createElement('canvas');

  canvas.width = width * DPR;
  canvas.height = height * DPR;
  canvas.style.width = '100%';
  canvas.style.height = `${height}px`;

  const context = canvas.getContext('2d');
  context.scale(DPR, DPR);

  return { canvas, context };
}