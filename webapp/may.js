// tao mot mang gom 10 phan tu , gia tri khoi dau la o 
var dataArr= new Array();
 dataArr=[0,0,0,0,0,0,0,0,0,0];

// ghi gia tri doc duoc tu cam bien vao bien temp  

 temp =document.getElementById("temp").value;

// day cac phan tu trong mang len mot don vi 
dataArr.shift();
// ghi gia tri temp vao cuoi mang  
dataArr.push(document.getElementById("temp"));
// Ve do thi
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
	
    data: {
        labels: ["1", "2", "3", "4", "5", "6","7","8","9","10"],
        datasets: [{
            label: ' TEMPERATURE',
            data: dataArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
		
            ],
			
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
			
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
				
            }],
		
        }
    }
});
