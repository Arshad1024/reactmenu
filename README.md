React Menu<br/>
=======
**Component Definitions**<br/>
-----
**Menu:**
Menu component receives the data as props (list) [prepared earlier], loops through the keys and recursively calls itself. while adding the component "Close" whenever it finds child items. The closing and opening of Ul happens with addition of two css classes "visible, hidden". Function toggleClose() handles the addition of these two classes. toggleClose() expects the parameter which is ref of Close button in order for it to update the label if button between (close, Open). The update happens via callback

**Close:**
This component controls the closing and opening of Ul. when called, the ref of the Menu component is passed as OnClick prop.

**Data Preparation:**
The data for verticals, categories and courses are added as variables in data/data.js. Meanwhile a function is made which allows searching in the array using value and key and returns the array value, in our case returns the object.

I loop through the verticals first, for each vertical id, using my function i find out the categories and add both of them in new array called data which is later passed as prop to Menu component. Once all categories are added, i use Categories as object and iterate through it, and search in courses for each category id and add them against each category object. This way a tree is prepared which is later used in Menu prop
