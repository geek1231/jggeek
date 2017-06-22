$(function () {
    $.ajax({
        type: "GET",
        url: "MemberInfo_queryAllMemberInfo",
        data: {
            //Manager: "GeekManager"
        },
        success:function(data) {
            var data = JSON.parse(data);
            var l = data.length;

            if(data[l-1].status == "1") {

                for (var i = 0; i < 8; i++) {
                    var str11 = '';
                    str11 = '<li><a href=""><img width="233px" src="'
                        +data[i].personImgUrl+'" title="<h3>'
                        +data[i].personPosition+
                        '<br>'
                        +data[i].personName+
                        '</h3>" /></a></li>';
                    $('.ceshi').append(str11);
                }
            }
            else {
                alert("error!>>>>>");
            }
        }
    })
})
