# Impacto de las redes sociales en los estudiantes

Trabajo Práctico Grupal · **Grupo 14** · Laboratorio de Métodos Cuantitativos Aplicados a la Gestión
Tecnicatura Universitaria en Gestión y Análisis de Datos en Organizaciones — FCE UBA · 2.º cuatrimestre 2026

> **Pregunta principal:** ¿cómo impacta el uso de redes sociales en los estudiantes y es ese impacto igual para todos?

## Entregables

| Parte | Archivo | Descripción |
|---|---|---|
| 1 · Análisis | [`notebooks/notebook.ipynb`](notebooks/notebook.ipynb) | Notebook final ejecutado (Python · Google Colab) |
| 2 · Informe | [`informe/main.pdf`](informe/main.pdf) | Informe académico en PDF (fuente LaTeX: [`informe/main.tex`](informe/main.tex)) |
| 3 · Presentación | [Presentación online](https://chaile-mendez.github.io/tp-analisis-labo/) · [`docs/presentacion.pdf`](docs/presentacion.pdf) | Diapositivas HTML publicadas con GitHub Pages, y su versión PDF |
| Datos | [`data/raw/dataset_final`](data/raw/dataset_final) | Dataset utilizado en el análisis (ver [`data/README.md`](data/README.md)) |

## Integrantes

| Apellido y nombre | N.º de registro | GitHub |
|---|---|---|
| Chaile Mendez, Juan Manuel | 921438 | [Chaile-Mendez](https://github.com/Chaile-Mendez) |
| Gomez, Santiago Emanuel | 921788 | [santiagooe-lgtm](https://github.com/santiagooe-lgtm) |
| Gonzalez, Joaquin Alejandro | 922263 | [joagonzalez3](https://github.com/joagonzalez3) |
| Macca, Mateo | 921529 | [mateomacca1612](https://github.com/mateomacca1612) |
| Ribeiro Nunes da Silva, Facundo | 921813 | [FacuLaMaquina](https://github.com/FacuLaMaquina) |

## Preguntas y hallazgos principales

Base: *Students Social Media Addiction* (Kaggle) con 1.743 registros de estudiantes de 18 a 24 años de 110 países.
Un puntaje de salud mental más alto significa mejor salud mental.

| | Pregunta | Hallazgo |
|---|---|---|
| P1 | ¿El impacto es igual según el nivel de desarrollo del país? | No. En los países en desarrollo hay más uso (5,25 h contra 4,83), menos sueño (6,45 h contra 6,97), peor salud mental (5,94 contra 6,37) y más afectación académica percibida (74 % contra 56 %). |
| P2 | ¿El uso de redes impacta en el sueño y en el rendimiento? | A más uso, menos sueño (correlación −0,79; 0,65 h menos por hora de uso). El 77 % de quienes sienten afectado su rendimiento duerme menos de 7 h, contra el 13 % del resto. |
| P3 | ¿Hay redes que impactan más? ¿Hay brecha de género? | WhatsApp, TikTok y Snapchat muestran los peores indicadores, pero gran parte de la diferencia se explica por las horas de uso (salud mental 7,51 → 6,16 → 4,93 con uso bajo, medio y alto). La brecha de género es muy leve (0,10 puntos). |
| P4 | ¿El uso de redes afecta las relaciones sentimentales? | No se observa: el uso diario es de 4,7 a 4,9 h en solteros, en pareja y en situación complicada. |

**Conclusión:** más que qué red se usa o quién la usa, importa **cuánto tiempo** se le dedica. El análisis es descriptivo:
muestra asociaciones, no relaciones causales.

## Estructura del repositorio

```
tp-analisis-labo/
├── data/
│   └── raw/                  # Datasets originales (no se modifican)
│       └── dataset_final     # Dataset usado en el notebook final
├── notebooks/
│   ├── notebook.ipynb        # Notebook final del grupo (el que se entrega)
│   └── ...                   # Notebooks individuales de trabajo de cada integrante
├── informe/
│   ├── main.tex              # Informe completo en un único archivo LaTeX
│   ├── main.pdf              # Informe compilado
│   └── figuras/              # Gráficos exportados del notebook
├── docs/                     # Presentación (raíz de GitHub Pages)
│   ├── index.html            # Diapositivas
│   ├── presentacion.pdf      # Diapositivas exportadas a PDF
│   └── assets/{css,js,img}/
└── .github/workflows/pages.yml   # Publicación automática de la presentación
```

## Cómo reproducir el análisis

El notebook carga el dataset directamente desde este repositorio, así que puede abrirse en Google Colab y
ejecutarse con *Entorno de ejecución → Ejecutar todas*. Para correrlo en local:

```bash
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt
jupyter lab notebooks/notebook.ipynb
```

## Informe

Se compila con pdfLaTeX (también funciona en Overleaf subiendo `main.tex` y la carpeta `figuras/`):

```bash
latexmk -pdf -cd informe/main.tex
```

## Presentación

- **Online:** https://chaile-mendez.github.io/tp-analisis-labo/ — se publica sola con cada push a `main` que modifique `docs/`
  (requiere *Settings → Pages → Source: GitHub Actions*).
- **En local:** `python -m http.server -d docs 8000` y abrir http://localhost:8000

Atajos: `→` / `Espacio` avanzar · `←` retroceder · `Inicio` / `Fin` · `N` notas del orador · `F` pantalla completa ·
`P` exportar a PDF (imprimir) · `#5` en la URL abre la diapositiva 5.

## Uso de inteligencia artificial

Se utilizó IA como asistente para sugerir transformaciones y gráficos, revisar la redacción de las interpretaciones y
generar el informe y la presentación a partir del notebook ejecutado. La interpretación de los resultados y las decisiones
de análisis son responsabilidad del grupo.
