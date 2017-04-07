function displayLineChart() {
    var data = {
        labels: ["may","may","may","may","may","may","may","may","may","may"],
        datasets: [
            
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [1,2,3,4,5,6,7,8,9,10]
            }
        ]
    };
    var ctx = document.getElementById("lineChart").getContext("2d");
    var options = { };
    var lineChart = new Chart(ctx).Line(data, options);
  }
  onload="displayLineChart();">