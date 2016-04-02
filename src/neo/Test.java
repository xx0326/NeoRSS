package neo;

import java.io.IOException;
import java.util.Iterator;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class Test {
	
	public static void main(String[] args) {
		try {
			/*Document doc = Jsoup.connect("http://news.mydrivers.com/1/476/476503.htm").get();
			String title = doc.title();
			System.out.println(title);
			
			Element news = doc.select("div.news_info").first();
			
			System.out.println(news.html());*/
			
			
			Document doc = Jsoup.connect("http://www.mydrivers.com/").get();
			String title = doc.title();
			System.out.println(title);
			
			Element news = doc.select("div.main_left").first();
			
			Elements a = doc.select("span.titl a");
			
			String oldHref;
			for (Element element : a) {
				oldHref = element.attr("href");
				element.attr("href","content.jsp?link="+oldHref);
			}
			
			
			System.out.println(news.html());
			
			
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}

}
