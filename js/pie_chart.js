google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Technology'],
    ['DevOps',     5],
    ['Testing',      3],
    ['JavaScript',  1],
    ['HTML/CSS', 1]
  ]);

  var options = {
    title: 'Project Contribution',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart1'));
  chart.draw(data, options);
}