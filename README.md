# pshore-todo

A full-stack Todo application with a Node.js/Express/MongoDB backend and a React frontend.

---

## Project Structure

.
├── server/ # Backend (Node.js, Express, MongoDB)
└── todo-front/ # Frontend (React, Vite)

---

## Features

- Add, update, delete, and filter todos
- Mark todos as completed
- Filter by all, upcoming, or done

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm (or npm/yarn)
- MongoDB (local or remote)

---

### 1. Clone the repository

git clone <repo-url>
cd pshore-todo

### 2. Setup and Run the Server

cd server
pnpm install

- Configure your MongoDB connection in .env
- Start the server:

pnpm start

### 3. Setup and Run the Frontend

cd ../todo-front
pnpm install
pnpm dev

- The frontend will run on http://localhost:5173 (default Vite port).

## API Endpoints

The backend exposes the following endpoints under /api/todos:

- GET /api/todos - List all todos (supports ?filter=upcoming|done)
- POST /api/todos - Create a new todo
- PUT /api/todos/:id - Update a todo (mark as done, edit fields)
- DELETE /api/todos/:id - Delete a todo
