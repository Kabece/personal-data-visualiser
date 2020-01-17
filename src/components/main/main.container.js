import React, {useEffect} from 'react'
import {func, objectOf} from 'prop-types'
import {connect} from 'react-redux'

import ChartContainer from '../../statelessComponents/chartContainer/chartContainer.presenter'
import selector from './main.selector'
import {prepareData} from './main.data.helper'
import {setTimeRange, setDataSource, setChartType, loadData, setTimeRangeSource} from './main.actionCreators'
import {optionsShape, chartShape} from '../../index.shapes'

const Main = ({
  charts,
  dataSourceOptions,
  chartTypeOptions,
  timeRangeSourceOptions,
  onSetTimeRange,
  onDataSourceSelect,
  onChartTypeSelect,
  onTimeRangeSourceSelect,
  onLoadData
}) => {
  useEffect(() => {
    onLoadData({data: prepareData()})
  }, [onLoadData])

  return (
    <div>
      {Object.keys(charts).map(key => (
        <ChartContainer
          key={key}
          chart={charts[key]}
          dataSourceOptions={dataSourceOptions}
          chartTypeOptions={chartTypeOptions}
          timeRangeSourceOptions={timeRangeSourceOptions}
          onDataSourceSelect={({selectedValue}) =>
            onDataSourceSelect({
              chartId: key,
              dataSourceOption: dataSourceOptions.find(option => option.value === selectedValue) // TODO: these functions could be refactored out to a helper file
            })}
          onChartTypeSelect={({selectedValue}) =>
            onChartTypeSelect({
              chartId: key,
              chartTypeOption: chartTypeOptions.find(option => option.value === selectedValue)
            })}
          onTimeRangeSourceSelect={({selectedValue}) =>
            onTimeRangeSourceSelect({
              chartId: key,
              timeRangeSourceOption: timeRangeSourceOptions.find(option => option.value === selectedValue)
            })
          }
          onSetTimeRange={({newTimeRange}) => onSetTimeRange({chartId: key, newTimeRange})}
        />
      ))}
    </div>
  )
}

Main.propTypes = {
  charts: objectOf(chartShape).isRequired,
  dataSourceOptions: optionsShape.isRequired,
  chartTypeOptions: optionsShape.isRequired,
  timeRangeSourceOptions: optionsShape.isRequired,
  onSetTimeRange: func.isRequired,
  onDataSourceSelect: func.isRequired,
  onChartTypeSelect: func.isRequired,
  onTimeRangeSourceSelect: func.isRequired,
  onLoadData: func.isRequired
}

const mapDispatchToProps = dispatch => ({
  onSetTimeRange: ({newTimeRange, chartId}) => dispatch(setTimeRange({newTimeRange, chartId})),
  onDataSourceSelect: ({dataSourceOption, chartId}) => dispatch(setDataSource({dataSourceOption, chartId})),
  onChartTypeSelect: ({chartTypeOption, chartId}) => dispatch(setChartType({chartTypeOption, chartId})),
  onTimeRangeSourceSelect: ({timeRangeSourceOption, chartId}) => dispatch(setTimeRangeSource({timeRangeSourceOption, chartId})),
  onLoadData: ({data}) => dispatch(loadData({data}))
})

export default connect(selector, mapDispatchToProps)(Main)
