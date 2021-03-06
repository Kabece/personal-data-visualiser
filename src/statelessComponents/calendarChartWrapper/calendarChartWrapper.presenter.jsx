import React from 'react'
import {ResponsiveCalendar} from '@nivo/calendar'

import {chartShape} from '../../index.shapes'
import {convertAggregateMoodDataToCalendarFormat} from './calendarChartWrapper.helper'

const CalendarChartWrapper = ({chart}) => (
  <ResponsiveCalendar
    data={convertAggregateMoodDataToCalendarFormat({aggregateMoodData: chart})}
    from={chart.timeRange.begin()}
    to={chart.timeRange.end()}
    emptyColor='#eeeeee'
    colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
    margin={{top: 60, right: 40, bottom: 120, left: 40}}
    yearSpacing={40}
    monthBorderColor='#000000'
    dayBorderWidth={1}
    dayBorderColor='#000000'
    monthBorderWidth={1}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'row',
        translateY: 36,
        itemCount: 4,
        itemWidth: 42,
        itemHeight: 36,
        itemsSpacing: 14,
        itemDirection: 'right-to-left'
      }
    ]}
  />
)

CalendarChartWrapper.propTypes = {
  chart: chartShape.isRequired
}

export default CalendarChartWrapper
