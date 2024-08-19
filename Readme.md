__Use of variables__

1. Product Information Management
2. Cart Functionality
3. User Session Management
4. Dynamic UI Updates
5. Handling Discounts and Offers
6. Form Validation
7. Integration with APIs
8. Tracking and Analytics

_Use of let keyword_

1. Cart Item Quantity: The quantity of items in the cart might change as users add or remove items.
2. Loop Iterators: When iterating over a list of products or categories.
3. Conditional Logic: When a variable’s value is intended to be changed within a block but not globally.

_Use of const keyword_

1. API Endpoints: URLs for API calls that don’t change.
2. Configuration Data: Application settings like tax rates, currency symbols, or default language.
3. DOM Elements: References to DOM elements that are not intended to be re-assigned.
4. Functions: Assigning functions to variables that won’t change.

__Functions__ are reusable code of components which can be called upon whenever required.
1. It can be used to _fetch an API_ in different components on web page.
2. It can be used to avoid the repetition of functionality making code more organized.

__Use of Global Scope__
1. Configuration Constants: Storing application-wide settings like API base URLs, tax rates, or currency symbols.
2. Libraries and Frameworks: Loading essential libraries (like jQuery or analytics scripts) that need to be   accessible throughout the app.

__Use of Functional Scope__
1. Encapsulating Logic: For functions that perform specific tasks like calculating prices, applying discounts, or managing cart items.
2. Preventing Name Conflicts: Ensuring that variables within a function do not interfere with variables in other parts of the application.

__Use of Block Scope__
1. Loop Variables: Containing loop counters or variables within loops to avoid conflicts.
2. Conditional Logic: Ensuring that variables are only available within an if, else, or switch block.
3. Temporary Calculations: Limiting the scope of variables used for temporary calculations or operations.
