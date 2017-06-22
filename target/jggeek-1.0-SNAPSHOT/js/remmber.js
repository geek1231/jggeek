// 	var i=0;
// 	var timer=setInterval(showImg,3000);
// 	function showImg(){
// 		i++;
// 		if (i==len) {
// 			i=0;
// 		}
// 		// $(".scroll_nav li").eq(i).addClass('active_1').siblings().removeClass('active_1');
// 		$("person").eq(i).show().siblings().hide();
// 	}
// 	$(".person").hover(function(){
// 		clearInterval(timer);
// 	},function(){
// 		timer=setInterval(showImg,3000);
// 	})
// //点击箭头
// 	$("#slider-next").click(function(){
// 		i++;
// 		if (i==len) {
// 			i=0;
// 		}
// 		// $(".scroll_nav li").eq(i).addClass('active_1').siblings().removeClass('active_1');
// 		$(".Front_pic li").eq(i).show().siblings().hide();
// 	});
// 	$("#slider-prev").click(function(){
// 		i--;
// 		if (i==-1) {
// 			i=len-1;
// 		}
// 		// $(".scroll_nav li").eq(i).addClass('active_1').siblings().removeClass('active_1');
// 		$(".person").eq(i).show().siblings().hide();
// 	});
// $(".Front_pic li").each(function(i){
// 	$(".Front_pic li").slice(i*6,i*6+6).wrapAll("<ul></ul>");
// });

window.onload = function () {

    var i = 0;
//3个div的统一class = 'Front_pic'
//找到所有的div
    var Front_pic1 = document.getElementById('Front_pic1');
    var Front_pic2 = document.getElementById('Front_pic2');
    var Front_pic3 = document.getElementById('Front_pic3');
    var Front_pic4 = document.getElementById('Front_pic4');
    var div = [Front_pic1, Front_pic2, Front_pic3, Front_pic4];
    document.getElementById('slider-prev').onclick = function () {

        //循环div，找到处于显示状态的div将其隐藏，并将其下一个div显示
        /*for(var i=0,len = div.length;i<len-1;i++){
         if(div[i].style.display == 'block'){
         div[i].style.display = 'none';
         div[i-1].style.display = 'block';
         break;
         }*/
        if (i == 0) {
            i = div.length - 1;
        }
        else {
            i--;
        }
        // alert(i);
        if (i == div.length - 1) {
            div[0].style.display = 'none';
        }
        else {
            div[i + 1].style.display = 'none';
        }
        div[i].style.display = 'block';
    }
    document.getElementById('slider-next').onclick = function () {

        //循环div，找到处于显示状态的div将其隐藏，并将其下一个div显示
        /*for(var i=0,len = div.length;i<len-1;i++){
         if(div[i].style.display == 'block'){
         div[i].style.display = 'none';
         div[i-1].style.display = 'block';
         break;
         }*/
        if (i == div.length - 1) {
            i = 0;
        }
        else {
            i++;
        }
        // alert(i);
        if (i == 0) {
            div[div.length - 1].style.display = 'none';
        }
        else {
            div[i - 1].style.display = 'none';
        }
        div[i].style.display = 'block';
    }
}

/*document.getElementById("slider-next").onclick = function(){
 //找到所有的div
 var div = document.getElementsByTagName('Front_pic');

 //循环div，找到处于显示状态的div将其隐藏，并将其下一个div显示
 for(var i=0;i<div.length;i++){
 if(div[i].style.display == 'block'){
 div[i].style.display = 'none';
 if(i<div.length-1){
 div[i+1].style.display = 'block';
 }else{
 i=0;
 div[i].style.display='block';
 }

 }
 }*/




// 交互
// 获取成员名字
$(function(){
    $.ajax({
        type:"GET",
        url:"FileUpload_queryAllMemberInfo",
        data:{
            // Manager:"geekmanager"
        },
        success:function(data){
            console.log(data);
            var datateam = JSON.parse(data);
            var l = datateam.length;
            console.log(datateam[l-1]);
            if (datateam[l-1].status == '1') {
                var str1="";
                var str2="";

                for (var i = 0; i < datateam.length; i++) {
                    if(datateam[i].position=="前端") {
                        console.log(datateam[i].personName);
                        str1+= '<li>'+datateam[i].personName+'</li>';
                    }if(datateam[i].position=="后台"){
                        str2+='<li>'+datateam[i].personName+'</li>';
                    }
                                                          }
                $(".Front_re ul").html(str1);
                $(".backstage_re ul").html(str2);
            }else{
                // alert("无法正确获取数据");
            }
        },
        error:function(){

        }
    })
})

