## Mid Term Project GIGIH Fullstack Engineer

## Table Of Content

* [Database Structure](#database-structure)
	* [Videos Collection](#videos-collection)
	* [Comment Collection](#comment-collection)
* [API Structure](#api-structure)
* [API Request Response](#api-request-response)
* [How To Run](#how-to-run-in-local)

## Database Structure
This project have Videos collection

### Videos Collection

```
  {
    _id             : String
    videoThumbnail  : String
    videoTitle      : String
    product : [
      {
        _id         : String
        productLink : String
        productTitle: String
        productPrice: Number
      }
    ]
    comment : [
        _id             : String
        commentUsername : String
        commentContent  : String
    ]
  }
 ```

## API Structure

Endpoint ready to use

```
GET   /         #Get All Videos
GET   /videos   #Get Video By ID
GET   /videos   #Get Product
GET   /videos   #Get Comment
POST  /         #Post New Video
PATCH /videos   #Patch New Comment in Video

get     /users           #Get All Users
get     /users/:id       #Get User By ID
post    /users           #Add User
patch   /users/:id       #Update User
delete  /users/:id       #Delete User
```

## API Request Response

### GET /videos

----
Return json `message `
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  message: 'API is running, you can use this API with /',
}
```

### GET Video By ID /videos/:id

----
Return videos associated with the specified id.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
  {
    _id             : String
    videoThumbnail  : String
    videoTitle      : String
    product : [
      {
        _id         : String
        productLink : String
        productTitle: String
        productPrice: Number
      }
    ]
    comment : [
        _id             : String
        commentUsername : String
        commentContent  : String
    ]
  }
```

### GET Product /videos/:id

----
Return all product from databases.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  product : [
      {
        _id: String
        productLink     : String
        productTitle    : String
        productPrice    : Number
      }
    ]
}
```


### GET Comment /videos/:id

----
Return all product from databases.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  comment : [
        _id : String
        commentUsername : String
        commentContent  : String
    ]
}
```

### PATCH (Add) Comment /videos/:id

----
Creates a new Comment and returns the new object.
* **URL Params**  
  None
* **Data Params**  
  ```
  {
    commentUsername :   string
    commentContent  :   String
  }
  ```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  message: "Comment added successfully",
  data : {
    commentUsername,
    commentContent
  }
}
```

## How To Run In Local

### Installation

This project use Node version 18.17

Make sure to install the dependencies:
```
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install

```

### Development Server
Start the development server on http://localhost:5000

```
# yarn
yarn start

# npm
npm start

# pnpm
pnpm start
```
