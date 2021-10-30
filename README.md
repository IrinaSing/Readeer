# Readeer

## Getting Started

- `npm install`
- **run the server**

  - `npm run dev:api` - uses `nodemon` to restart the server each time you save a change

- **code checks**
  - `npm run format`
  - `npm run lint`
- **building documentation**
  - `npm run document`

## Deployment

### Local Development Deployment

- **building the frontend**

  - `npm run build` - uses `vite` to build an optimized frontend bundle

- **running the app**

  - `nodemon index.js` or `npm run dev:api` - uses `nodemon` to restart the server each time you save a change.

### How to Deploy the Application to the Production Environment

This part is needs to be done only once for the project. Once you have completed the above steps, you can deploy the application to the production environment directly.

- **Heroku**
  - From https://dashboard.heroku.com/apps create a new application.
  - After the application is created, click "Deploy" tab.
  - Choose "GitHub" as "Deployment method".
  - Select the repository you want to deploy.
  - Enable automatic deployment.
  - From "Settings" tab, you can add the config variables you need.

## Using The App

- **from postman**
  - `http://localhost:xxxx/api` - the main entry point to the API
- **from the browser**
  - `http://localhost:xxxx/` - serves `/client/index.html`, the chat client that will connect to your API routes.
  - you can also use the API routes, but it will be less helpful than in Postman

# The API Documentation

## Registration

Registers a new user to the system

- **URL**

/api/register

- **Method**

  `POST`

- **Body**

  ```
  {
    "email" : <email>,
    "username": <username>,
    "password" : <password>,
    "firstName": <firstName>,
    "lastName": <lastName>,
    "birthday" : <birthday>,\\ epoch in ms
    "city": <city>,
  }
  ```

- **Result**

```
{
  "username": <username>,
  "email" : <email>,
}
```

## Login

logins an existing user to the system

- **URL**

/api/login

- **Method**

  `POST`

- **Body**

  ```
  {
    "email" : <email>,
    "password" : <password>,
  }
  ```

- **Result**

```
{
  "token": <token>,
  "email": <email>,
  "username": <username>,
  "message": "Session created for user <username>",
  "userId": <userId>
}
```

## Book Operations

### Getting Information About

all the Books

searches the books without login. This search returns basic and limited information about books. This method limits the number of books returned to 30.

- **URL**

/api/books

- **Method**

  `GET`

- **Result**

```
[
  {
    "id":"6166dbab84c8cbd1a3169c49",
    "title":"The Very Hungry Caterpillar",
    "authors":["Eric Carle"],
    "isbn_10":"0399226907",
    "isbn_13":"978-0399226908",
    "description":"some useful string",
    "book_language":"en",
    "thumbnail":"http://books.google.com/books/content?id=oiMwvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  },
  {
    "id":"6166dbe484c8cbd1a3169c4a",
    "title":"Dutch Short Stories for Beginners",
    "authors":[""],
    "isbn_10":"1951949196",
    "isbn_13":"978-1951949198",
    "description":"Do you know what the hardest thing for a Dutch learner is? Finding PROPER reading material that they can handle...which is precisely the reason we've written this book!",
    "book_language":"en",
    "thumbnail":"http://books.google.com/books/content?id=NmuhzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  },
  {
    "id":"6166dc8b84c8cbd1a3169c4b",
    "title":"Zauberhafter Malblock: Mit Stickern",
    "authors":["Monika Finsterbusch","Julia Gerigk"],
    "isbn_10":"3649634171",
    "isbn_13":"978-3649634171",
    "description":"In diesem Malblock finden Einhorn-Fans 24 hübsche Ausmalmotive und eine Seite mit zauberhaften Stickern.",
    "book_language":"de",
    "thumbnail":"https://via.placeholder.com/200x200"
  }
]
```

### Getting Information About a Specific Book

searches a book with given id. This search returns basic and limited information about the book.

- **URL**

/api/books/:bookId

- **Method**

  `GET`

- **URL Params**

  **Required:**

  `bookId=[integer]`

- **Example**
  api/books/6166dbab84c8cbd1a3169c49

- **Result**

```

{
  "id":"6166dbab84c8cbd1a3169c49",
  "title":"The Very Hungry Caterpillar",
  "authors":["Eric Carle"],
  "isbn_10":"0399226907",
  "isbn_13":"978-0399226908",
  "description":"some useful string",
  "rating":5,
  "pageCount":26,
  "book_language":"en"
}

```

### Query Searching the Books

Searches the books using a filter or fuzzy search. In the body of the request a "filter" object should be defined. In the filter object specified property and value pairs must be defined. If more than one property is specified then all properties in the filter object is united with "AND" operator to perform the search.