// 获取第一页前端成员图片信息

$(function () {
    $.ajax({
        type: "GET",
        url: "FileUpload_queryAllMemberInfo",
        data: {
            // Manager:"geekmanager"
        },
        success: function (data) {
            var datateam = JSON.parse(data);
            var l = datateam.length;
            if (datateam[l - 1].status == '1') {
                var str1 = '';
                for (var i = 0; i < datateam.length; i++) {
                    if (datateam[i].position == "前端") {
                        str1 += '<li>' +
                            '<img src="' + datateam[i].personImgUrl + '">' +
                            '<div class="cover">' +
                            '<div class="heart" id="like' + (i + 1) + '" rel="like"></div>' +


                            '<h4>' + datateam[i].personName + '</h4>' +
                            '<p>' + datateam[i].personInfo + '</p>' +

                            '<div class="likeCount" id="likeCount' + (i + 1) + '">0</div>' +
                            '</div>' +
                            '</li>';
                    } else {
                        // alert("没有找到前端信息")
                    }
                }
                $("#Front_pic1 ul").html(str1);



            } else {
                // alert("无法正确获取数据");
            }
        },


        error: function () {
        }
    })
})


// 获取第二页前端成员图片信息
$(function(){
    $.ajax({
        type:"GET",
        url:"FileUpload_queryAllMemberInfo",
        data:{
            // Manager:"geekmanager"
        },
        success:function(data){
            var datateam = JSON.parse(data);
            var l = datateam.length;
            if (datateam[l - 1].status == '1') {
                var str1='';
                var datateam = JSON.parse(data);
                for (var i = 6; i <18; i++) {

                    if (datateam[i].position == "前端") {


                        str1 += '<li>' +
                            '<img src="' + datateam[i].personImgUrl + '">' +
                            '<div class="cover">' +
                            '<div class="heart" id="like' + (i + 7) + '" rel="like"></div>' +


                            '<h4>' + datateam[i].personName + '</h4>' +
                            '<p>' + datateam[i].personInfo + '</p>' +

                            '<div class="likeCount" id="likeCount' + (i + 7) + '">0</div>' +
                            '</div>' +
                            '</li>';
                    }
                    else {
                        // alert("没有找到前端信息");
                    }
                }
                    $("#Front_pic2 ul").html(str1);


            }else{
                // alert("无法正确获取数据");
            }
        },
        error:function(){

        }
    })
})
// 获取第三页前端成员图片信息
$(function(){
    $.ajax({
        type:"GET",
        url:"FileUpload_queryAllMemberInfo",
        data:{
            // Manager:"geekmanager"
        },
        success:function(data){
            var datateam = JSON.parse(data);
            var l = datateam.length;
            if (datateam[l - 1].status == '1')
             {
                var str1='';
                var datateam = JSON.parse(data);
                for (var i = 12; i <datateam.length; i++) {
                    if(datateam[i].position=="前端") {
                             str1+='<li>'+
                                        '<img src="'+datateam[i].personImgUrl+'">'+
                                        '<div class="cover">'+
                                        '<div class="heart" id="like'+(i+13)+'" rel="like"></div>'+


                                        '<h4>'+datateam[i].personName+'</h4>'+
                                        '<p>'+datateam[i].personInfo+'</p>'+

                                        '<div class="likeCount" id="likeCount'+(i+13)+'">0</div>'+
                                        '</div>'+
                                 '</li>';

                    }else
                    {
                       // alert("没有找到前端信息");
                    }
}
                $("#Front_pic3 ul").html(str1);






             }else{
                // alert("无法正确获取数据");
            }
        },
        error:function(){

        }
    })
})
// 获取第四页前端成员图片信息
$(function(){
    $.ajax({
        type:"GET",
        url:"FileUpload_queryAllMemberInfo",
        data:{
            Manager:"geekmanager"
        },
        success:function(data){
            var datateam = JSON.parse(data);
            var l = datateam.length;
            if (datateam[l - 1].status == '1')
             {
                var str1='';
                var datateam = JSON.parse(data);
                for (var i =18 ; i <datateam.length; i++) {
                    if(datateam[i].position=="前端") {
                             str1+='<li>'+
                                        '<img src="'+datateam[i].personImgUrl+'">'+
                                        '<div class="cover">'+
                                        '<div class="heart" id="like'+(i+19)+'" rel="like"></div>'+


                                        '<h4>'+datateam[i].personName+'</h4>'+
                                        '<p>'+datateam[i].personInfo+'</p>'+

                                        '<div class="likeCount" id="likeCount'+(i+19)+'">0</div>'+
                                        '</div>'+
                                 '</li>';

                    }else
                    {
                       // alert("没有找到前端信息");
                    }
}
                $("#Front_pic4 ul").append(str1);



             }else{
                // alert("无法正确获取数据");
            }
        },
        error:function(){

        }
    })
})
// 获取后台成员照片信息
$(function(){
    $.ajax({
        type:"GET",
        url:"FileUpload_queryAllMemberInfo",
        data:{
            // Manager:"geekmanager"
        },
        success:function(data){
               var datateam = JSON.parse(data);
               var l = datateam.length;
                if (datateam[l - 1].status == '1') {
               var j=0;
               var str1='';
                var datateam = JSON.parse(data);
               for(var i=0;i<datateam.length;i++)
               {
                    if(datateam[i].position=="后台") {
                        j++;
                        if (j<7) {
                            str1+='<li>'+
                                        '<img src="'+datateam[i].personImgUrl+'">'+
                                        '<div class="cover">'+
                                        '<div class="heart" id="like'+(i+25)+'" rel="like"></div>'+
                                        '<h4>'+datateam[i].personName+'</h4>'+
                                        '<p>'+datateam[i].personInfo+'</p>'+
                                        '<div class="likeCount" id="likeCount'+(i+25)+'">0</div>'+
                                        '</div>'+
                                 '</li>';
                    }
                    else{
                              break;
                              }
                    }else
                    {
                       // alert("没有找到后台信息");
                    }
}
                $(".backstage_pic ul").append(str1);
                    $('.heart').click(function(){{
                        var A=$(this).attr("id");
                        var B=A.split("like");
                        var messageID=B[1];//splitting like1 to 1
                        var C=parseInt($("#likeCount"+messageID).html());
                        $(this).css("background-position","")
                        var D=$(this).attr("rel");

                        if(D === 'like')
                        {
                            $("#likeCount"+messageID).html(C+1);
                            $(this).addClass("heartAnimation").attr("rel","unlike");
                        }
                        else
                        {
                            $("#likeCount"+messageID).html(C-1);
                            $(this).removeClass("heartAnimation").attr("rel","like");
                            $(this).css("background-position","left");
                        }
                    }})


            }else{
                // alert("无法正确获取数据");
            }
        },
        error:function(){

        }
    })
})


