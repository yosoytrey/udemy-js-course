// CODING CHALLENGE

Suppose that you're working in a small town administration, and you're in charge of two town elements:
    1. Parks
    2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets, but more parks and streets can be added at any time. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
    1. Tree density of each park in the town (formula: number of trees/park area)
    2. Average age of each town's park (formula: sum of all ages/number of parks)
    3. The name of the parks that have more than 2000 trees
    4. Total and average length of the town's streets
    5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, de-structuring, etc.

Elements
    - name
    - build year

Parks (extends element)
    - number of trees
    - size of park (in acres)
    - calculate: tree density (# of trees / area of park)
    - calculage: age of park (current year - build year)

Streets (extends element)
    - length of street (miles)
    - size of street

Street Size Hash
    - tiny, small, normal, big, huge

Parks
    1. City Park (1882, 3000 trees, 330 acres)
    2. Cheeseman Park (1898, 1880 trees, 81 acres)
    3. Washington Park(1899, 2305 trees, 165 acres)

Streets
    1. Market Street, 1887, 5 miles, small
    2. Washington St., 1934, 13 miles, normal
    3. Colfax Ave., 1886, 50 miles, huge
    4. Broadway Blvd, 1865, 20 miles, big