If there is a 'text' property in the filter object then the filter only does the fuzzy search and ignores the other properties. In fuzzy search the words in text property are used separately and search is performed in the fields of "title", "description" and "author".

If there is a "-" before a word in the text property, then the fuzzy search excludes the search results which have that word.

Fuzzy search only returns limited information about the book. This method limits the number of books returned to 30.

- **URL**

  /api/books/

- **Method:**

  `POST`

- **Body**

  ```
  {
    "filter":{
        "condition":"Good"
    }
  }
  ```

- **Result:**

  ```
  [
    {
      "id":"6166dbe484c8cbd1a3169c4a",
      "title":"Dutch Short Stories for Beginners",
      "authors":[""],
      "isbn_10":"1951949196",
      "isbn_13":"978-1951949198",
      "description":"Do you know what the hardest thing for a Dutch learner is? Finding PROPER reading material that they can handle...which is precisely the reason we've written this book!",
      "book_language":"en",
      "thumbnail":"http://books.google.com/books/content?id=NmuhzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    {
      "id":"6166dc8b84c8cbd1a3169c4b",
      "title":"Zauberhafter Malblock: Mit Stickern",
      "authors":["Monika Finsterbusch","Julia Gerigk"],
      "isbn_10":"3649634171",
      "isbn_13":"978-3649634171",
      "description":"In diesem Malblock finden Einhorn-Fans 24 hübsche Ausmalmotive und eine Seite mit zauberhaften Stickern.",
      "book_language":"de",
      "thumbnail":"https://via.placeholder.com/200x200"
    }
  ]
  ```

- **Body**

  ```
  {
    "filter":{
        "condition":"Good",
        "book_language":"de"
    }
  }
  ```

- **Result:**

  ```
  [
    {
      "id":"6166dc8b84c8cbd1a3169c4b",
      "title":"Zauberhafter Malblock: Mit Stickern",
      "authors":["Monika Finsterbusch","Julia Gerigk"],
      "isbn_10":"3649634171",
      "isbn_13":"978-3649634171",
      "description":"In diesem Malblock finden Einhorn-Fans 24 hübsche Ausmalmotive und eine Seite mit zauberhaften Stickern.",
      "book_language":"de",
      "thumbnail":"https://via.placeholder.com/200x200"
    }
  ]
  ```

- **Body**

  ```
  {
    "filter":{
        "condition":"Good",
        "book_language":"de",
        "text":"rose"
    }
  }
  ```

- **Result:**

  ```
  [
    {
      "id":"616cd621eaa3d564382b2057",
      "title":"Rose and Daisy",
      "authors":["Rosita Steenbeek"],
      "isbn_10":"9026328613",
      "isbn_13":"9789026328619",
      "description":"In haar nieuwe boek ‘Rose’ vertelt Rosita...",
      "book_language":"nl",
      "thumbnail":"http://books.google.com/books/content?id=wn1JCAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
      "id":"616cd09d6d4f3fa527efbf5e",
      "title":"Garden Alchemy",
      "authors":["Stephanie Rose","Julia Gerigk"],
      "isbn_10":"0760367094",
      "isbn_13":"9780760367094",
      "description":"Garden Alchemy is a hands-on guide for     do-it-yourself gardeners who want to turn their garden into gold using natural recipes and herbal concoctions ... ",
      "book_language":"en",
      "thumbnail":"http://books.google.com/books/content?id=IY_TDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
      "id":"616c321e79212d858e0e56e8",
      "title":"The Doctor",
      "authors":["Phd Gary a Ritchie","Julia Gerigk"],
      "isbn_10":"1796853631",
      "isbn_13":"9781796853636",
      "description":"If you grow roses you have no doubt encountered
      any manner of problems affecting your plants ...",
      "book_language":"nl",
      "thumbnail":"http://books.google.com/books/content?id=iaxZxQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    }
  ]
  ```

## User Operations

All the paths below require a valid token to be sent in the header.

### Getting User Details

- **URL**

  /api/users/:userId

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  `userId=[integer]`

- **Header**

```
{
  "Authorization": "Bearer [token]"
}
```

- **Result:**

  ```
  {
    "id":"61686cf01abb24ff1700d2d1",
    "username":"erkam",
    "firstName":"erkam",
    "lastName":"guresen",
    "birthday":"1634059471001",
    "email":"erkamguresen@vmail.com",
    "city":"Ghent"
  }
  ```

### Changing User Details

- **URL**

  /api/users/:userId

- **Method:**

  `PUT`

- **URL Params**

  **Required:**

  `userId=[integer]`

- **Header**

```
{
  "Authorization": "Bearer [token]"
}
```

