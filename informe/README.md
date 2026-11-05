# Informe (LaTeX)

- `main.tex` — informe completo en un único archivo LaTeX (portada, secciones y bibliografía).
- `main.pdf` — informe compilado, listo para entregar.
- `figuras/` — gráficos exportados del notebook final (`notebooks/notebook.ipynb`) que usa el informe.

Estructura, según las pautas del TP: Resumen · Introducción · Datos y metodología · Resultados · Conclusiones ·
Reflexión metodológica · Bibliografía. El cuerpo ocupa 5 páginas, sin contar la portada ni las referencias.

Compilación (genera el PDF en esta carpeta):

```bash
latexmk -pdf -cd informe/main.tex
```

También puede compilarse en Overleaf subiendo `main.tex` y la carpeta `figuras/` con el mismo nombre.
Los archivos auxiliares de compilación están excluidos en `.gitignore`.
