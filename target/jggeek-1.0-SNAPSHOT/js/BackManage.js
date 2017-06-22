// 	//检测图片大小
// 	function fileSelected() {
//         var file = document.getElementById('fileToUpload').files[0];
//         if (file) {
//           var fileSize = 0;
//           if (file.size > 1024 * 1024)
//             fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
//           else
//             fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
//           document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
//           document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
//           document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
//         }
//     }
//     //上传轮播图片
//     function uploadFile() {
//         var filedown = new FormData();
//         filedown.append("fileToUpload", document.getElementById('fileToUpload').files[0]);
//         var xhr = new XMLHttpRequest();
//         //target.addEventListener(type,listener,useCapture); 
//         //type： 字符串，事件名称
//         //listener ：实现了 EventListener 接口或者是 JavaScript 中的函数。
//         //useCapture ：是否使用捕捉，一般用 false 
//         xhr.upload.addEventListener("progress", uploadProgress, false);
//         xhr.addEventListener("load", uploadComplete, false);
//         xhr.addEventListener("error", uploadFailed, false);
//         xhr.addEventListener("abort", uploadCanceled, false);
//         xhr.open("GET", "");
//         xhr.send(filedown);
//      }
//     //显示上传进度
//     function uploadProgress(evt) {
//         if (evt.lengthComputable) {
//           var percentComplete = Math.round(evt.loaded * 100 / evt.total);
//           document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
//         }else {
//           document.getElementById('progressNumber').innerHTML = '无法正确获取进度';
//         }
//     }
//     //上传工作室景色图片
//      function UploadView() {
//         var filedown = new FormData();
//         filedown.append("fileToView", document.getElementById('fileToView').files[0]);
//         var xhr = new XMLHttpRequest();
//         xhr.upload.addEventListener("progress", ViewProgress, false);
//         xhr.addEventListener("load", uploadComplete, false);
//         xhr.addEventListener("error", ViewFailed, false);
//         xhr.addEventListener("abort", uploadCanceled, false);
//         xhr.open("GET", "");
//         xhr.send(filedown);
//      }
//     //显示上传进度
//     function ViewProgress(evt) {
//         if (evt.lengthComputable) {
//           var percentComplete = Math.round(evt.loaded * 100 / evt.total);
//           document.getElementById('progressNumber_2').innerHTML = percentComplete.toString() + '%';
//         }else {
//           document.getElementById('progressNumber_2').innerHTML = '无法正确获取进度';
//         }
//     }
//     //上传成功
//     function uploadComplete(evt) {
//         alert(evt.target.responseText);
//         window.location.reload();
//     }
//     //轮播图片上传失败
//     function uploadFailed(evt) {
//         alert("你的文件上传失败，请确定是否已有三张图片或者链接服务器失败");
//     }
//     //景色图片上传失败
//     function ViewFailed(evt) {
//         alert("你的文件上传失败，请确定是否已有两张图片或者链接服务器失败");
//     }
//     //上传取消
//     function uploadCanceled(evt) {
//         alert("你已经取消上传文件");
//     }

// //获取轮播图片
// $(function(){
// 	$.ajax({
// 		type:"GET",//提交请求的方式
// 		url:"",
// 		data:{
// 			manager:"geekmanager"
// 		},
// 		success: function(data){
// 			if(data.status == '1'){//1代表成功，后台status == 1
// 				var str = '';
// 				str += '<div class="RoomImgUpload_1"><img src="' + data.GeekImg[0]
// 				+ '"></div>'+'<div class="RoomImgUpload_2"><img src="' + data.GeekImg[1]
// 				+ '"></div>'+'<div class="RoomImgUpload_3"><img src="' + data.GeekImg[2]
// 				+ '"></div>'
// 				// window.location.reload();//刷新页面
// 				$('.RoomImgUpload_box').append(str);
// 			}else{
// 				alert("未成功链接后台数据");
// 			}
// 		},
// 		// error: function() {
// 		// 	alert("服务器错误");
// 		// }
// 	})//ajax的反括号
// })

// //获取工作室景色图片
// $(function(){
// 	$.ajax({
// 		type:"GET",//提交请求的方式
// 		url:"",
// 		data:{
// 			manager:"geekmanager"
// 		},
// 		success: function(data){
// 			if(data.status == '1'){//1代表成功，后台status == 1
// 				var str = '';
// 				str += '<div class="RoomImgView_1"><img src="' + data.GeekImg[0]
// 				+ '"></div>'+'<div class="RoomImgView_2"><img src="' + data.GeekImg[1]
// 				+ '"></div>'
// 				$('.RoomImgView_box').append(str);
// 			}else{
// 				alert("未成功链接后台数据");
// 			}
// 		},
// 		error: function() {
			
