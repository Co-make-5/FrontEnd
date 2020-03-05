import React from "react";
import { ResponsiveLine } from '@nivo/line'

const data = [
    {
      "id": "solved",
      "color": "#87d068",
      "data": [
        {
          "x": "03/01/2020",
          "y": 109
        },
        {
          "x": "03/02/2020",
          "y": 264
        },
        {
          "x": "03/03/2020",
          "y": 33
        },
        {
          "x": "03/04/2020",
          "y": 134
        },
        {
          "x": "03/05/2020",
          "y": 70
        },
        {
          "x": "03/06/2020",
          "y": 84
        }
      ]
    },
    {
      "id": "open",
      "color": "#108ee9",
      "data": [
        {
          "x": "03/01/2020",
          "y": 218
        },
        {
          "x": "03/02/2020",
          "y": 67
        },
        {
          "x": "03/03/2020",
          "y": 172
        },
        {
          "x": "03/04/2020",
          "y": 130
        },
        {
          "x": "03/05/2020",
          "y": 203
        },
        {
          "x": "03/06/2020",
          "y": 221
        }
      ]
    }
  ]

const LineChart = (props) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        curve="cardinal"
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'date',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        // colors={{ scheme: 'accent' }}
        colors={['#87d068', '#108ee9']}
        areaBlendMode="darken"
        pointSize={10}
        pointBorderWidth={2}
        pointColor={{from: 'color'}}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

export default LineChart