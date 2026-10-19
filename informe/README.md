# Informe (LaTeX)

- `secciones/` — un archivo `.tex` por sección, para trabajar en paralelo sin conflictos.
- `figuras/` — imágenes usadas en el documento (exportadas desde `outputs/figures/`).

Compilación sugerida (genera el PDF en esta carpeta):

```bash
latexmk -pdf -cd informe/main.tex
```

También puede trabajarse en Overleaf sincronizando con este repositorio.
Los archivos auxiliares de compilación están excluidos en `.gitignore`.
