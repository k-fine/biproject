<%@page import="java.text.FieldPosition"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="f"%>
<%@ page session="false"%>

<html>
<head>
<title>Home</title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1">

<style>
header{
  width:1923px; 
  height: 80px;
  margin: 0 0 249.5px;
  padding: 0 0 0.5px;
}

.session{
 width: 1923px;
 height: 980px;
 
}

</style>
<link rel=" shortcut icon" href="resource/img/favicon.ico">
<link rel="icon" href="resource/img/favicon.ico">
</head>

<body>






<%
// 시간
StringBuffer stringBuffer = new StringBuffer();
Date now = new Date();

SimpleDateFormat simpleDateFormatT = new SimpleDateFormat("HH:mm:ssZ");
simpleDateFormatT.format(now, stringBuffer, new FieldPosition(0));
System.out.println(stringBuffer);

// 날짜
String pattern = "yyyy-MM-dd";
SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);

String date = simpleDateFormat.format(new Date());
System.out.println(date);

%>


<!-- header 부분에 manu 고정 -->
<header style=" border: 1px solid red ;" >


</header>


<!-- 메인 페이지 -->
<div class="session" style="border: 1px solid red ;" >
<div style="position: relative; top: 33.7%; left: 43.3%; right: 43.3%; bottom:52.4%;  border: 1px;"  >
<div > <%= stringBuffer  %> </div>
<div> <%= date %> </div> 
<div> BI Department </div>
</div>


  <ul class="gnb">
        <li><a>HOME</a></li>
        <li><a>ABOUT</a></li>
        <li><a>SERVICE</a></li>
        <li><a>PORTPOLIO</a></li>
        <li><a>CONTACT</a></li>
    </ul>

<!-- right side  radio -->
<form>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
</div>


</div>
<!-- 메인 페이지 끝 -->

<!-- 조직 페이지 -->
<div class="session">

<div style="top: 32.2%; right: 70.8%; bottom: 56.5; left: 13.5%; width: 15.6%; height: 12.2%" ></div>


</div>
<!-- 조직 페이지 끝 -->


<!-- 생일 페이지 -->
<div class="session">


</div>
<!-- 생일 페이지 끝 -->



<!-- 커뮤니티 페이지 -->
<div class="session">


</div>
<!-- 커뮤니티 페이지 끝 -->



<!-- 정보마당 페이지 -->
<div class="session" >
 


</div>
<!-- 정보마당 페이지 끝 -->













</body>
</html>

