import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function Barchart() {
  let chartRef = useRef();
  useLayoutEffect(() => {
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create("barchartdiv", am4charts.XYChart);
    chart.data = [
      {
        month: "Jan",
        profit: 501,
      },
      {
        month: "Feb",
        profit: 301,
      },
      {
        month: "Mar",
        profit: 201,
      },
      {
        month: "April",
        profit: 365,
      },
      {
        month: "May",
        profit: 201,
      },
      {
        month: "June",
        profit: 268,
      },
      {
        month: "July",
        profit: 182,
      },
      {
        month: "aug",
        profit: 60,
      },
      {
        month: "Sep",
        profit: 250,
      },
    ];

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    // categoryAxis.renderer.labels.template.fill = am4core.color("#ffffff");
    categoryAxis.renderer.labels.template.adapter.add(
      "dy",
      function (dy, target) {
        if (target.dataItem && target.dataItem.index & (2 == 2)) {
          return dy + 25;
        }
        return dy;
      }
    );

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "profit";
    series.dataFields.categoryX = "month";
    series.name = "Visits";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;
    series.heatRules.push({
      target: series.columns.template,
      property: "fill",
      min: am4core.color("#00b07b"),
      max: am4core.color("#7BBF6A"),
      dataField: "valueY",
    });
    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 0;
    columnTemplate.strokeOpacity = 1;

    return () => {
      chartRef.current && chartRef.current.dispose();
      chartRef.current = null;
    };
  }, []);
  return (
    <div id="barchartdiv" style={{ width: "100%", height: "400px" }}></div>
  );
}
export default Barchart;
