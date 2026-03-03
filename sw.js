git init
git add .
git commit -m "Initial ScoreMyPack PWA"
git remote add origin https://github.com/YOURUSERNAME/scoremypack.git
git push -u origin main
```

### 5. Enable GitHub Pages
- Go to your repo → **Settings** → **Pages**
- Source: **Deploy from branch** → `main` → `/ (root)`
- Save — GitHub gives you a URL like `yourusername.github.io/scoremypack`

### 6. Point Your .co.in Domain to GitHub Pages
In your domain registrar's DNS settings, add:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | yourusername.github.io |

Then in GitHub Pages settings → add your custom domain → e.g. `scoremypack.co.in`

GitHub will also **auto-provision an SSL certificate** via Let's Encrypt — so you get HTTPS for free, which is required for camera access on mobile.

---

## One Important Thing — The API Key

Right now the app calls the Anthropic API directly from the browser. This means **your API key is exposed** to anyone who views the page source. For a public deployment you have two options:

| Option | Complexity | Cost |
|--------|-----------|------|
| **Keep as-is** | Zero | Fine for personal/demo use — just monitor usage |
| **Build a small backend** | Medium | A Cloudflare Worker or Vercel serverless function acts as a proxy — hides the key |

For now, a Cloudflare Worker proxy is the cleanest free solution if you want to protect the key publicly.

---

## Summary Path
```
Your HTML file → rename to index.html
→ Push to GitHub repo
→ Enable GitHub Pages
→ Add DNS records at your registrar
→ Add custom domain in GitHub Pages settings
→ Done — live at scoremypack.co.in in ~10 mins