// 自测
// $(function(){
//     var data=[
// {
//         personName : "1",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//        personName : "2",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "3",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "4",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "5",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "6",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"后台"
// },
// {
//         personName :"7",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//        personName : "hahaha",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "hahaha",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "kijuji",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "jouyai",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"后台"
// },
// {
//         personName : "2222",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "333",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "hahaha",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "6666",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "333",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "hahaha",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "6666",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "444",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "hahaha",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "6666",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "444",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "hahaha",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "6666",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "555",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "hahaha",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "6666",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"前端"
// },
// {
//         personName : "hhhhhh",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"后台"
// },
// {
//        personName : "uiuju",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"后台"
// },
// {
//         personName : "hahaha",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"后台"
// },
// {
//         personName : "hahaha",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"后台"
// },
// {
//         personName : "hahaha",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"后台"
// },
// {
//         personName : "hahaha",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"后台"
// },
// {
//         personName : "hahaha",
//         personInfo:"2015",
//         personImg: "1.jpg",
//         position:"后台"
// }


// ];

// 自测后台图片信息
//      var j=0;
//      var str1='';
//      var datateam = data;
//      for(var i=0;i<datateam.length;i++)
//      {
//           if(datateam[i].position=="后台") {
//               j++;
//               if (j<7) {
//                   str1+='<li>'+
//                               '<img src="'+datateam[i].personImg+'">'+
//                               '<div class="cover">'+
//                               '<div class="heart" id="like'+(i+25)+'" rel="like"></div>'+
//                               '<h4>'+datateam[i].personName+'</h4>'+
//                               '<p>'+datateam[i].personInfo+'</p>'+
//                               '<div class="likeCount" id="likeCount'+(i+25)+'">3</div>'+
//                               '</div>'+
//                        '</li>';
//                    }else{
//                       break;
//                    }

