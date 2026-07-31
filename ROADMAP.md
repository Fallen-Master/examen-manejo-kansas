# Roadmap — de sitio familiar a sitio nacional
### Expanding *Examen de Manejo* from one family to Spanish speakers across the US

*Prepared July 2026 · Rafael Gomez · [fallen-master.github.io/examen-manejo-kansas](https://fallen-master.github.io/examen-manejo-kansas/)*

---

## The opportunity

There are about **11.1 million Mexican-born people living in the US**, and Spanish speakers more broadly number far more. Most states offer the written driving test in Spanish — but the free practice sites are mostly English-first, ad-heavy, or machine-translated. Your site is already Spanish-first, warm in tone, and free.

Where those people live matters, because the test is state-specific:

| State | Share of Mexican immigrants | Agency that gives the test |
|---|---|---|
| California | ~35% | DMV |
| Texas | ~22% | DPS |
| Illinois | ~6% | Secretary of State (SOS) |
| Arizona | ~5% | MVD |
| Florida | (top 5) | FLHSMV |

Those five states hold **~70% of all Mexican immigrants in the US**. Adding Texas and California alone roughly covers the majority of the potential audience.

---

## What you already have

| Asset | Status |
|---|---|
| 199 questions, ES + EN | Done, verified against the Kansas handbook |
| Study mode + 25-question DMV simulation | Done |
| Official public-domain sign images (MUTCD) | Done |
| 17 cartoon memes, gendered Spanish captions | Done |
| Free hosting, live on the internet | Done |
| Mobile-friendly, large text for older users | Done |

**The engine is built.** Everything below is content, reach, and polish — not a rewrite.

---

## How much of the question bank is reusable?

I audited all 199 questions:

- **133 questions (67%) are fully portable** — road signs, right-of-way, skids, hydroplaning, blind spots, following distance, fatigue. A stop sign means the same thing in every state.
- **~66 questions (33%) contain a state-specific value** — speed limits, parking distances, license renewal periods, child seat ages, the agency's name, move-over rules.

**This is the key insight for scoping.** A new state does *not* mean writing 199 new questions. It means researching roughly **30–40 specific facts** and swapping them into templates. Texas is maybe a day of careful research, not a month.

---

## Phase 1 — Make it shareable *(a weekend, ~$12/year)*

The site works, but nothing about it invites strangers or survives being forwarded on WhatsApp.

1. **Custom domain** — `examendemanejo.com` or similar, ~$12/year at Namecheap/Cloudflare. Points at GitHub Pages; hosting stays free. A real domain is the difference between a link people trust and one they don't.
2. **Make it installable (PWA)** — add a manifest and service worker so it installs to the home screen and **works with no internet**. This matters enormously for users on limited prepaid data plans, and it's maybe 60 lines of code.
3. **Share button** — one tap to send via WhatsApp, which is how this audience actually shares things.
4. **Open Graph preview** — so a shared link shows a nice card with a cartoon, not a bare URL.
5. **Spanish SEO** — real page titles, meta description, and a sitemap targeting how people actually search: *"examen de manejo en español"*, *"examen escrito DMV español [estado]"*, *"preguntas del examen de manejo 2026"*.

**Why first:** all of it applies no matter how many states you add later, and it's the cheapest work with the highest payoff.

---

## Phase 2 — Rethink the mascot *(a few hours)*

Right now the memes say **"¡ESE ES MI SUEGRO!"** That's perfect for your family and confusing for a stranger in Houston.

Three options, in order of my preference:

1. **"El cuñado"** — reframe the character as the brother-in-law. The *cuñado* is a universally understood figure in Mexican humor: the guy with an opinion about everything, especially driving. Same images, new captions, instantly gets a laugh from someone who's never met you. You keep a personal, human, non-corporate feel that no competitor has.
2. **Widen the role picker** — keep suegro/suegra and add *papá, mamá, tío, amigo, cuñado*. More work, more personal, and people love seeing themselves.
3. **Neutral encouragement** — safest, most boring, loses the thing that makes the site charming.

Whatever you pick, keep the memes. They're the entire personality of the site, and no competitor has anything like them.

---

## Phase 3 — Multi-state *(the real work)*

### Technical shape

```
data/
  compartido.js      ← 133 universal questions (write once)
  estados/
    ks.js            ← Kansas: ~35 facts + metadata
    tx.js            ← Texas
    ca.js            ← California
```

Each state file holds a small metadata block and its specific values:

```js
{
  nombre: "Texas",
  agencia: "DPS",
  preguntas: 30,          // questions on the real test
  paraAprobar: 21,        // 70% in Texas vs 80% in Kansas
  manual: "https://...",  // official Spanish handbook
  velocidadUrbana: 30,
  bacLimite: 0.08,
  // ...
}
```

The app reads the state from a picker (saved like the role is now) or from the URL — `/tx/`, `/ca/` — which also gives each state its own page for search engines. That URL structure is what lets someone Googling "examen de manejo Texas" land directly on the Texas version.

### Per-state research checklist

For each new state, verify against that state's **official handbook** (never a competitor's site):

