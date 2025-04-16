# 🎬 OMDb (IMDB) API Documentation WORKSHOP – GET Requests Guide

The OMDb API is a RESTful web service that allows you to retrieve movie, series, and episode data using HTTP GET requests. Below are examples and parameters for accessing data with your personal API key.

## 🔑 API Key

**Your Key:** `{{🔑YOURKEY}}`  
You must include this key in all API requests as a query parameter:

*?apikey=`{{🔑YOURKEY}}`*

---

## 📌 Base URL

<https://www.omdbapi.com/>

Here you go — documentation in **Markdown** format covering everything we discussed about using the OMDb (IMDB) API via `GET` requests:

---
The OMDb API is a RESTful web service that allows you to retrieve movie, series, and episode data using HTTP GET requests. Below are examples and parameters for accessing data with your personal API key

## 📥 1. Get Movie by IMDb ID

**Params:**

| Key      | Description                    |
|----------|--------------------------------|
| `s`      | Search keyword                 |
| `page`   | Page number (1–100)            |
| `type`   | Optional: `movie`, `series`    |

---

**Required Params:**

| Key        | Description              |
|------------|--------------------------|
| `t` or `i` | Title or IMDb ID         |
| `Season`   | Season number            |
| `Episode`  | Episode number           |

---

## 🧪 Test It with Postman

---

## 🛠 Example Projects to Try

- Movie Search App (use `s` to fetch lists)
- Movie Details Page (use `i` or `t` to get info)
- Episode Browser for TV Shows (`Season` + `Episode`)
- Add Watchlist with Local Storage

---

## 📚 References

- Official API: [http://www.omdbapi.com/](http://www.omdbapi.com/)
- Docs: [OMDb API FAQ](https://www.omdbapi.com/)
