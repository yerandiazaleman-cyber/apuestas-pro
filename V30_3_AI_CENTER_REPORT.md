# V30.3 AI Center

## Problema
El usuario no veía un botón claro para usar la IA.

## Solución
Se agregó un Centro IA visible con botones:
1. Cargar calendario
2. Scan día local
3. Resumen IA OpenAI
Además: Probar IA, Diagnóstico, Ver Scan / IA.

## Cómo trabaja la IA
La IA OpenAI no trae odds ni decide sola. Primero el motor local analiza cuotas, EV, probabilidad, Pro Score, casas, line movement y contexto. Luego OpenAI resume y critica esos resultados. Si OpenAI propone algo que el motor local no validó, se baja a NO BET.
