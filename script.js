/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.PieChart3D);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in



chart.data = [
  {
    item: "IML",
    quantity: 5
  },
  {
    item: "FOC",
    quantity: 6
  },
  {
    item: "CVL",
    quantity: 9
  },
  {
    item: "AFF",
    quantity: 20
  },
  {
    item: "ACL",
    quantity: 52
  },
  {
    item: "MCO",
    quantity: 5
  }
];

var series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "quantity";
series.dataFields.category = "item";