- **Body**

  ```
  {
    "id":"61686cf01abb24ff1700d2d1",
    "username":"erkam guresen",
    "firstName":"erkam",
    "lastName":"guresen",
    "birthday":"1634059471001",
    "email":"erkamguresen@vmail.com",
    "city":"Ghent"
  }
  ```

- **Result:**

  ```
  {
    "id":"61686cf01abb24ff1700d2d1",
    "username":"erkam guresen",
    "firstName":"erkam",
    "lastName":"guresen",
    "birthday":"1634059471001",
    "email":"erkamguresen@vmail.com",
    "city":"Ghent"
  }
  ```

### Searching Books with Details

This search returns all details about the books. Searches the books using a filter or fuzzy search. In the body of the request a "filter" object should be defined. In the filter object specified property and value pairs must be defined. If more than one property is specified then all properties in the filter object is united with "AND" operator to perform the search.

If there is a 'text' property in the filter object then the filter only does the fuzzy search and ignores the other properties. In fuzzy search the words in text property are used separately and search is performed in the fields of "title", "description" and "author".

If there is a "-" before a word in the text property, then the fuzzy search excludes the search results which have that word.

Fuzzy search only returns limited information about the book. This method limits the number of books returned to 30.

- **URL**

  /api/users/:userId/books

- **Method:**

  `POST`

- **URL Params**

**Required:**

`userId=[integer]`

- **Header**

```
{
  "Authorization": "Bearer [token]"
}
```

- **Body**

  ```
  {
    "filter": {
      "condition":"Good"
    }
  }
  ```

- **Result:**

  ```
  [
    {
      "id":"6166dbe484c8cbd1a3169c4a",
      "title":"Dutch Short Stories for Beginners",
      "authors":[""],
      "isbn_10":"1951949196",
      "isbn_13":"978-1951949198",
      "description":"Do you know what the hardest thing for a ...",
      "rating":4.5,
      "pageCount":214,
      "book_language":"en",
      "book_userId":"616cab085244ed4da5db9624",
      "condition":"Good",
      "city":"Antwerpen",
      "thumbnail":"http://books.google.com/books/content?id=NmuhzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    {
      "id":"6166dc8b84c8cbd1a3169c4b",
      "title":"Zauberhafter Malblock: Mit Stickern",
      "authors":["Monika Finsterbusch","Julia Gerigk"],
      "isbn_10":"3649634171",
      "isbn_13":"978-3649634171",
      "description":"In diesem Malblock finden...",
      "rating":5,
      "pageCount":49,
      "book_language":"de",
      "book_userId":"61686cf01abb24ff1700d2d1",
      "condition":"Good",
      "city":"Ghent",
      "thumbnail":"https://via.placeholder.com/200x200"
    },
    {
      "id":"616c321e79212d858e0e56e8",
      "title":"The Doctor",
      "authors":["Phd Gary a Ritchie","Julia Gerigk"],
      "isbn_10":"1796853631",
      "isbn_13":"9781796853636",
      "description":"If you grow roses you have no doubt encountered...","rating":5,
      "pageCount":76,
      "book_language":"en",
      "book_userId":"61686cf01abb24ff1700d2d1",
      "condition":"Good",
      "city":"Ghent",
      "thumbnail":"http://books.google.com/books/content?id=iaxZxQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    }
  ]
  ```

- **Body**

  ```
  {
    "filter": {
      "condition":"Good",
      "text":"rose"
    }
  }
  ```

- **Result:**

  ```
  [
    {
      "id":"616cd621eaa3d564382b2057",
      "title":"Rose and Daisy",
      "authors":["Rosita Steenbeek"],
      "isbn_10":"9026328613",
      "isbn_13":"9789026328619",
      "description":"In haar nieuwe boek ‘Rose’ vertelt Rosita...",
      "rating":3.5,
      "pageCount":259,
      "book_language":"nl",
      "book_userId":"616cab085244ed4da5db9624",
      "condition":"Good",
      "city":"Antwerpen",
      "thumbnail":"http://books.google.com/books/content?id=wn1JCAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
      "id":"616cd09d6d4f3fa527efbf5e",
      "title":"Garden Alchemy",
      "authors":["Stephanie Rose","Julia Gerigk"],
      "isbn_10":"0760367094",
      "isbn_13":"9780760367094",
      "description":"Garden Alchemy is a hands-on guide for ...",      "rating":4.6,
      "pageCount":128,
      "book_language":"en",
      "book_userId":"61686cf01abb24ff1700d2d1",
      "condition":"Good",
      "city":"Ghent",
      "thumbnail":"http://books.google.com/books/content?id=IY_TDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
      "id":"616c321e79212d858e0e56e8",
      "title":"The Doctor",
      "authors":["Phd Gary a Ritchie","Julia Gerigk"],
      "isbn_10":"1796853631",
      "isbn_13":"9781796853636",
      "description":"If you grow roses you have no doubt ...",
      "rating":5,
      "pageCount":76,
      "book_language":"en",
      "book_userId":"61686cf01abb24ff1700d2d1",
      "condition":"Good",
      "city":"Ghent",
      "thumbnail":"http://books.google.com/books/content?id=iaxZxQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    }
  ]
  ```

