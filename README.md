# Toyota Engine Intelligence Explorer

A lightweight, no-backend web app for browsing Toyota engine families, engine codes and typical donor vehicle applications.

## Run locally

Open `index.html` directly in a browser, or run a local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy with GitHub Pages

1. Create a new GitHub repository.
2. Upload/push the contents of this folder to the repository root.
3. In GitHub: **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.

## Structure

- `index.html` — app shell
- `styles.css` — responsive styling
- `data.js` — engine database
- `app.js` — filtering, navigation and detail views

## Important

Vehicle applications and status labels are research-oriented starter data. Verify exact model year, market, trim, ECU and engine variant compatibility before using the data for purchasing decisions.

## Suggested next data tables

- Suppliers
- Source markets
- Price observations
- Vehicle applications with model years
- Freight and landed cost
- Destination markets
- Sales / inventory velocity
