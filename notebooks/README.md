# Notebooks

## Convención de nombres

`<nro>_<etapa>_<tema>.ipynb`

| Prefijo | Etapa |
|---|---|
| `00_` | Exploración inicial / carga de datos |
| `01_` | Limpieza y preparación |
| `02_` | Análisis exploratorio (EDA) |
| `03_` | Análisis principal / modelos |
| `04_` | Visualizaciones finales para informe y presentación |

## Buenas prácticas

- Rutas **relativas** a la raíz del repo (`../data/raw/...`), nunca rutas absolutas de una PC.
- Leer solo de `data/raw/` o `data/processed/`; escribir solo en `data/processed/` y `outputs/`.
- *Restart & Run All* antes de cada commit.
- Si una función se repite en dos notebooks, moverla a `src/`.
