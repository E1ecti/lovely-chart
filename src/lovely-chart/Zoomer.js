import { analyzeData } from './data';
import { getFullLabelDate } from './format';
import { ZOOM_RANGE_DELTA, ZOOM_RANGE_MIDDLE, ZOOM_TIMEOUT } from './constants';
import { createColors } from './skin';

export function createZoomer(data, overviewData, colors, stateManager, container, header, minimap, tooltip, tools) {
  let _isZoomed = false;
  let _stateBeforeZoomIn;
  let _stateBeforeZoomOut;

  function zoomIn(state, labelIndex) {
    if (_isZoomed) {
      return;
    }

    const label = data.xLabels[labelIndex];

    _stateBeforeZoomIn = state;
    tooltip.toggleLoading(true);
    tooltip.toggleIsZoomed(true);
    if (data.shouldZoomToPie) {
      container.classList.add('lovely-chart--state-zoomed-in');
      container.classList.add('lovely-chart--state-animating');
    }

    const { value: date } = label;
    const dataPromise = data.shouldZoomToPie ? Promise.resolve(_generatePieData(labelIndex)) : data.onZoom(date);
    dataPromise.then((newData) => _replaceData(newData, labelIndex, label));
  }

  function zoomOut(state) {
    if (!_isZoomed) {
      return;
    }

    _stateBeforeZoomOut = state;
    tooltip.toggleLoading(true);
    tooltip.toggleIsZoomed(false);
    if (data.shouldZoomToPie) {
      container.classList.remove('lovely-chart--state-zoomed-in');
      container.classList.add('lovely-chart--state-animating');
    }

    const labelIndex = Math.round((state.labelFromIndex + state.labelToIndex) / 2);
    _replaceData(overviewData, labelIndex);
  }

  function isZoomed() {
    return _isZoomed;
  }

  function _replaceData(newRawData, labelIndex, zoomInLabel) {
    const labelWidth = 1 / data.xLabels.length;
    const labelMiddle = labelIndex / (data.xLabels.length - 1);
    const filter = {};
    data.datasets.forEach(({ key }) => filter[key] = false);
    const newData = analyzeData(newRawData, _isZoomed || data.shouldZoomToPie ? 'days' : 'hours');
    const shouldZoomToLines = Object.keys(data.datasets).length !== Object.keys(newData.datasets).length;

    stateManager.update({
      range: {
        begin: labelMiddle - labelWidth / 2,
        end: labelMiddle + labelWidth / 2,
      },
      filter,
    });

    setTimeout(() => {
      Object.assign(data, newData);
      if (shouldZoomToLines) {
        Object.assign(colors, createColors(newRawData.colors));
      }

      if (shouldZoomToLines) {
        minimap.toggle(_isZoomed);
        tools.redraw();
        container.style.width = `${container.scrollWidth}px`;
        container.style.height = `${container.scrollHeight}px`;
      }

      stateManager.update({
        range: {
          begin: ZOOM_RANGE_MIDDLE - ZOOM_RANGE_DELTA,
          end: ZOOM_RANGE_MIDDLE + ZOOM_RANGE_DELTA,
        },
        focusOn: null,
      }, true);

      const daysCount = _isZoomed || data.shouldZoomToPie ? data.xLabels.length : data.xLabels.length / 24;
      const halfDayWidth = (1 / daysCount) / 2;

      let range;
      let filter;

      if (_isZoomed) {
        range = {
          begin: _stateBeforeZoomIn.begin,
          end: _stateBeforeZoomIn.end,
        };
        filter = shouldZoomToLines ? _stateBeforeZoomIn.filter : _stateBeforeZoomOut.filter;
      } else {
        if (shouldZoomToLines) {
          range = {
            begin: 0,
            end: 1,
          };
          filter = {};
          data.datasets.forEach(({ key }) => filter[key] = true);
        } else {
          range = {
            begin: ZOOM_RANGE_MIDDLE - halfDayWidth,
            end: ZOOM_RANGE_MIDDLE + halfDayWidth,
          };
          filter = _stateBeforeZoomIn.filter;
        }
      }

      stateManager.update({
        range,
        filter,
        minimapDelta: _isZoomed ? null : range.end - range.begin,
      });

      if (zoomInLabel) {
        header.zoom(getFullLabelDate(zoomInLabel));
      }

      _isZoomed = !_isZoomed;
      tooltip.toggleLoading(false);
    }, stateManager.hasAnimations() ? ZOOM_TIMEOUT : 0);

    setTimeout(() => {
      if (data.shouldZoomToPie) {
        container.classList.remove('lovely-chart--state-animating');
      }
    }, stateManager.hasAnimations() ? 1000 : 0)
  }

  function _generatePieData(labelIndex) {
    const pieData = Object.assign({}, overviewData);

    pieData.columns = overviewData.columns.map((c) => {
      const column = c.slice(labelIndex - 3 + 1, labelIndex + 4 + 1);
      column.unshift(c[0]);
      return column;
    });

    pieData.types = {};
    Object.keys(overviewData.types).forEach((key) => {
      if (key !== 'x') {
        pieData.types[key] = 'pie';
      }
    });

    pieData.pie = true;

    return pieData;
  }

  return { zoomIn, zoomOut, isZoomed };
}
