<%--
  Created by IntelliJ IDEA.
  User: ASUS
  Date: 2017/2/20
  Time: 15:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>

  <h2>成员信息的添加查询</h2>
  <br>
  <form action="MemberInfo_add" method="post" enctype="multipart/form-data">
    职位：<input type="text" name="position">
    姓名:<input type="text" name="personName">
    个人信息：<input type="text" name="personInfo">
    上传图片：<input type="file" name="personImg">
    <button>上传</button>
  </form>
  <br>
  <a href="MemberInfo_queryAllMemberInfo">查询成员信息</a>
  <br>
  <a href="FMemberInfo_delete?id=11">删除成员信息</a>


  <br>
  <h2>作品信息的添加查询</h2>
  <br>
  <form action="Production_add" method="POST" enctype="multipart/form-data">
      作品名称：<input type="text" name="proName">
      作品信息：<input type="text" name="proInfo">
      上传图片：<input type="file" name="proImg">
      <button>上传</button>
  </form>
  <br>
  <a href="Production_queryAllProductionInfo">查询作品信息</a>
  <br>
  <a href="Production_delete?id=5">删除作品信息</a>


  <br>
  <h2>优秀之星的添加查询</h2>
  <form action="ExcellentStar_add" method="POST" enctype="multipart/form-data">
      毕业生名字：<input type="text" name="graName">
      年级：<input type="text" name="graGrade">
      职位：<input type="text" name="graPosion">
      毕业去向：<input type="text" name="graPlace">
      <button>上传</button>
  </form>
  <a href="ExcellentStar_queryAllExcellentStar">查询优秀之星</a>
  <br>
  <a href="ExcellentStar_delete?id=2">删除优秀之星</a>



  <br>
  <h2>学习中心的添加查询</h2>
  <form action="StudyCenter_add" method="POST" enctype="multipart/form-data">
      学习种类：<input type="text" name="stuKind">
      学习名字：<input type="text" name="stuName">
      学习图片：<input type="file" name="stuImg">

      学习介绍：<input type="text" name="stuIntr">
      浏览量：<input type="text" name="stuReco">
      <button>上传</button>
  </form>
  <br>
  <a href="StudyCenter_queryAllStudyCenter">学习中心查询</a>
  <br>
  <a href="StudyCenter_delete?id=1">删除学习家园</a>


  <br>
  <h2>反馈的添加查询</h2>
  <form action="Suggest_add" method="POST" enctype="multipart/form-data">
      名字：<input type="text" name="sugName">
      邮箱：<input type="text" name="sugEmail">
      电话：<input type="file" name="sugPhone">
      内容：<input type="text" name="sugContent">
      <button>上传</button>
  </form>
  <br>
  <a href="Suggest_queryAllSuggest">查询反馈信息</a>
  <br>
  <a href="Suggest_delete?id=3">删除反馈信息</a>

  </body>
</html>
