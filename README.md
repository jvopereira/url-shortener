# URL Shortener

## Overview
A minimal, fast and extensible URL shortener built with **Fastify**, **MongoDB**, and **Zod**. Slugs are generated using **nanoid**.

## Getting Started
### Prerequisites
Make sure you have:

- Node.js (v18 or later)
- MongoDB instance (local or cloud)

### Setup

1. Clone the repo:

    ```bash
    git clone https://github.com/yourusername/url-shortener.git
    cd url-shortener
    ```
2. Create a .env file inside the backend/ folder:
    
    ```env
    HOST=localhost
    PORT=3000

    ENVIRONMENT=development|production|test

    MONGODB_URI=mongodb://localhost:27017/your-db-name
    
    DEBUG=*
    ```

3. Install dependencies and run the server:
    
    ```bash
    cd backend
    npm install
    npm run dev   # Starts server with nodemon
    # or
    npm start     # Starts server without nodemon
    ```

## Stack
### Backend
- [Fastify](https://fastify.dev/) – Fast and low overhead web framework for Node.js
- [MongoDB](https://www.mongodb.com) + [Mongoose](https://mongoosejs.com/) – ODM for defining data models
- [Zod](https://zod.dev/) – Type-safe validation and schema generation
- [nanoid](https://github.com/ai/nanoid) – Secure URL-friendly unique ID generator
- [Swagger UI](https://swagger.io/tools/swagger-ui/) – Automatically generated API docs

Access Swagger documentation at: http://localhost:3000/docs

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.