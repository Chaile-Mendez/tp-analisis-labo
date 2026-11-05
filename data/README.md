# Datos

## Carpetas

- `raw/` — datasets **originales**, tal como se descargaron. Nunca se editan a mano ni se sobrescriben.

Las transformaciones (eliminación de duplicados, nuevas columnas, etc.) se hacen dentro del notebook y no se
guardan como archivos aparte.

## Dataset del análisis final

El notebook final (`notebooks/notebook.ipynb`) usa **`raw/dataset_final`**, que lee directamente desde GitHub:

```
https://raw.githubusercontent.com/Chaile-Mendez/tp-analisis-labo/main/data/raw/dataset_final
```

- **Contenido:** 1.743 registros × 11 variables de estudiantes de 18 a 24 años de 110 países.
- **Variables:** `Student_ID`, `Age`, `Gender`, `Academic_Level`, `Country`, `Avg_Daily_Usage_Hours`,
  `Most_Used_Platform`, `Affects_Academic_Performance`, `Sleep_Hours_Per_Night`, `Mental_Health_Score`,
  `Relationship_Status`.
- **Calidad:** `Relationship_Status` tiene 1.038 faltantes (59,55 %), y hay 705 estudiantes cargados dos veces
  (solo difieren en esa columna). `Student_ID` no es un identificador único. El notebook explica cómo se trató cada caso.

## Convención de nombres

`snake_case`, sin espacios ni tildes, con prefijo de fuente si hay varias:

```
raw/indec_eph_2024t1.csv
raw/bcra_tipo_cambio.xlsx
```

## Inventario de datasets

> Completar una fila por cada archivo que se agregue a `raw/`.

| Archivo | Fuente | Descripción | Período | Filas × Cols |
|---|---|---|---|---|
| dataset_final | Basado en *Students Social Media Addiction* (Kaggle) | **Dataset del análisis final** | ---- | 1743 x 11 |
| Human Development Index - Full.csv | https://www.kaggle.com/datasets/iamsouravbanerjee/human-development-index-dataset| IDH por pais| 2021| 195 x 3|
| Social_media_impact_on_life.csv | https://www.kaggle.com/datasets/...| Impacto de las redes sociales| ----| 1706 x 11|
| Students Social Media Addiction.csv | https://www.kaggle.com/datasets/...| Adiccion a las redes sociales| ----| 706 x 13| 

## Archivos grandes

GitHub rechaza archivos de más de 100 MB. Si un dataset lo supera, dejar en `raw/` un
`.txt` con el enlace de descarga y avisar al equipo.
