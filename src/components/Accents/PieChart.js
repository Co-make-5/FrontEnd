import React from "react";
import { ResponsivePie } from "@nivo/pie";

const PieChart = props => {

  const issues = props.issues;  

  const open = issues.filter(issue => issue.solved == 0).length;
  const solved = issues.filter(issue => issue.solved == 1).length;

  const data = [
    {
      id: "solved",
      label: "solved",
      value: solved,
      color: "#87d068"
    },
    {
      id: "open",
      label: "open",
      value: open,
      color: "#108ee9"
    }
  ];

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={{ scheme: "accent" }}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={16}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={1}
      radialLabelsLinkColor={{ from: "color" }}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#333333"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "#108ee9",
          color: "#108ee9",
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: "lines",
          type: "patternLines",
          background: "#87d068",
          color: "#87d068",
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={[
        {
          match: {
            id: "open"
          },
          id: "dots"
        },
        {
          match: {
            id: "solved"
          },
          id: "lines"
        }
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          translateY: 56,
          translateX: 36,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000"
              }
            }
          ]
        }
      ]}
    />
  );
};

export default PieChart;
