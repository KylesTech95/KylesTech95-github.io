# Welcome
I give full permission to use my organized data to make you a better developer!

Datasets are locate inside the **data** folder

## Import your own functions:
1. Access the data/math_api.js
2. view or create your own function.
3. Add **export** the function.
### math_api.js
```export function randomFunc(){console.log('This is an exported function')}```
4. Access **math.js** & import your exported function.
### math.js
```import randomFunc from "./data/math_api.js"```
```randomFunc()```
5. **Tip**: If importing multiple dependencies, wrap your depenedencies in ```{}``` and separate with commas.
6. There you go, your exported, customized functions should be working with your HTML.


