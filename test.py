from selenium import webdriver

# Specify the path to the Chrome binary
chrome_options = webdriver.ChromeOptions()
chrome_options.binary_location = "/path/to/chrome/binary"

# Specify the path to the Chrome driver executable
chromedriver_path = "/path/to/chromedriver"

# Create a webdriver instance with the specified options and executable path
browser = webdriver.Chrome(options=chrome_options, executable_path=chromedriver_path)

# Navigate to the website
browser.get('https://749d5af0-7264-448f-a6b4-597678019634.id.firewalledreplit.co/')

# Find the button you want to click
my_button = browser.find_element_by_id('test')

# Click the button
my_button.click()

# Close the browser
browser.quit()