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
  mes"sage: "Session created for user <username>",
}
```

## Book Operations

### Getting Information About

all the Books

searches the books without login. This search returns basic and limited information about books

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
    "isbn_10":"0399226907",
    "isbn_13":"978-0399226908",
    "description":"some useful string",
    "book_language":"en"
  },
  {
    "id":"6166dbe484c8cbd1a3169c4a",
    "title":"Dutch Short Stories for Beginners",
    "isbn_10":"1951949196",
    "isbn_13":"978-1951949198",
    "description":"Do you know what the hardest thing for a Dutch learner is? Finding PROPER reading material that they can handle...which is precisely the reason we've written this book!",
    "book_language":"en"
  },
  {
    "id":"6166dc8b84c8cbd1a3169c4b",
    "title":"Zauberhafter Malblock: Mit Stickern",
    "isbn_10":"3649634171",
    "isbn_13":"978-3649634171",
    "description":"In diesem Malblock finden Einhorn-Fans 24 hübsche Ausmalmotive und eine Seite mit zauberhaften Stickern."
    "book_language":"de"
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

Fuzzy search only returns limited information about the book. To

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
      "isbn_10":"1951949196",
      "isbn_13":"978-1951949198",
      "description":"Do you know what the hardest thing for a Dutch learner is? Finding PROPER reading material that they can handle...which is precisely the reason we've written this book!",
      "book_language":"en"
    },
    {
      "id":"6166dc8b84c8cbd1a3169c4b",
      "title":"Zauberhafter Malblock: Mit Stickern",
      "isbn_10":"3649634171",
      "isbn_13":"978-3649634171",
      "description":"In diesem Malblock finden Einhorn-Fans 24 hübsche Ausmalmotive und eine Seite mit zauberhaften Stickern.",
      "book_language":"de"
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
      "isbn_10":"3649634171",
      "isbn_13":"978-3649634171",
      "description":"In diesem Malblock finden Einhorn-Fans 24 hübsche Ausmalmotive und eine Seite mit zauberhaften Stickern.",
      "book_language":"de"
    }
  ]
  ```

- **Body**

  ```
  {
    "filter":{
        "condition":"Good",
        "language":"de",
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
      "isbn_10":"9026328613",
      "isbn_13":"9789026328619",
      "description":"In haar nieuwe boek ‘Rose’ vertelt Rosita...",
      "book_language":"nl"
    },
    {
      "id":"616cd09d6d4f3fa527efbf5e",
      "title":"Garden Alchemy",
      "isbn_10":"0760367094",
      "isbn_13":"9780760367094",
      "description":"Garden Alchemy is a hands-on guide for     do-it-yourself gardeners who want to turn their garden into gold using natural recipes and herbal concoctions ... ",
      "book_language":"en"
    },
    {
      "id":"616c321e79212d858e0e56e8",
      "title":"The Doctor",
      "isbn_10":"1796853631",
      "isbn_13":"9781796853636",
      "description":"If you grow roses you have no doubt encountered
      any manner of problems affecting your plants ...",
      "book_language":"nl"
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

### Getting Books Details

This search returns all details about the books.

- **URL**

  /api/users/:userId/books

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

  ```
  {

  }
  ```

- **Result:**

  ```
  {

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
