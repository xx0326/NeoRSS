<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@page import="org.jsoup.Jsoup,org.jsoup.nodes.Document,org.jsoup.nodes.Element,org.jsoup.select.Elements"%>

<%
Document doc = Jsoup.connect("http://www.mydrivers.com/").get();
String title = doc.title();

Element news = doc.select("div.main_left").first();

doc.select("div.title").first().html("<h2>快科技全部资讯<h2><hr/>");

Elements a = doc.select("span.titl a");

String oldHref;
for (Element element : a) {
	oldHref = element.attr("href");
	element.attr("href","content.jsp?link="+oldHref);
	element.attr("target","_blank");
}
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>主页</title>
<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
<script src="js/js_v6.js"></script>
<style>
body{
	background-color: #f1f1f1;
	margin: auto;
}
.title li{
	float: right;
}
.news_info1 {
    width: 50%;
    float: left;
}
.t{
	float: right;
}
a{
text-decoration:none;
}
</style>
</head>
<body>
<%=news.html() %>
</body>
</html>