# tp-analisis-labo

Trabajo práctico de análisis de datos — FCE UBA.

El entregable tiene tres partes:

| Parte | Carpeta | Formato |
|---|---|---|
| Análisis | `notebooks/` | Jupyter Notebooks (Python) |
| Informe escrito | `informe/` | LaTeX |
| Presentación | `docs/` | HTML + CSS + JS, publicada con GitHub Pages |

## Estructura

```
tp-analisis-labo/
├── data/
│   ├── raw/          # Datasets originales (.csv / .xlsx). NO se modifican.
│   ├── processed/    # Datos limpios generados por los notebooks
│   └── external/     # Fuentes complementarias (diccionarios, tablas de referencia)
├── notebooks/        # Notebooks numerados por etapa del análisis
├── src/              # Funciones reutilizables entre notebooks (opcional)
├── outputs/
│   ├── figures/      # Gráficos exportados (se usan en informe y presentación)
│   └── tables/       # Tablas exportadas
├── informe/          # Documento LaTeX
│   ├── secciones/
│   └── figuras/
├── docs/             # Presentación web (raíz de GitHub Pages)
│   ├── index.html
│   └── assets/{css,js,img}/
└── .github/workflows/pages.yml   # Deploy automático de la presentación
```

Cada carpeta principal tiene su propio `README.md` con las convenciones.

## Puesta en marcha

```bash
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt
jupyter lab
```

## Flujo de trabajo del equipo

1. **Datasets** → se suben a `data/raw/` y se documentan en `data/README.md`.
2. **Ramas** → una rama por tarea: `feature/<tema>`, `notebook/<nro>-<tema>`, `informe/<seccion>`, `presentacion/<cambio>`.
3. **Pull Requests** → nada se sube directo a `main`; al menos una revisión de otro integrante.
4. **Notebooks** → antes de commitear, *Restart & Run All* para que corran de punta a punta.
5. **Figuras** → se exportan a `outputs/figures/` y desde ahí se copian a `informe/figuras/` y `docs/assets/img/`.

## Presentación (GitHub Pages)

Para verla en local:

```bash
python -m http.server -d docs 8000
# abrir http://localhost:8000
```

Deploy: en GitHub ir a **Settings → Pages → Source: GitHub Actions**. Cada push a `main`
que modifique `docs/` publica la presentación automáticamente.

Atajos: `→` / `Espacio` avanzar · `←` retroceder · `Inicio` / `Fin` · `F` pantalla completa · `P` exportar a PDF (imprimir).

Esto una demostración --