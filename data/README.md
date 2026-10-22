# Datos

## Carpetas

- `raw/` — datasets **originales**, tal como se descargaron. Nunca se editan a mano ni se sobrescriben.
- `processed/` — salidas de limpieza/transformación generadas por los notebooks.
- `external/` — material de apoyo: diccionarios de variables, códigos, tablas de referencia.

## Convención de nombres

`snake_case`, sin espacios ni tildes, con prefijo de fuente si hay varias:

```
raw/indec_eph_2024t1.csv
raw/bcra_tipo_cambio.xlsx
```

## Inventario de datasets

> Completar una fila por cada archivo que se agregue a `raw/`.

| Archivo | Fuente | Descripción | Período | Filas × Cols | Responsable |
|---|---|---|---|---|---|
| Human Development Index - Full.csv | https://www.kaggle.com/datasets/iamsouravbanerjee/human-development-index-dataset| IDH por pais| 2021| 195 x 3| Chaile Juan|

## Archivos grandes

GitHub rechaza archivos de más de 100 MB. Si un dataset lo supera, dejar en `raw/` un
`.txt` con el enlace de descarga y avisar al equipo.
