package stepDefinitions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class DealStepDefinition {
	
	WebDriver driver;

	@Given("^user is already on Login Page$")
	public void user_already_on_login_page() throws InterruptedException{
		
		System.setProperty("webdriver.chrome.driver", "D:\\Work\\Project\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://freecrm.com/");
		Thread.sleep(1000);
		driver.findElement(By.xpath("//a[@class='btn btn-primary btn-xs-2 btn-shadow btn-rect btn-icon btn-icon-left']")).click();
		
		
		
		
	}
	
	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_free_crm() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Cogmento CRM", title);
		
	}
	
	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) {
		List<List<String>> data = credentials.raw();
		driver.findElement(By.name("email")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
		
	}
	
	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws InterruptedException {
		driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();
		Thread.sleep(1000);
	}
	
	@Then("^user is on home Page$")
	public void user_is_on_home_Page() throws InterruptedException  {
		Thread.sleep(1000);
		String title = driver.findElement(By.className("user-display")).getText();
		System.out.println("Home Page Username: "+ title);
		Assert.assertEquals("Bhargav Bhayani", title);
	}
	

	@Then("^click on deals page$")
	public void click_on_deals_page() throws InterruptedException {
		driver.findElement(By.xpath("//i[@class='money icon']")).click();
		Thread.sleep(1000);
		Actions actions = new Actions(driver);
		actions.moveToElement(driver.findElement(By.xpath("//body/div[@id='ui']/div[@class='ui fluid container']/div[@id='main-nav']/div[5]/button[1]/i[1]"))).build().perform();
		driver.findElement(By.xpath("//body/div[@id='ui']/div[@class='ui fluid container']/div[@id='main-nav']/div[5]/button[1]/i[1]")).click();
		actions.moveToElement(driver.findElement(By.xpath("//button[@class='ui small fluid positive toggle button']"))).build().perform();
		Thread.sleep(1000);
	}

	@Then("^user enters deal details$")
	public void user_enters_deal_details(DataTable dealData) throws InterruptedException {
		List<List<String>> dealValue = dealData.raw();
		driver.findElement(By.xpath("//div[@class='ui right corner labeled input']//input[@type='text']")).sendKeys(dealValue.get(0).get(0));
		driver.findElement(By.xpath("//body/div[@id='ui']/div[@class='ui fluid container']/div[@class='ui fluid container']/div[@id='main-content']/div[contains(@class,'ui fluid container')]/div[@class='ui fluid container main-content']/form[@class='ui form segment custom-form-container']/div[6]/div[1]/div[1]/div[1]/input[1]")).sendKeys(dealValue.get(0).get(1));
		Thread.sleep(1000);
		driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();
	}
	
	@Then("^browser closes$")
	public void browser_closes() {
		driver.quit();
	}

}
