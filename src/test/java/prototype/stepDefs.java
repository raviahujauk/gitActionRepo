package prototype;

import cucumber.api.java.en.Given;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class stepDefs {

    static { System.setProperty("webdriver.chrome.driver" , "src/main/resources/driver/chromedriver.exe"); }
    WebDriver driver = new ChromeDriver();

    @Given("^I navigate to the site \"([^\"]*)\"$")
    public void i_navigate_to_the_site(String arg1) throws Exception {
        driver.get(arg1);
    }
}
