// 让学姐学长寄语字出现
$(document).ready(function(){
     $("#wish_word").ticker({
    sorList: " ",
    rate: 100,
    delay: 4000
   }).trigger("play").trigger("stop");
 });
//让表格变色
$(document).ready(function(){
    $("tr：odd").attr("background-color", "#ffffff");//为双数行表格设置背颜色素
    $("tr:even").css("background-color", "#d4e3e5");////为单数行表格设置背景颜色

    // 鼠标移动变色
    $("tr").mouseover(function(){
    $(this).css("background-color"," #fee974");
    
}); 
    $("tr").mouseout(function(){
    $(this).css("background-color","#c3dde0");

});
    //成员变化
$("#Li1").click(function(){
  $("#table2").hide();
  $("#table3").hide();
  $("#table1").show();
});
$("#Li2").click(function(){
  $("#table1").hide();
  $("#table3").hide();
  $("#table2").show();
});
$("#Li3").click(function(){
  $("#table1").hide();
  $("#table2").hide();
  $("#table3").show();
});
})



 
    








// 交互
// 获取毕业去向成员信息


// $(function(){
//     $.ajax({
//         type:"GET",
//         url:"ExcellentStar_queryAllExcellentStar",
//         data:{
//             // Manager:"geekmanager"
//         },
//         success:function(data){
//             var datateam = JSON.parse(data);
//             var l = datateam.length;
//             if (datateam[l-1].status == '1') {
//                 var str1="";
//                 for (var i = 0; i < datateam.length; i++){
//                     if(datateam[i].graGrade=="2012"){
//                   str1+= "<tr><td>"+datateam[i].graName+"</td><td>"+datateam[i].graPosion+"</td><td>"+datateam[i].graPlace+"</td>";
//                   }else {
//                         alert("没有找到信息")
//                     }
//                 }
//                 $("#table1").html(str1);
//                 $(document).ready(function(){
//                 $("tr：odd").attr("background-color", "#ffffff");//为双数行表格设置背颜色素
//                 $("tr:even").css("background-color", "#d4e3e5");////为单数行表格设置背景颜色

//                // 鼠标移动变色
//               $("tr").mouseover(function(){
//               $(this).css("background-color"," #fee974");
    
// }); 
//     $("tr").mouseout(function(){
//     $(this).css("background-color","#c3dde0");
// });
// });

//             } else {
//                 alert("无法正确获取数据");
//             }
//         },
//         error: function () {
//         }
//     })
// })
// $(function(){
//     $.ajax({
//         type:"GET",
//         url:"ExcellentStar_queryAllExcellentStar",
//         data:{
//             // Manager:"geekmanager"
//         },
//         success:function(data){
//             var datateam = JSON.parse(data);
//             var l = datateam.length;
//             if (datateam[l-1].status == '1') {
//                 var str1="";
//                 for (var i = 0; i < datateam.length; i++){
//                     if(datateam[i].graGrade=="2013"){
//                   str1+= "<tr><td>"+datateam[i].graName+"</td><td>"+datateam[i].graPosion+"</td><td>"+datateam[i].graPlace+"</td>";
//                   }else {
//                         alert("没有找到信息")
//                     }
//                 }
//                 $("#table2").html(str1);
//                  $(document).ready(function(){
//                 $("tr：odd").attr("background-color", "#ffffff");//为双数行表格设置背颜色素
//                 $("tr:even").css("background-color", "#d4e3e5");////为单数行表格设置背景颜色

//                // 鼠标移动变色
//               $("tr").mouseover(function(){
//               $(this).css("background-color"," #fee974");
    
// }); 
//     $("tr").mouseout(function(){
//     $(this).css("background-color","#c3dde0");
// });
// });

//             } else {
//                 alert("无法正确获取数据");
//             }
//         },
//         error: function () {
//         }
//     })
// })
// $(function(){
//     $.ajax({
//         type:"GET",
//         url:"ExcellentStar_queryAllExcellentStar",
//         data:{
//             // Manager:"geekmanager"
//         },
//         success:function(data){
//             var datateam = JSON.parse(data);
//             var l = datateam.length;
//             if (datateam[l-1].status == '1') {
//                 var str1="";
//                 for (var i = 0; i < datateam.length; i++){
//                     if(datateam[i].graGrade=="2014"){
//                   str1+= "<tr><td>"+datateam[i].graName+"</td><td>"+datateam[i].graPosion+"</td><td>"+datateam[i].graPlace+"</td>";
//                   }else {
//                         alert("没有找到信息")
//                     }
//                 }
//                 $("#table3").html(str1);
//                  $(document).ready(function(){
//                 $("tr：odd").attr("background-color", "#ffffff");//为双数行表格设置背颜色素
//                 $("tr:even").css("background-color", "#d4e3e5");////为单数行表格设置背景颜色

