import React from 'react';

import Chart from 'react-apexcharts';
const SidebarWidget = () => {
  const chartSparklinesLarge4Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '65%'
      }
    },
    stroke: {
      color: '#3c44b1',
      curve: 'smooth',
      width: 2
    },
    fill: {
      color: '#3c44b1',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    legend: {
      show: false
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chartSparklinesLarge4Data = [
    {
      name: 'Sales',
      data: [47, 45, 54, 38, 56, 24, 65]
    }
  ];


  return (
    <>
      <div className="app-sidebar--widget">
        <div>            <Chart
          options={chartSparklinesLarge4Options}
          series={chartSparklinesLarge4Data}
          type="area"
          height={80}
        />
          {/* <Chart
            options={chart33Options}
            series={chart33Data}
            type="area"
            height={80}
          /> */}
        </div>
      </div>
    </>
  );
};

export default SidebarWidget;
