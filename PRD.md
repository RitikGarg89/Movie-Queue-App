# MovieQueue — Product Requirements Document

## 1. Overview

**MovieQueue** is a movie watchlist web app that lets users discover popular movies, search for specific titles, and manage a personal queue of movies they plan to watch — with the ability to mark movies as watched once they're done.

Built as a personal project to practice full-stack React development (frontend-first, with future backend integration planned).

---

## 2. Problem Statement

People often hear about movies they want to watch but have no simple way to track them — notes get lost in chat messages, sticky notes, or memory. MovieQueue gives users a single, focused place to browse, search, and queue up movies they intend to watch.

---

## 3. Goals

- Let users discover movies without needing to know an exact title (via a default "popular" list)
- Let users search for a specific movie and get accurate results
- Let users save movies to a personal queue for later
- Let users track which queued movies they've already watched
- Keep the experience fast, clean, and usable on both desktop and mobile

### Non-goals (out of scope for v1)
- User accounts / authentication
- Social features (sharing queues, following friends)
- Streaming availability / "where to watch" data
- Ratings or reviews written by the user

---

## 4. Target User

Casual movie watchers who want a lightweight way to track "what to watch next" without needing an account or a heavier platform (like Letterboxd).

---

## 5. Core Features

### 5.1 Home / Discover Page
- On load, displays a default grid of **12 popular movies** (curated list, fetched by title from OMDb)
- Each movie is shown as a **card**: poster, title, year, rating, "+ Add" button
- A **search bar** lets the user search by movie title
  - On successful search: matching result(s) shown
  - On no match / invalid search: an **error card** is shown
  - The default popular-12 grid remains visible/accessible regardless of search state

### 5.2 Add to Queue
- Clicking **"+ Add"** on any movie card adds that movie to the user's Queue
- Duplicate adds (already-queued movie) are prevented
- Queue state is persisted in **localStorage**, so it survives page refresh

### 5.3 Queue Dashboard
- A separate page/view (`/queue`) accessible via navigation
- Displays two lists:
  - **Queued** — movies not yet watched
  - **Watched** — movies marked complete
- Each queue item can be:
  - Marked as **Watched** (moves from Queued → Watched)
  - **Removed** entirely from the queue

### 5.4 Loading & Error States
- Loading indicator shown during any API fetch (search, popular list load)
- Error card shown for failed searches or failed API calls (not just "no results", but genuine request failures too)

---

## 6. User Flows

**Flow 1 — First visit**
1. User lands on Home
2. Sees 12 popular movies immediately (loading state briefly shown)
3. Browses or searches

**Flow 2 — Search**
1. User types a movie title, submits
2. Loading state shown
3. Result found → movie card(s) shown
4. Result not found → error card shown, popular list remains visible

**Flow 3 — Queueing a movie**
1. User clicks "+ Add" on a card (from search or popular list)
2. Movie is added to Queue (status: `queued`)
3. Confirmation shown on the button (e.g., "Queued" state)

**Flow 4 — Managing the queue**
1. User navigates to "My Queue"
2. Sees Queued and Watched lists
3. Marks a movie watched → moves to Watched list
4. Removes a movie → disappears from list entirely

---

## 7. Data Model

```js
// A single queue item
{
  id: string,        // OMDb imdbID
  title: string,
  year: string,
  poster: string,    // poster URL
  rating: string,    // imdbRating
  status: "queued" | "watched"
}
```

Stored as an array under a single localStorage key (e.g., `movieQueue`).

---

## 8. Design System

- **Style**: clean, minimal, modern
- **Typography**: Space Grotesk (headings), Inter (body), IBM Plex Mono (metadata/numbers)
- **Color palette**: cool white background, deep navy text, cobalt-indigo primary accent, coral accent for queue actions, mint for "watched" state
- **Signature visual element**: queue items styled as **ticket stubs** with a perforated (dashed + notched) edge, reflecting the cinema theme
- Fully responsive (mobile-first grid, scales from 1 to 4 columns depending on screen width)

---

## 9. Tech Stack

| Layer | Choice |
|---|---|
| Frontend framework | React (Vite) |
| Styling | Tailwind CSS |
| HTTP client | Axios |
| Movie data | OMDb API |
| Routing | React Router |
| Shared state | React Context API |
| Persistence (v1) | localStorage |
| Persistence (future) | Express + MongoDB backend |

---

## 10. Future Scope (post-v1)

- Replace localStorage with a real Express/MongoDB backend for cross-device persistence
- User accounts (auth)
- Recommendations based on queue history
- Pagination / infinite scroll for search results
- Debounced live search (results update as you type, not just on submit)

---

## 11. Success Criteria

- User can go from landing on the site to having a movie queued in under 15 seconds
- No broken states: every fetch has a loading and error path
- Queue data survives a page refresh
- App is fully usable on a phone-sized screen without horizontal scrolling or oversized elements