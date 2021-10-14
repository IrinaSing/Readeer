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

- **Result**

```
{

}
```

## Login

logins an existing user to the system

- **URL**

/api/login

- **Method**

  `POST`

- **Result**

```
{

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

- **Result**

```

{

}

```

### Query Searching the Books

Creates a new message in the specified channel.

- **URL**

  /api/books/

- **Method:**

  `POST`

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

  }
  ```

- **Result:**

  ```
  {

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
