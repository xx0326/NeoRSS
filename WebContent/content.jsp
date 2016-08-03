<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="org.jsoup.Jsoup,org.jsoup.nodes.Document,org.jsoup.nodes.Element,org.jsoup.select.Elements"%>
<%
Document doc = Jsoup.connect(request.getParameter("link")).get();

String title = doc.title();

Element news = doc.select("div.news_info").first();

Element news_bt = doc.select("div#thread_subject").first();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><%=title %></title>
<link rel="stylesheet" href="css/news0408.css"/>
<style>
body{
	background-color: #f1f1f1;
	}
.news_info{
	width: 80%;
	margin: auto;
}
</style>
</head>
<body>
<div class="news_info">
<h2><%= news_bt.html() %></h2>
<hr/>
<%= news.html() %>
</div>
</body>
</html>