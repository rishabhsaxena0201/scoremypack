# ScoreMyPack

A Progressive Web App (PWA) that scans packaged food nutrition labels and grades them A–E using the **Nutri-Score v2 algorithm**.

Built by **Thinking Lab**.

---

## How It Works

1. Open the app on your phone
2. Click **Camera** to photograph a nutrition label, or **Gallery** to upload one
3. Hit **Analyse** — the AI reads the label and calculates the Nutri-Score
4. Get a full breakdown: grade, nutrient bars, score math, and verdict

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | The entire PWA — all HTML, CSS, JS in one file |
| `manifest.json` | PWA manifest — enables "Add to Home Screen" |
| `sw.js` | Service worker — offline support & caching |
| `icon-192.png` | PWA icon (you need to add this) |
| `icon-512.png` | PWA icon large (you need to add this) |

> **Note:** Generate icons from your RS logo at https://realfavicongenerator.net

---

## Deployment (GitHub Pages + Custom Domain)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial ScoreMyPack PWA"
git remote add origin https://github.com/YOURUSERNAME/scoremypack.git
git push -u origin main
```

### 2. Enable GitHub Pages
- Repo → Settings → Pages
- Source: Deploy from branch → `main` → `/ (root)`

### 3. Add Custom Domain DNS Records
At your domain registrar, add these A records pointing to GitHub Pages:

```
A  @  185.199.108.153
A  @  185.199.109.153
A  @  185.199.110.153
A  @  185.199.111.153
CNAME  www  YOURUSERNAME.github.io
```

### 4. Set Custom Domain in GitHub Pages
- In GitHub Pages settings → Custom domain → enter `scoremypack.co.in`
- GitHub will auto-provision SSL (required for camera access)

---

## API Key

The app calls the Anthropic API directly from the browser.
- **For personal/demo use:** Fine as-is — just monitor your usage at console.anthropic.com
- **For public deployment:** Set up a Cloudflare Worker proxy to keep your key server-side

---

## Algorithm

Uses **Nutri-Score v2 (2023)** — the official European front-of-pack nutrition scoring system.

**Negative points (0–40):** Energy + Saturated Fat + Sugar + Sodium  
**Positive points (0–15):** Fibre + Protein + Fruits/Veg/Nuts  
**Final Score = Negative − Positive**

| Score | Grade |
|-------|-------|
| ≤ −1 | 🟢 A |
| 0–2 | 🟢 B |
| 3–10 | 🟡 C |
| 11–18 | 🟠 D |
| ≥ 19 | 🔴 E |

---

## Legal Notes

- **Nutri-Score** is a registered trademark of Agence nationale de santé publique (France). This app uses the algorithm for informational purposes only and is not affiliated with or endorsed by them.
- This app is not affiliated with or endorsed by **FSSAI**.
- Nutrition grades are for informational purposes only and do not constitute medical or dietary advice.

---

*Powered by Thinking Lab*
