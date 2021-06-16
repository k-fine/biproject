<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="f" %>
<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

.navbar {
  overflow: hidden;
  background-color: #333;
  coler: white;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: #6373E6;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
</head>
<body background="resources/img/universe.jpg" style="background-image: ">





<div class="navbar" style="align-content: center; ">
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#birth">Birth</a>
  <a href="#community">Community</a>


  <div class="dropdown">
    <button class="dropbtn"> etc  <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#food">food</a>
      <a href="#coffee">coffee</a>
      <a href="#">naver game</a>
    </div>
  </div> 
</div>

</body>
</html>