//           }
//           $(".backstage_pic ul").html(str1);
//       }

// })

// 自测前端第一页图片


//                 var str1='';
//                 var datateam = data;
//                 for (var i = 0; i <datateam.length; i++) {
//                     if(datateam[i].position == "前端") {
//                             str1+='<li>'+
//                                         '<img src="'+datateam[i].personImg+'">'+
//                                         '<div class="cover">'+
//                                         '<div class="heart" id="like'+(i+1)+'" rel="like"></div>'+


//                                         '<h4>'+datateam[i].personName+'</h4>'+
//                                         '<p>'+datateam[i].personInfo+'</p>'+

//                                         '<div class="likeCount" id="likeCount'+(i+1)+'">3</div>'+
//                                         '</div>'+
//                                  '</li>';


//                     }

//                 }

//                 $("#Front_pic1 ul").append(str1);

// })

// 自测前端第二页图片
//                var str1='';
//                 var datateam = data;
//                 for (var i = 6; i <datateam.length; i++) {
//                     if(datateam[i].position=="前端") {
//                              str1+='<li>'+
//                                         '<img src="'+datateam[i].personImg+'">'+
//                                         '<div class="cover">'+
//                                         '<div class="heart" id="like'+(i+7)+'" rel="like"></div>'+


//                                         '<h4>'+datateam[i].personName+'</h4>'+
//                                         '<p>'+datateam[i].personInfo+'</p>'+

//                                         '<div class="likeCount" id="likeCount'+(i+7)+'">3</div>'+
//                                         '</div>'+
//                                  '</li>';

// }
// }
//                 $("#Front_pic2 ul").html(str1);


// })

// 自测前端第三页
//                 var str1='';
//                 var datateam = data;
//                 for (var i = 12; i <datateam.length; i++) {
//                     if(datateam[i].position=="前端") {
//                              str1+='<li>'+
//                                         '<img src="'+datateam[i].personImg+'">'+
//                                         '<div class="cover">'+
//                                         '<div class="heart" id="like'+(i+13)+'" rel="like"></div>'+


//                                         '<h4>'+datateam[i].personName+'</h4>'+
//                                         '<p>'+datateam[i].personInfo+'</p>'+

//                                         '<div class="likeCount" id="likeCount'+(i+13)+'">3</div>'+
//                                         '</div>'+
//                                  '</li>';

// }
// }
//                 $("#Front_pic3 ul").html(str1);

// })

// 自测前端第四页
//                var str1='';
//                 var datateam = data;
//                 for (var i = 18; i <datateam.length; i++) {
//                     if(datateam[i].position=="前端") {
//                              str1+='<li>'+
//                                         '<img src="'+datateam[i].personImg+'">'+
//                                         '<div class="cover">'+
//                                         '<div class="heart" id="like'+(i+19)+'" rel="like"></div>'+


//                                         '<h4>'+datateam[i].personName+'</h4>'+
//                                         '<p>'+datateam[i].personInfo+'</p>'+

//                                         '<div class="likeCount" id="likeCount'+(i+19)+'">3</div>'+
//                                         '</div>'+
//                                  '</li>';

// }
// }
//                 $("#Front_pic4 ul").html(str1);

// })
// 自测成员姓名信息
// $(function(){
//    var data=[
//   {
//     personName:"简佳丽",
//     position:"前端"
//   },
//    {
//     personName:"岳",
//     position:"前端"
//   },
//  {
//     personName:"he",
//     position:"后台"
//   },
//   {
//     personName:"简佳丽",
//     position:"前端"
//   },
//    {
//     personName:"岳",
//     position:"前端"
//   },
//  {
//     personName:"he",
//     position:"后台"
//   }
//   ];
//                 var str1=' ';
//                 var str2=' ';
//                 var datateam = data;
//                 for (var i = 0; i < data.length;i++) {
//                     if(datateam[i].position == "前端"){
//                         str1+= '<li>'+datateam[i].personName+'</li>';
//                     }
//                     if(datateam[i].position == "后台"){
//                         str2+='<li>'+datateam[i].personName+'</li>';
//                     }
//                 }
//                 $(".Front_re ul").html(str1);
//                 $(".backstage_re ul").html(str2);

// })