### Getting Details of a Book

This search returns all details about the book.

- **URL**

  /api/users/:userId/books/:bookId

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  `userId=[integer]`

  `bookId=[integer]`

- **Header**

```
{
  "Authorization": "Bearer [token]"
}
```

- **Body**

- **Result:**

  ```
  {
    "id":"616cd09d6d4f3fa527efbf5e",
    "title":"Garden Alchemy",
    "authors":["Stephanie Rose","Julia Gerigk"],
    "isbn_10":"0760367094",
    "isbn_13":"9780760367094",
    "description":"Garden Alchemy is a hands-on guide for ...",
    "rating":4.6,
    "pageCount":128,
    "book_language":"en",
    "book_userId":"61686cf01abb24ff1700d2d1",
    "city":"Ghent",
    "thumbnail":"http://books.google.com/books/content?id=IY_TDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  }
  ```

### Adding a New Book

This route allows user to add a new book to system. It requires the userId in the route and the userId in the body to be the same

- **URL**

  /api/users/:userId/books/add

- **Method:**

  `POST`

- **URL Params**

  **Required:**

  `userId=[integer]`

  `bookId=[integer]`

- **Header**

```
{
  "Authorization": "Bearer [token]"
}
```

- **Body**

  ```
  {
    "title":"Goodnight Moon",
    "authors":["Margaret Wise Brown"],
    "isbn_10":"9780553565983",
    "isbn_13":"9785535659831",
    "book_description":"In this classic of children's literature, beloved by generations of readers and listeners, the quiet poetry of the words and the gentle, lulling illustrations combine to make a perfect book for the end of the day. In a great green room, tucked away in bed, is a little bunny. 'Goodnight room, goodnight moon.' And to all the familiar things in the softly lit room—to the picture of the three little bears sitting on chairs, to the clocks and his socks, to the mittens and the kittens, to everything one by one—the little bunny says goodnight. One of the most beloved books of all time, Goodnight Moon is a must for every bookshelf. This board book edition is the right size for little hands and is the perfect gift for baby showers, toddler birthday parties, and holidays.",
    "rating":-1,
    "userId": "61686cf01abb24ff1700d2d1",
    "pageCount":30,
    "condition": "Like New",
    "status": "Available",
    "availableAt": "Wed Oct 13 2021 15:10:13 GMT+0200 (Central European Summer Time)",
    "createdAt": "Wed Oct 13 2021 15:10:13 GMT+0200 (Central European Summer Time)",
    "book_language": "en"
  }
  ```

- **Result:**

  ```
  {
    "message":"Book added"
  }
  ```

  ### Changing Details of a Book

This route allows user to change the details of a book which is owned by the specified user.

- **URL**

  /api/users/:userId/books/:bookId

- **Method:**

  `PUT`

- **URL Params**

  **Required:**

  `userId=[integer]`

  `bookId=[integer]`

- **Header**

```
{
  "Authorization": "Bearer [token]"
}
```

- **Body**

  ```
  {

  }
  ```

- **Result:**

  ```
  {

  }
  ```

### Deleting a Book

This deletes the specified book if it is owned by the specified owner.

- **URL**

  /api/users/:userId/books/:bookId

- **Method:**

  `DELETE`

- **URL Params**

  **Required:**

  `userId=[integer]`

  `bookId=[integer]`

- **Header**

```
{
  "Authorization": "Bearer [token]"
}
```

- **Body**

  ```
  {

  }
  ```

- **Result:**

  ```
  {

  }
  ```

### Add a Book

This search returns all details about the book.

- **URL**

  /api/users/:userId/books

- **Method:**

  `POST`

- **URL Params**

  **Required:**

  `userId=[integer]`

  `bookId=[integer]`

- **Header**

```
{
  "Authorization": "Bearer [token]"
}
```

- **Body**

  ```
  {

  }
  ```

- **Result:**

  ```
  {

  }
  ```

### Request a Book

This search returns all details about the book.

- **URL**

  /api/users/:userId/request

- **Method:**

  `POST`

- **URL Params**

  **Required:**

  `userId=[integer]`

- **Header**

```
{
  "Authorization": "Bearer [token]"
}
```

- **Body**

  ```
  {

  }
  ```

- **Result:**

  ```
  {

  }
  ```
