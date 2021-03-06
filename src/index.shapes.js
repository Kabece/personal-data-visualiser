import {shape, string, arrayOf, oneOf, object, bool} from 'prop-types'

const dataTypes = {
  numerical: 'NUMERICAL',
  categorical: 'CATEGORICAL'
}

const chartTypes = {
  lineChart: 'LINE_CHART',
  scatterChart: 'SCATTER_CHART',
  combinedChart: 'COMBINED_CHART'
}

const AGGREGATE_CHART_TYPES = {
  CALENDAR_CHART: 'CALENDAR_CHART',
  HEATMAP_CHART: 'HEATMAP_CHART'
}

const ROLLUP_TYPES = {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY'
}

const optionsShape = arrayOf(shape({
  displayName: string.isRequired,
  value: string.isRequired,
  dataType: oneOf([dataTypes.numerical, dataTypes.categorical])
}))

const timeRangeShape = shape({
  0: string,
  1: string
})

const chartShape = shape({
  title: string,
  areBaselinesVisible: bool,
  dataType: oneOf([dataTypes.numerical, dataTypes.categorical]),
  chartType: oneOf([chartTypes.lineChart, chartTypes.scatterChart, chartTypes.combinedChart, AGGREGATE_CHART_TYPES.HEATMAP_CHART, AGGREGATE_CHART_TYPES.CALENDAR_CHART]),
  timeRange: timeRangeShape,
  dataSeries: object // TODO: proptypes
})

export {optionsShape, timeRangeShape, dataTypes, chartTypes, chartShape, ROLLUP_TYPES, AGGREGATE_CHART_TYPES}
