# WTWR (What to Wear?) — Backend

This project is the backend service for the **WTWR (What to Wear?)** web application.  
It provides a secure, RESTful API built with **Node.js**, **Express**, and **MongoDB**, allowing users to manage their clothing items, authentication, and wardrobe preferences.

---

## Features

### User Management

- **POST /signup** — Register a new user (name, avatar, email, password).
- **POST /signin** — Login with email and password to receive a JWT token.
- **GET /users/me** — Get details of the currently authenticated user.
- **PATCH /users/me** — Update your name and avatar.

### Clothing Items

- **GET /items** — Fetch all clothing items (public).
- **POST /items** — Add a new clothing item (authenticated users only).
- **DELETE /items/:itemId** — Delete your own clothing item only (authorization enforced).
- **PUT /items/:itemId/likes** — Like an item.
- **DELETE /items/:itemId/likes** — Remove like from an item.

---

## Authentication & Authorization

- JWT-based authentication using `Bearer <token>` in the `Authorization` header.
- Protected routes use custom `auth` middleware.
- Users can only modify or delete their own items (checked via item ownership).

---

## ⚙️ Error Handling

| Code | Meaning               | Description                             |
| ---- | --------------------- | --------------------------------------- |
| 400  | Bad Request           | Invalid data or malformed ID            |
| 401  | Unauthorized          | Missing or invalid authentication token |
| 403  | Forbidden             | Attempt to delete another user's item   |
| 404  | Not Found             | Resource does not exist                 |
| 409  | Conflict              | Email already exists                    |
| 500  | Internal Server Error | Server-side error                       |

---

## Tech Stack

- **Node.js** — Runtime environment
- **Express.js** — Web framework
- **MongoDB + Mongoose** — Database and ODM
- **JWT (jsonwebtoken)** — Authentication
- **bcryptjs** — Password hashing
- **Validator.js** — Input validation
- **Helmet** — Security
- **ESLint (Airbnb)** — Code linting

---

## Installation & Setup

1.  **Clone the repo**
    ```bash
    git clone https://github.com/prakruthin/se_project_express.git
    cd se_project_express
    ```
2.  **Install dependencies**
    ```bash
    npm install
    ```
3.  **Run MongoDB locally**
    Make sure MongoDB is running on:

    ```bash
    mongodb://127.0.0.1:27017/wtwr_db
    ```

4.  **Start the server**

    ```bash
    npm run start
    ```

    Or, for development with hot-reload:

    ```
    npm run dev
    ```

## Testing with Postman

You can test the routes using Postman:

Base URL: http://localhost:3001

Example:

```
 GET http://localhost:3001/items
```

```
POST /items
Headers: Authorization: Bearer <token>
Body:
{
"name": "Blue Jacket",
"weather": "cold",
"imageUrl": "https://example.com/jacket.png"
}
```

## Screenshots

### ClothingItems

![](./screenshots/clothingItems.png)
![](./screenshots/users.png)
![](./screenshots/createUser.png)

## Future Improvements

- Cloud storage for images.

- CI/CD pipeline with GitHub Actions.
