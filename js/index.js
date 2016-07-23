// 需要按照一定的顺序存储 数组
var todo=[
		{
			id:1,
			title:'新列表',
			color:'#C970E2',
			list:[
				{
					content:'1231231',
					date:'456789',
					done:true,
				},
				{
					content:'1551231',
					date:'4533789',
					done:false,
				}
			]
		},
		{
			id:2,
			title:'新列表2',
			color:'#6ddc31',
			list:[
				{
					content:'88888888',
					date:'66666666',
					done:true,
				},
				{
					content:'1ertybhuj31',
					date:'456789',
					done:false,
				}
			]
		}
]
var app=angular.module('app',[]);
var color=['#C970E2','#6ddc31','#40abf8','#f2ca00','#a0845e','#f72369','#f89600'];
app.controller('todo',function($scope){
	$scope.todo=todo;
	$scope.index=0;
	$scope.add=function(){
		$scope.ids=$scope.todo[$scope.todo.length-1].id+1;
		$scope.todo.push({
			id:$scope.ids,
			title:'新列表'+$scope.ids,
			color:color[$scope.ids%7],
			list:[]
		})
		$scope.index=$scope.todo.length-1;
	}
	$scope.select=function(i){
		$scope.index=i;
		$scope.flag=true;
		getNum();
	}
	getNum();
	function getNum(){
		$scope.kk=0;
		angular.forEach($scope.todo[$scope.index].list,function(o,i){
			if(o.done==true){
				$scope.kk++;
			}
		})
	}
	$scope.done=function(val,index,arr){
		return val.done==true?true:false;
	}
	$scope.doing=function(val,index,arr){
		return val.done==false?true:false;
	}
	$scope.flag=true;
	$scope.addlist=function(){
		$scope.todo[$scope.index].list.push({
			content:'',
			date:new Date().getTime(),
			done:false,
		})
	}
	$scope.$watch("todo",function(){
		getNum();
	},true)
	$scope.change=function(obj,str){
		obj.done=str;
		getNum();
	}

})