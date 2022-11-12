// main
/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx } from '@emotion/react';
import Chart from 'react-apexcharts';

const GeneralChart = ({series, fontSize='16px'}) => {

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ['HP', 'Attack', 'Defense', ['Special', 'Attack'], ['Special', 'Defense'], 'Speed'],
      labels: {
        show: true,
        offsetX: 0,
        offsetY: 5,
        style: {
          colors: ["#EFF2FC", "#EFF2FC", "#EFF2FC", "#EFF2FC", "#EFF2FC", "#EFF2FC"],
          fontSize: "16px",
          fontFamily: 'Lato, sans-serif',
          fontWeight: 300,
        }
      }
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['#F7B916'],
      dashArray: 0
    },
    fill: {
      opacity: 0.15,
      colors: ['#F7B916']
    },
    markers: {
      size: 15,
      colors: '#F7B916',
      strokeColors: '#F7B916',
      strokeWidth: 0,
      hover: {
        size: 15
      }
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: 'rgba(239, 242, 252, 0.1)',
          strokeWidth: 1,
          connectorColors: 'rgba(239, 242, 252, 0.1)',
        }
      }
    },
    yaxis: {
      show: false,
      min: 0,
      // max: 255,
    },
    tooltip: {
      enabled: false
    },
    dataLabels: {
      enabled: true,
      offsetX: 0,
      offsetY: 5,
      style: {
        fontSize: fontSize,
        fontFamily: 'Lato, sans-serif',
        fontWeight: '900',
        colors: ['transparent']
      },
      background: {
        enabled: true,
        foreColor: '#2A3050',
        padding: 4,
        borderRadius: 0,
        borderWidth: 0,
        borderColor: '#fff',
        opacity: 1,
      },
    }
  };

  return(
    <Chart
      options={options}
      series={series}
      type='radar'
    />
  );
};

export default GeneralChart;