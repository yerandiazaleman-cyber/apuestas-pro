# PickSharp Pro V30 — Senior Code Audit Report

## Críticos
1. Validación IA/local demasiado permisiva.
   - Solución: matching estricto con selección + mercado/partido, en cliente y servidor.
2. Riesgo de exposición de llaves por headers del navegador.
   - Solución: solo aceptan llaves del navegador si `ALLOW_CLIENT_KEYS=true`.
3. Proxy demasiado abierto.
   - Solución: whitelist de parámetros y validación de path.

## Moderados
1. Fetch sin timeout.
   - Solución: `fetchWithTimeout` en cliente y AbortController en APIs.
2. Versiones/textos inconsistentes.
   - Solución: limpieza a V30.
3. Modo Pro con opciones antiguas sin efecto.
   - Solución: UI bloqueada a `Producción Paper Lock`.
4. Escala 99/100 inconsistente.
   - Solución: topes visuales a 99.

## Visuales / UX / Rendimiento
1. Mejora responsive y performance con `content-visibility`.
2. Respeta `prefers-reduced-motion`.
3. Estados de riesgo más claros.
4. Diagnóstico actualizado.