// 		}
// 	})//ajax的反括号
// })

//提交成员信息
$(function(){
	$('#PersonBtn').click(function(){
		if ($('#PersonPosition').val() == "" || $('#PersonName').val() == "" || $('#PersonInfo').val() == "" || $('#PersonImg').val() == "") {
			alert("请完整输入信息");
		} else {
			$.ajax({
				type: "GET",
				url:"",
				data:{
					manager:"geekmanager",
					personPosition:$('#PersonPosition').val(),
					personName:$('#PersonName').val(),
					personInfo:$('#PersonInfo').val(),
					personImg:$('#PersonImg').val()
				},
				success:function(data){
						alert("提交成功！");
						window.location.reload();
				},
				error:function(){

				}
			})//ajax
		}//if的括号
	})//click
})//function

//获取成员信息
$(function(){
	var id;
	$.ajax({
		type:"GET",
		url:"FileUpload_queryAllMemberInfo",
		data:{},
		success:function(data){
			var d = JSON.parse(data);//数组转换为JSON格式
			var l = d.length;
			var oDiv = document.getElementById('Person_view');
			var Id;
			if (d[l-1].status == '1') {//验证最后一条的status
				for (var i = 0; i < l-1; i++) {//获取除了最后一条的信息
					Id = 'id' + i;
					var span = document.createElement('button');
					span.setAttribute("id",Id);
					$('#Person_view').append(data[i]+'<button>'+'删除'+'</button>'+'<br/>');
				}
				// 主要是这一步，取出oDiv的所有的button标签，然后遍历
				var oBtn = oDiv.getElementsByTagName('button');
				for(var j = 0, len = oBtn.length; j < len; j++) {
					(function(num){
						oBtn[num].onclick = function(){
							// console.log(this.id,"id"+num);
							//测试输出值为“id[i]”
							if(!confirm("确认要删除？")){ 
								window.event.returnValue = false; 
							}else{
								$.ajax({
									type:"GET",
									url:"",
									data:{
										id:num
									},
									success:function(){
										alert("删除成功！");
										window.location.reload();
									},
									error:function(){
										alert("无法连接服务器");
									}
								})
							}
						}
					})(j)
				}
			}else{
				alert("无法正确获取数据");
			}
		},
		error:function(){

		}
	})	 	
})

//提交作品信息
$(function(){
	$('#ProBtn').click(function(){
		if ($('#ProName').val() == "" || $('#ProInfo').val() == "" || $('#ProImg').val() == "") {
			alert("请完整输入信息");
		} else {
			$.ajax({
				type: "GET",
				url:"",
				data:{
					manager:"geekmanager",
					proName:$('#ProName').val(),
					proInfo:$('#ProInfo').val(),
					proImg:$('#ProImg').val()
				},
				success:function(data){
						alert("提交成功！");
						window.location.reload();
				},
				error:function(){

				}
			})//ajax
		}//if的括号
	})//click
})//function

//获取作品信息
$(function(){
	var id;
	$.ajax({
		type:"GET",
		url:"",
		data:{},
		success:function(data){
			var d = JSON.parse(data);//数组转换为JSON格式
			var l = d.length;
			var oDiv = document.getElementById('Pro_view');
			var Id;
			if (d[l-1].status == '1') {//验证最后一条的status
				for (var i = 0; i < l-1; i++) {//获取除了最后一条的信息
					Id = 'id' + i;
					var span = document.createElement('button');
					span.setAttribute("id",Id);
					$('#Pro_view').append(data[i]+'<button>'+'删除'+'</button>'+'<br/>');
				}
				// 主要是这一步，取出oDiv的所有的button标签，然后遍历
				var oBtn = oDiv.getElementsByTagName('button');
				for(var j = 0, len = oBtn.length; j < len; j++) {
					(function(num){
						oBtn[num].onclick = function(){
							// console.log(this.id,"id"+num);
							//测试输出值为“id[i]”
							if(!confirm("确认要删除？")){ 
								window.event.returnValue = false; 
							}else{
								$.ajax({
									type:"GET",
									url:"",
									data:{
										id:num
									},
									success:function(){
										alert("删除成功！");
										window.location.reload();
									},
									error:function(){

									}
								})
							}
						}
					})(j)
				}
			}else{
				alert("无法正确获取数据");
			}
		},
		error:function(){

		}
	})	 	
})


