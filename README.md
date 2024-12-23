
   <h1 align="center">Link shortener</h1>

## 📖 Description
This project allows you to create shortened links and redirect URLs efficiently. It is ideal for web applications, analytical reports or any scenario that requires short, trackable links.

## Main Features
- Creation of shortened URLs.
- Link redirection.
- Access analysis (e.g. clicks).
- REST API for integration with other services.


## ⚙️ Prerequisites
Before you begin, you will need to have the following items installed on your machine:

- Node.js (v16 or upper)
- npm ou yarn

## Installation
Clone this repository:
```bash
git clone https://github.com/Romilton-Costa/url-shortener/
```
```bash
cd link-shortener
```
Install dependencies:

```bash
npm install
```
## 🔧 settings
Rename the file.env.example to .env:

```bash
mv .env.example .env
```
Configure environment variables in the file .env:
```bash
DATABASE_URL=postgresql://user:password@localhost:5432/link_shortener
```
Run database migrations (if applicable):

```bash
npm run migration:run
```
🚀 Use
Start the server:

```bash
npm run start
```
Access the application in http://localhost:3000.

Use the API documentation (ex.: Swagger) in http://localhost:3000/api.

## 📂 Project Structure
```plaintext
src/
├── app.module.ts        # Main module
├── link/                # Link shortening module
│   ├── link.controller.ts
│   ├── link.service.ts
│   ├── link.entity.ts
├── common/              #Shared modules and utilities
└── ...
```
## 📖 API routes
POST /links
Creates a new shortened link.

Request Body:

```json

{
  "url": "https://example.com"
}
```
Response:

```json

{
  "shortUrl": "http://localhost:3000/abc123"
}
```
GET /:shortUrl
Redirects to the original URL.

Example: http://localhost:3000/abc123 → https://example.com
## 🛠️ Technologies Used
- NestJS
- TypeScript

