# Spandan 2K26

Website for **Spandan**, the annual national-level fest of Prestige Institute of Management & Research (PIMR), Gwalior. Plain HTML, CSS and JavaScript, no build step.

## Run it

Open `spandanFront/openning.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000/spandanFront/openning.html`.

## Structure

- `spandanFront/` - pages. `openning.html` is the home page, every other page is one event.
- `css/` - `firstPage.css` (home), `it_quize.css` + `event_extra.css` (event pages), `styleforevents.css`.
- `spandanFront/event.js` - countdown and poster zoom used on event pages.
- `events/` - posters and videos.
- `profile_lab/` - more posters and a profile page.

## Adding an event

Copy an existing event page (e.g. `best_manager.html`), change the details, add a card for it in `openning.html`, and set `data-date` on `#countdown` to the event date and time.

## To do

- Registration links for events that only have a QR code on the poster.
- New date for Human Snakes & Ladders (poster is from 2025).
- Dates for DJ Night, Shahi Andaz and Kirdaar.
