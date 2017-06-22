$(function () {
/*	var data=[
	    {
            proImg: "images/process-img5.png",
            proName: "经管学院",
            proInfo: "xxxxx",
        },
        {
            proImg: "images/process-img5.png",
            proName: "经管学院",
            proInfo: "xxxxx",
        },
        {
            proImg: "images/process-img5.png",
            proName: "经管学院",
            proInfo: "xxxxx",
        },
        {
            proImg: "images/process-img5.png",
            proName: "经管学院",
            proInfo: "xxxxx",
        }
    ]*/




	$.ajax({
		type: "get",
		url: "Production_queryAllProductionInfo",
		data:{
			// Manager: "GeekManager"
		},
		success:function(data) {

			var d = JSON.parse(data);
			var l = d.length;
			console.log(d[l-1].status);


			if (d[l-1].status == "1") {
				console.log("11111");
				for (var j = 0; j < 4; j++) {
					var str21 = '';
					console.log(d[j].proImgUrl);
					str21 += '<li class="addPosition"><div class="kuang kuang1"></div><div class="kuang kuang2"></div><div class="text1"><div class="bg"><img class="bg1" src=" http://localhost:8080/'
					          +d[j].proImgUrl+
					          '"><p class="title">'
					          +d[j].proName+
					          '</p><p class="eng">'
					          +d[j].proInfo+
					          '</p></div></div><div class="text2"><div class="mengban"></div><p class="desc">'
					          +d[j].proName+
					          '</p></div></li>';
					$('.two').append(str21);          
				}				
			} 
			else {
				alert("error!!!!!");
			}
		},
		error:function(){
			alert("error");
		}
	})
})