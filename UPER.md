<h1>The Problem Solving Framework : 'UPER'</h1>

* U = "Understand"
* P = "Plan"
* E = "Execute"
* R = "Reflect" / "Refactor"

<h2>1. Understanding the Problem</h2>
* I read carefully and tried to understand that we had to create inventory management,
* website and we have to have at least 10 items. App must be 
* created using create-react-app. We can create and keep the data in local 
* machine so we don't have to build backend and database. Each product should be object and 
* must have name, serial #, price, manufacturer and category properties. We have 
* to be able to display all products and add to the cart. 
* We have to show some error if customer wants to purchase more than what we have 
* in stock or it is not available in stock. 
* We also need to have Staff view where owner can add, delete items or edit existing
* items. 
*
*
*

<h2>
    2. Planning the Solution
</h2>
* I read github repo requirement, and I cerifully thought about data. Based 
* on my experience I always plan to build my data before I write a line of code. I 
* crated react-app and started creating my data which is an array of object 
* ( each object represents one product ) and images 
* property is an array holding 4 images. After that I created wireframe and 
* component tree using my Lucidchart account. 
*
*
*

<h2>
    3. Executing the Plan
</h2>
* I followed my plan, I created my data. I wanted to have 4 different images for one single product because
* I was going to sell t-shirts so used google to find the images and used their links. After setting up the data I set up the redux for 
* managing my state. That is where I face blocker. Somehow my reducer function was not firing. I spent 2-3 hours to to debug it and 
* finally I was able to use useDispatch function ( imported from react-redux ) to make it work. It was little bit different approach but 
* it was working and giving me the result. 
* Then I started creating components, Header => Drowdown menu ( styling and making the dropdown menu work took me a while ), 
* then I created all other Components along with routes. I referenced my component tree to plan the data flow. 
*

<h2>
    4. Reflection / Refactor
</h2>
* Actually I have been checking the result every time when I add the piece of code ( it can be function or state or even a tag with styling )
* It is very helpful because that way I know if I have a error where the error is. 
* But sometimes my newly added code doesn't word with other code that I wrote earlier so I have to refactor the other code too. 
*
*
*
*
*