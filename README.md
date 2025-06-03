# URL Shortener
![GitHub repo size](https://img.shields.io/github/repo-size/jvopereira/url-shortener)
![GitHub contributors](https://img.shields.io/github/contributors/jvopereira/url-shortener)
![GitHub stars](https://img.shields.io/github/stars/jvopereira/url-shortener?style=social)
![GitHub forks](https://img.shields.io/github/forks/jvopereira/url-shortener?style=social)
![GitHub issues](https://img.shields.io/github/issues/jvopereira/url-shortener)
![GitHub license](https://img.shields.io/github/license/jvopereira/url-shortener)

## Overview

A minimal, fast and extensible URL shortener built with **Fastify**, **MongoDB**, and **Zod**. Slugs are generated using **nanoid**.

Now structured as a **monorepo** using [Turborepo](https://turbo.build/repo) with separate apps for backend and frontend.

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

2. Install dependencies (root-level):

    ```bash
    npm install
    ```

3. Create a `.env` file in `apps/server/` based on the provided example:

    ```env
    # apps/server/.env

    HOST=localhost
    PORT=3000

    ENVIRONMENT=development|production|test

    MONGODB_URI=mongodb://localhost:27017/your-db-name

    DEBUG=*
    ```

4. Run the development servers:

    ```bash
    # From the root of the monorepo
    npm run dev
    ```

    This will start both backend and frontend in parallel using Turborepo.

---

## Stack

### Backend – `apps/server`
- [Fastify](https://fastify.dev/) – Fast and low overhead web framework for Node.js
- [MongoDB](https://www.mongodb.com) + [Mongoose](https://mongoosejs.com/) – ODM for defining data models
- [Zod](https://zod.dev/) – Type-safe validation and schema generation
- [nanoid](https://github.com/ai/nanoid) – Secure URL-friendly unique ID generator
- [Swagger UI](https://swagger.io/tools/swagger-ui/) – Automatically generated API docs

> Access Swagger docs at: [http://localhost:3000/docs](http://localhost:3000/docs)

### Frontend – `apps/client`
- [Vite](https://vitejs.dev/) – Lightning-fast dev server and bundler
- [React](https://react.dev/) – UI library for building modern interfaces

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
