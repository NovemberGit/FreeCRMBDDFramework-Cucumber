//package stepDefinitions;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import junit.framework.Assert;
//
//@SuppressWarnings("deprecation")
//public class LoginStepDefinition {
//	
//	WebDriver driver;
//
//	@Given("^user is already on Login Page$")
//	public void user_already_on_login_page() throws InterruptedException{
//		
//		System.setProperty("webdriver.chrome.driver", "D:\\Work\\Project\\chromedriver_win32\\chromedriver.exe");
//		driver = new ChromeDriver();
//		driver.manage().window().maximize();
//		driver.get("https://freecrm.com/");
//		Thread.sleep(1000);
//		driver.findElement(By.xpath("//a[@class='btn btn-primary btn-xs-2 btn-shadow btn-rect btn-icon btn-icon-left']")).click();
//		
//		
//		
//		
//	}
//	
//	@When("^title of login page is Free CRM$")
//	public void title_of_login_page_is_free_crm() {
//		String title = driver.getTitle();
//		System.out.println(title);
//		Assert.assertEquals("Cogmento CRM", title);
//		
//	}
//	
//	@Then("^user enters \"(.*)\" and \"(.*)\"$")
//	public void user_enters_username_and_password(String username, String password) {
//		driver.findElement(By.name("email")).sendKeys(username);
//		driver.findElement(By.name("password")).sendKeys(password);
//		
//	}
//	
//	@Then("^user clicks on login button$")
//	public void user_clicks_on_login_button() throws InterruptedException {
//		driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();
//		Thread.sleep(1000);
//	}
//	
//	@Then("^user is on home Page$")
//	public void user_is_on_home_Page() throws InterruptedException  {
//		Thread.sleep(1000);
//		String title = driver.findElement(By.className("user-display")).getText();
//		System.out.println("Home Page Username: "+ title);
//		Assert.assertEquals("Bhargav Bhayani", title);
//	}
//	
//	@Then("^browser closes$")
//	public void browser_closes() {
//		driver.quit();
//	}
//	
//	@Then("^click on contacts page$")
//	public void click_on_contacts_page() {
//		driver.findElement(By.xpath("//i[@class='users icon']")).click();
//	}
//
//	@Then("^click on new contact button$")
//	public void click_on_new_contact_button() {
//		driver.findElement(By.xpath("//button[contains(text(),'Create')]")).click();
//	}
//
//	@Then("^add \"([^\"]*)\" and \"([^\"]*)\"$")
//	public void add_and(String firstname, String lastname) {
//		driver.findElement(By.xpath("//body/div[@id='ui']/div[@class='ui fluid container']/div[@class='ui fluid container']/div[@id='main-content']/div[contains(@class,'ui fluid container')]/div[@class='ui fluid container main-content']/form[@class='ui form segment custom-form-container']/div[1]/div[1]/div[1]/div[1]/input[1]")).sendKeys(firstname);
//		driver.findElement(By.xpath("//body/div[@id='ui']/div[@class='ui fluid container']/div[@class='ui fluid container']/div[@id='main-content']/div[contains(@class,'ui fluid container')]/div[@class='ui fluid container main-content']/form[@class='ui form segment custom-form-container']/div[1]/div[2]/div[1]/div[1]/input[1]")).sendKeys(lastname);
//	}
//
//	@Then("^click save button$")
//	public void click_save_button() {
//		driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();
//	}
//	
//	
//	
//
//	
//	
//	
//}
