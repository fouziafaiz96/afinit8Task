import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function Piechart() {
  let chartRef = useRef();
  useLayoutEffect(() => {
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create("piechartdiv", am4charts.PieChart);
    chart.data = [
      {
        country: "Revenue",
        litres: 35,
      },
      {
        country: "Expenses",
        litres: 50,
      },
      {
        country: "Profit",
        litres: 30,
      },
    ];

    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.slices.template.tooltipText = "";
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.fill = "#A2BDCB";
    pieSeries.labels.template.fontSize = 20;
    pieSeries.labels.template.fontWeight = 20;

    pieSeries.alignLabels = false;
    pieSeries.labels.template.radius = am4core.percent(-40);
    pieSeries.labels.template.fill = am4core.color("white");
    pieSeries.dataFields.category = "country";
    pieSeries.colors.list = [am4core.color("#00b07b")];
    return () => {
      chartRef.current && chartRef.current.dispose();
      chartRef.current = null;
    };
  }, []);
  return (
    <div id="piechartdiv" style={{ width: "100%", height: "400px" }}></div>
  );
}
export default Piechart;