//                // 鼠标移动变色
//               $("tr").mouseover(function(){
//               $(this).css("background-color"," #fee974");
    
// }); 
//     $("tr").mouseout(function(){
//     $(this).css("background-color","#c3dde0");
// });
// });

//             }  else {
//                 alert("无法正确获取数据");
//             }
//         },
//         error: function () {
//         }
//     })
// })
$(function(){
    $.ajax({
        type:"GET",
        url:"ExcellentStar_queryAllExcellentStar",
        data:{
            // Manager:"geekmanager"
        },
        success:function(data){
                var datateam = JSON.parse(data);
            console.log(datateam);
                var l = datateam.length;
            if (datateam[l-1].status == '1') {
                var str1="";
                var str2=""; 
                var str3="";
                for (var i = 0; i < datateam.length; i++){
                    if(datateam[i].graGrade=="2012"){
                      str1+= "<tr><td>"+datateam[i].graName+"</td><td>"+datateam[i].graPosion+"</td><td>"+datateam[i].graPlace+"</td>";
                    }
                    if (datateam[i].graGrade=="2013") {
                       str2+= "<tr><td>"+datateam[i].graName+"</td><td>"+datateam[i].graPosion+"</td><td>"+datateam[i].graPlace+"</td>";
                    }if (datateam[i].graGrade=="2014") {
                       str3+= "<tr><td>"+datateam[i].graName+"</td><td>"+datateam[i].graPosion+"</td><td>"+datateam[i].graPlace+"</td>";
                    }
                  }
                  $("#table1").html(str1);
                  $("#table2").html(str2);  
                  $("#table3").html(str3);
                  $(document).ready(function(){
                    $("tr：odd").attr("background-color", "#ffffff");//为双数行表格设置背颜色素
                    $("tr:even").css("background-color", "#d4e3e5");////为单数行表格设置背景颜色
                        // 鼠标移动变色
                    $("tr").mouseover(function(){
                    $(this).css("background-color"," #fee974");
                  }); 
                   $("tr").mouseout(function(){
                  $(this).css("background-color","#c3dde0");
                });
                 })
              }
                  else{
                        alert("没有获得正确数据");
                      }
        },
        error: function () {
    }    
     })
 })







// 自测


//  $(function(){
//     var data=[
// {
//         gra_name: "1",
//         gra_grade:"2012",
//         gra_postion:"前端",
//         gra_place:"百度"

// },
// {
//         gra_name: "1",
//         gra_grade:"2012",
//         gra_postion:"前端",
//         gra_place:"百度"
// },
// {
//         gra_name: "1",
//         gra_grade:"2013",
//         gra_postion:"前端",
//         gra_place:"百度"
// },
// {
//         gra_name: "1",
//         gra_grade:"2014",
//         gra_postion:"前端",
//         gra_place:"百度"
// }
// ];

               
//                var datateam = data;
//                 var str1="";
//                 var str2="";
//                 var str3="";
//                 for (var i = 0; i < datateam.length; i++){
//                     if(datateam[i].gra_grade=="2012"){
//                   str1+= "<tr><td>"+datateam[i].gra_name+"</td><td>"+datateam[i].gra_postion+"</td><td>"+datateam[i].gra_place+"</td>";
//                   }

                  
//                     if (datateam[i].gra_grade=="2013") {
//                        str2+= "<tr><td>"+datateam[i].gra_name+"</td><td>"+datateam[i].gra_postion+"</td><td>"+datateam[i].gra_place+"</td>";
//                     }
//                      if (datateam[i].gra_grade=="2014") {
//                        str3+= "<tr><td>"+datateam[i].gra_name+"</td><td>"+datateam[i].gra_postion+"</td><td>"+datateam[i].gra_place+"</td>";
//                     }


//                     }


                
//                 $("#table1").html(str1);
//                   $("#table2").html(str2);  
//                   $("#table3").html(str3);
//                 // $(document).ready(function(){
//     $("tr：odd").attr("background-color", "#ffffff");//为双数行表格设置背颜色素
//     $("tr:even").css("background-color", "#d4e3e5");////为单数行表格设置背景颜色

//     // 鼠标移动变色
//     $("tr").mouseover(function(){
//     $(this).css("background-color"," #fee974");
    
// }); 
//     $("tr").mouseout(function(){
//     $(this).css("background-color","#c3dde0");

// });
// })