- [ ] Questions on the real test + passing score
- [ ] Agency name (DMV / DPS / MVD / SOS / BMV)
- [ ] Urban, rural, and maximum speed limits
- [ ] Parking distances: hydrant, crosswalk, stop sign, railroad
- [ ] BAC limits: adult, under 21, commercial
- [ ] Turn-signal distance
- [ ] Headlight rule (times / visibility distance)
- [ ] Child seat and booster requirements by age
- [ ] Seat belt law
- [ ] Phone / texting law
- [ ] Move-over law specifics
- [ ] License renewal period
- [ ] New-resident deadline
- [ ] Address-change deadline
- [ ] Cyclist passing distance
- [ ] School bus stopping rules (divided highway exception)
- [ ] Implied consent / refusal penalty
- [ ] Link to the official Spanish handbook

**Suggested order:** Texas → California → Illinois → Arizona → Florida. That order follows the population, and Texas is the best second state because it's large, heavily Mexican, and its handbook is clearly published in Spanish.

**Already verified for Texas** (a head start on state #2):

- 30 questions on the real test, **21 correct to pass (70%)** — different from Kansas's 25 / 20 / 80%, which is exactly why the passing score has to live in the state file rather than be hardcoded.
- The knowledge test is offered in English and Spanish.
- ⚠️ **Important nuance worth telling users:** even when taking the test in Spanish, Texas requires you to read and understand **road signs written in English**. That's a real, practical warning your competitors bury — and a great reason to keep the English toggle on sign questions. It turns a nice-to-have feature into a study tool.

---

## Phase 4 — Learn from real users *(ongoing)*

- **Privacy-respecting analytics** — which states people pick, where they drop off, which questions get missed most. Prefer a lightweight, cookie-free option over Google Analytics; it's kinder to users and avoids a cookie banner.
- **"Report a problem" link** on every question — when the site is national, users become your fact-checkers. A wrong answer costs someone a test fee, so this is a safety net, not a nicety.
- **Track the miss rate per question.** If 80% of people miss one question, either the question is wrong or the explanation is bad. That data tells you what to fix.

---

## Costs

| Item | Cost |
|---|---|
| Domain | ~$12 / year |
| Hosting (GitHub Pages) | $0 |
| Bandwidth | $0 — soft limit is **100 GB/month**; this site is well under 1 MB per visit, so that's roughly 100,000+ visits/month before it's even a question |
| Analytics | $0–9 / month depending on the tool |
| **Total to run nationally** | **~$12–20 / year** |

Static sites are absurdly cheap to run. If it ever outgrew GitHub Pages, Cloudflare Pages and Netlify have free tiers with higher limits and migration is a one-day job.

---

## Risks, honestly

1. **Accuracy is the whole product.** Someone fails a test and pays a fee again because of a wrong answer. Every state's facts must come from that state's official handbook, and the "not an official site" disclaimer must stay prominent in Spanish. This is the single biggest reason to add states slowly rather than dumping in all 50 with AI-generated content.

2. **Handbooks change.** Laws update. Plan to re-verify each state annually — put a "last verified" date on each state page, which also builds trust.

3. **Don't scrape competitors.** Their question banks are their copyrighted work. Everything must come from official state handbooks, which are government works and free to use. You're already doing this correctly.

4. **Scope creep.** 50 states × 35 facts is 1,750 facts to verify and maintain, alone. Five states done excellently beats fifty done carelessly — especially when errors hurt the people you're trying to help.

5. **Personal photos on a public site.** Your face becomes the mascot of a site strangers use. Worth deciding deliberately that you're comfortable with that before it spreads.

---

## Recommended order

```
1. Phase 1 (domain, PWA/offline, share, SEO)     ← weekend
2. Phase 2 (mascot rework)                       ← few hours
3. Texas                                          ← one focused session
4. Analytics + report-a-problem                   ← quick
5. California, Illinois, Arizona, Florida         ← one at a time
```

Ship Phase 1 and 2 first. That gives you a polished, shareable, offline-capable Spanish site that happens to cover one state — genuinely useful and ready to grow. Then each new state is an incremental win rather than a prerequisite.

---

## The bigger point

This started as a way to help two people who waited 28 years for the chance to drive legally. That's exactly why it's good: it was built for real people with real nerves about a real test, not to rank for keywords. The warmth, the plain Spanish, the encouragement when you fail — those are the things the big practice-test sites can't fake.

Keep that, and the rest is just more states.

---

*Sources: [Migration Policy Institute — Mexican Immigrants in the US](https://www.migrationpolicy.org/article/mexican-immigrants-united-states-2024) · [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) · [Kansas Driving Handbook](https://www.ksrevenue.gov/pdf/dlhb.pdf)*
