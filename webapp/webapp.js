angular.module('myApp', [
    'ngRoute',
    'mobile-angular-ui',
	'btford.socket-io'
]).config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'home.html',
        controller: 'Home'
    });
}).factory('mySocket', function (socketFactory) {
	var myIoSocket = io.connect('/webapp');	//Tên namespace webapp

	mySocket = socketFactory({
		ioSocket: myIoSocket
	});
	return mySocket;
	
/////////////////////// Những dòng code ở trên phần này là phần cài đặt, các bạn hãy đọc thêm về angularjs để hiểu, cái này không nhảy cóc được nha!
}).controller('Home', function($scope, mySocket) {
	////Khu 1 -- Khu cài đặt tham số 
    //cài đặt một số tham số test chơi
	//dùng để đặt các giá trị mặc định
	// 
    $scope.pir = "UNKNOWN";
    $scope.temp=0;
	$scope.stt="UNKNOWN";
	$scope.sonar=[0,0,0,0,0]
	$scope.direct=0;
	$scope.runstt="AUTO";
	
	
	
	////Khu 2 -- Cài đặt các sự kiện khi tương tác với người dùng
	//các sự kiện ng-click, nhấn nút
	$scope.up  = function() {
		mySocket.emit("up")
	}
	$scope.right=function(){
		mySocket.emit("right")
	}
	$scope.down = function(){
		mySocket.emit("down")
	}
	$scope.left=function(){
		mySocket.emit("left")
	}
	$scope.stop=function(){
		mySocket.emit("stop")
	}
	$scope.res=function(){
		mySocket.emit("reset")
	}
	$scope.sos=function(){
		mySocket.emit("sos")
	}
	
	$scope.update=function(){
		mySocket.emit("update")
	}
	$scope.start=function(){
		mySocket.emit("start")
	}
	$scope.emergency=function(){
		mySocket.emit("emergency")
	}
	$scope.offsos=function(){
		mySocket.emit("offsos");
	}
	$scope._reset=function(){
		mySocket.emit("reset");
	}
	$scope.auto=function(){
		mySocket.emit("auto");
	}
	$scope.control=function(){
		mySocket.emit("control");
	}

	
	////Khu 3 -- Nhận dữ liệu từ Arduno gửi lên (thông qua ESP8266 rồi socket server truyền tải!)
	//các sự kiện từ Arduino gửi lên (thông qua esp8266, thông qua server)
	mySocket.on('temp', function(json) {
		$scope.temp= json.data
	})
	//
	mySocket.on('espconnected',function(){
		$scope.stt=" ESP8266 IS ONLINE "
		})
	mySocket.on('espdisconnected',function(){
		$scope.stt=" ESP8266 IS OFFLINE "
		})
	mySocket.on('res',function(json){
		$scope.stt=" ESP8266 IS ONLINE";
	})
	mySocket.on('direct',function(json){
		console.log("DIRECT:", json)
		$scope.direct=json.data
	})
	
	mySocket.on('pir', function(json) {
		//Nhận được thì in ra thôi hihi.
		console.log("PIR:", json)
		$scope.pir = (json.digital==1) ? "HAD FOUND PEOPLE" : " NOT FOUND ANYBODY  "
	})
	mySocket.on('sonar', function(json) {
		//Nhận được thì in ra thôi hihi.
		console.log("SONAR:", json)
		$scope.sonar= json.data
	})
	mySocket.on('runstt',function(json){
		$scope.runstt = (json.digital==1) ? "AUTO" : "CONTROL"
	})
	
	
	
	
	
	//// Khu 4 -- Những dòng code sẽ được thực thi khi kết nối với Arduino (thông qua socket server)
	mySocket.on('connect', function() {
		console.log("connected")
		mySocket.emit("update") 
	})
		
});
