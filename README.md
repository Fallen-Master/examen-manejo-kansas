# 🚗 Examen de Manejo de Kansas — Práctica / Kansas Driving Test Practice

Sitio de práctica bilingüe (español/inglés) para el examen escrito de manejo de Kansas.
Basado en el [Manual del Conductor de Kansas](https://www.ksrevenue.gov/pdf/dlhb.pdf).

- **55 preguntas** en 4 categorías: señales, reglas, seguridad, alcohol y leyes
- **Modo de estudio**: respuesta y explicación inmediata, con filtro por categoría
- **Examen de práctica**: 25 preguntas al azar, 80% para aprobar — igual que el DMV
- Español por defecto, con botón para cambiar a inglés

> El examen real del DMV de Kansas también se ofrece en español.

## Cómo publicarlo en GitHub Pages / How to publish

1. Create a new repo on GitHub named `examen-manejo-kansas` (Public, no README).
2. From this folder, run:

   ```
   git remote add origin https://github.com/YOUR_USERNAME/examen-manejo-kansas.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**
4. In a minute or two the site will be live at:

   ```
   https://YOUR_USERNAME.github.io/examen-manejo-kansas/
   ```

## Editar preguntas / Editing questions

All questions live in `questions.js`. Each entry has Spanish (`es`) and English (`en`) text,
options (`opts`), the index of the correct answer (`a`), and an explanation (`exp`).

---
*Sitio no oficial. Para información oficial visite [ksrevenue.gov](https://www.ksrevenue.gov/dovindex.html).*