//提交优秀之星信息
$(function(){
	$('#GraBtn').click(function(){
		if ($('#GraName').val() == "" || $('#GraPlace').val() == "") {
			alert("请完整输入信息");
		} else {
			$.ajax({
				type: "GET",
				url:"",
				data:{
					manager:"geekmanager",
					graName:$('#GraName').val(),
					graGrade:$('#GraGrade').val(),
					graPosition:$('#GraPosition').val(),
					graPlace:$('#GraPlace').val()
				},
				success:function(data){
						alert("提交成功！");
						window.location.reload();
				},
				error:function(){

				}
			})//ajax
		}//if的括号
	})//click
})//function

//获取优秀之星信息
$(function(){
	var id;
	$.ajax({
		type:"GET",
		url:"",
		data:{},
		success:function(data){
			var d = JSON.parse(data);//数组转换为JSON格式
			var l = d.length;
			var oDiv = document.getElementById('Gra_view');
			var Id;
			if (d[l-1].status == '1') {//验证最后一条的status
				for (var i = 0; i < l-1; i++) {//获取除了最后一条的信息
					Id = 'id' + i;
					var span = document.createElement('button');
					span.setAttribute("id",Id);
					$('#Gra_view').append(data[i]+'<button>'+'删除'+'</button>'+'<br/>');
				}
				// 主要是这一步，取出oDiv的所有的button标签，然后遍历
				var oBtn = oDiv.getElementsByTagName('button');
				for(var j = 0, len = oBtn.length; j < len; j++) {
					(function(num){
						oBtn[num].onclick = function(){
							// console.log(this.id,"id"+num);
							//测试输出值为“id[i]”
							if(!confirm("确认要删除？")){ 
								window.event.returnValue = false; 
							}else{
								$.ajax({
									type:"GET",
									url:"",
									data:{
										id:num
									},
									success:function(){
										alert("删除成功！");
										window.location.reload();
									},
									error:function(){

									}
								})
							}
						}
					})(j)
				}
			}else{
				alert("无法正确获取数据");
			}
		},
		error:function(){

		}
	})	 	
})

//提交学习资料信息
$(function(){
	$('#StuBtn').click(function(){
		if ($('#StuName').val() == "" || $('#StuImg').val() == "") {
			alert("请完整输入信息");
		} else {
			$.ajax({
				type: "GET",
				url:"",
				data:{
					manager:"geekmanager",
					stuKind:$('#StuKind').val(),
					stuName:$('#StuName').val(),
					stuImgUrl:$('#StuImg').val(),
					stuIntr:$('#stuIntr').val(),
					stuReco:$('#stuReco').val()
				},
				success:function(data){
						alert("提交成功！");
						window.location.reload();
				},
				error:function(){

				}
			})//ajax
		}//if的括号
	})//click
})//function

//获取学习资料信息
$(function(){
	var id;
	$.ajax({
		type:"GET",
		url:"",
		data:{},
		success:function(data){
			var d = JSON.parse(data);//数组转换为JSON格式
			var l = d.length;
			var oDiv = document.getElementById('Stu_view');
			var Id;
			if (d[l-1].status == '1') {//验证最后一条的status
				for (var i = 0; i < l-1; i++) {//获取除了最后一条的信息
					Id = 'id' + i;
					var span = document.createElement('button');
					span.setAttribute("id",Id);
					$('#Stu_view').append(data[i]+'<button>'+'删除'+'</button>'+'<br/>');
				}
				// 主要是这一步，取出oDiv的所有的button标签，然后遍历
				var oBtn = oDiv.getElementsByTagName('button');
				for(var j = 0, len = oBtn.length; j < len; j++) {
					(function(num){
						oBtn[num].onclick = function(){
							// console.log(this.id,"id"+num);
							//测试输出值为“id[i]”
							if(!confirm("确认要删除？")){ 
								window.event.returnValue = false; 
							}else{
								$.ajax({
									type:"GET",
									url:"",
									data:{
										id:num
									},
									success:function(){
										alert("删除成功！");
										window.location.reload();
									},
									error:function(){

									}
								})
							}
						}
					})(j)
				}
			}else{
				alert("无法正确获取数据");
			}
		},
		error:function(){

		}
	})	 	
})

//获取意见反馈
$(function(){
	var id;
	$.ajax({
		type:"GET",
		url:"",
		data:{},
		success:function(data){
			var d = JSON.parse(data);//数组转换为JSON格式
			var l = d.length;
			if (d[l-1].status == '1') {//验证最后一条的status
				for (var i = 0; i < l-1; i++) {//获取除了最后一条的信息
					$('#Sug_view').append(data[i]+'<br/>');
				}
			}else{
				alert("无法正确获取数据");
			}
		},
		error:function(){

		}
	})	 	
})