

V18.8 Positive EV Guard:
- Corrige un problema de lectura: antes una jugada podía salir FUERTE aunque tuviera EV negativo si el filtro EV mínimo estaba en -3.
- Ahora FUERTE exige EV positivo; en soccer exige al menos +1% EV.
- El color de la etiqueta ahora depende de la decisión:
  FUERTE = verde
  REVISAR = amarillo
  NO JUGAR = rojo
- El valor por defecto de EV mínimo ahora es +1%.


V19 DeepScan Pro:
- Escanea todos los mercados disponibles de The Odds API uno por uno.
- No escanea Player Shots ni Player Shots on Target.
- Añade Pro Score 0-100.
- Separa Premium Pro, Fuertes, Alta probabilidad con EV positivo y Mejor valor EV.
- Ninguna jugada puede ser FUERTE/Premium con EV negativo.
- Muestra cuota justa aproximada y cuota mínima recomendada para buscar en Hard Rock.
- Reglas de prueba: $3-$5, no parlays, no jugar si Hard Rock tiene peor cuota que la app.


V19.1 DeepScan Error Fix:
- Corrige el error: Can't find variable: proScore.
- Verifica que proScore, fairAmerican y minPlayableOdds estén definidos antes de analizar.
- Mantiene DeepScan Pro, Pro Score, Premium Pro, EV positivo obligatorio y bloqueo de tiros/tiros a puerta.
- No cambia tus llaves; solo sube este ZIP y Redeploy.


V20 Outlier-Style Pro:
- EV Feed Pro: lista picks con EV positivo ordenados.
- Safe Shortlist: filtra mercados riesgosos, baja cantidad de casas y EV negativo.
- Hard Rock Check: escribe la cuota de Hard Rock y la app dice si es igual/mejor que la cuota mínima recomendada.
- No Market Mismatch: la tarjeta recuerda verificar mismo partido, mercado exacto y línea exacta.
- Line Movement: guarda la cuota anterior en el navegador y detecta si la línea mejoró o empeoró.
- No Duplicate Picks: deduplica picks repetidos entre categorías.
- No Parlays Mode / Safe Mode: oculta mercados riesgosos como player props, inning-style, hits cuando no están activados.
- Player props default OFF para no mostrar hits por defecto.


V20.1 No Duplicates + HR Check:
- Corrige repetición: una misma jugada ya no aparece repetida entre Alta Probabilidad, Mejor EV y Revisar.
- La pestaña Picks usa secciones únicas con prioridad: Premium > Fuertes > Alta probabilidad > Mejor EV > Revisar.
- Hard Rock Check avisa más claro que debes escribir la cuota HR arriba antes de analizar.


V20.2 Full Calendar Fix:
- Arregla juegos faltantes por dos razones:
  1) El límite de eventos estaba en 2 por defecto.
  2) La fecha se comparaba de forma que podía fallar por zona horaria/UTC.
- Ahora el calendario usa fecha local del teléfono.
- Eventos máximos por defecto = Todos.
- Añade Buscar equipo para encontrar Angels, Texas, etc.
- Si no encuentra juegos exactos en la fecha, muestra próximos juegos disponibles de The Odds API como fallback.


V20.3 Phone Time Local:
- La app toma la fecha actual desde el navegador/iPhone, no desde UTC.
- Muestra hora del teléfono, zona horaria y fecha usada en Calendario.
- Filtro tiempo:
  * Solo próximos según mi teléfono
  * Todos los de esta fecha
  * Todo lo que traiga API
- Cada juego muestra kickoff en hora local y cuánto falta o si ya empezó.
- Botón “Usar fecha/hora de mi teléfono” para corregir rápido.


V20.4 Win First Strict:
- Prioriza NO jugar antes que forzar.
- Nuevo modo por defecto: Ganar primero / ultra estricto.
- Defaults: probabilidad mínima 70%, mínimo 8 casas, Pro Score mínimo 70, EV mínimo -1%.
- Oculta REVISAR Media.
- Bloquea mercados riesgosos en modo Win: player props/hits, innings raros, pocos libros, Pro Score bajo y probabilidad menor de 70%.
- Si no aparece nada, la decisión correcta es no apostar.

V20.5 Balanced Win Mode:
- V20.4 era demasiado cerrada. Esta versión usa filtro realista.
- Defaults: probabilidad 66%, 6 casas, Pro Score 62, EV mínimo -2%.
- Bloquea calidad baja, player props/hits, mercados raros y picks sin data.
- Ultra estricto 70+ queda disponible si quieres cerrar el filtro.
- Regla: $3-$5 máximo, no parlay, una jugada por partido.


V21 Realistic Edge Engine:
- Nueva filosofía: no esconder todo ni mostrar todo.
- Clasifica cada pick como:
  * BUENA
  * REVISAR
  * MALA
- Realistic Edge combina:
  * Probabilidad contexto
  * EV
  * Pro Score
  * Cantidad de casas
  * Seguridad del mercado
  * Calidad Alta/Media/Baja
  * Cuota demasiado cara
  * Mercados riesgosos
- Muestra razones buenas y razones malas en cada tarjeta.
- One Pick Per Game / conflict resolver: en la vista principal intenta dejar la mejor opción por mercado/línea.
- Mantiene Hard Rock Check, Line Movement, No Market Mismatch, No Duplicate Picks, Phone Time Local.


V22 Team Strength Engine:
- Añade análisis de equipos/matchup.
- Crea un score 0-100 para cada equipo del partido usando:
  * mercado moneyline
  * spreads protegidos +1.5
  * Pro Score de picks relacionados
  * EV de mercados relacionados
  * cantidad de casas
  * contexto MLB: pitchers confirmados, lineups, lesiones/mismatch si el feed lo trae
- Nueva pestaña Equipos.
- Cada pick ahora tiene “Equipo 0-100”.
- Realistic Edge penaliza picks donde el equipo/matchup se ve débil.
- Objetivo: evitar que la app recomiende equipos débiles solo porque el +1.5 parece bonito.


V22.1 Team Calibrated:
- Corrige el Team Strength demasiado agresivo de V22.
- Ya no resta puntos repetidamente por mercados secundarios.
- Team Score calibrado en rango 20-85.
- Usa moneyline, mejor spread protegido, mejores Pro Scores, mejor EV, casas y contexto MLB.


V23 AI Daily Scan:
- Agrega pestaña Scan Día.
- Escanea todos los eventos cargados del deporte seleccionado: MLB o Soccer.
- Para cada evento consulta mercados, contexto, Team Strength y Realistic Edge.
- Ordena: Jugada Exclusiva del Día, Jugada VIP del Día, Jugadas Posibles, Malas/No tocar.
- El “AI” es un motor local de scoring dentro de la app, no un modelo externo tipo ChatGPT. Para IA generativa real haría falta una API key adicional.
- No garantiza ganancias. Si no hay Exclusiva/VIP, la recomendación es no apostar.


V24 AI Secure Key:
- Agrega /api/ai-scan.
- Guarda la llave en Vercel como OPENAI_API_KEY, nunca en index.html.
- Opcional OPENAI_MODEL=gpt-5-mini.
- Haz Redeploy.


V25 Market Diversity + AI Credits:
- Market Diversity para no quedarse solo con MLB +1.5.
- MLB: +1.5 full game, F5 +0.5, Moneyline fuerte, Team totals, Full game totals.
- Soccer: Double Chance, DNB/Push if Tied, Team total, Under/Over protegido.
- IA recibe instrucciones de diversificar mercados y no repetir 5 picks del mismo tipo.
- Panel de créditos IA estimados: saldo inicial, gastado estimado y saldo estimado.
- Nota: el balance real solo se ve en OpenAI Billing; la app estima usando tokens reportados por la API.


V26 No Repeat + Market Rotation:
- Corrige el problema de que el scan seguía sacando casi todo +1.5.
- Regla dura: máximo 1 pick +1.5 full game/run line/handicap por scan.
- Si la IA devuelve varios +1.5, el cliente y el servidor los bloquean y los mueven a “Malas / No tocar”.
- Fuerza rotación de mercados:
  * MLB: F5 +0.5, Moneyline fuerte, Team Totals, Full Game Totals.
  * Soccer: Double Chance, DNB, Team Totals, Under/Over protegido.
- Si no hay mercados buenos diferentes, debe decir NO HAY en lugar de repetir +1.5.


V27 Audited Real Scan:
- Corrección crítica: el botón visible de “Scan Día” todavía usaba el motor local viejo, no la lógica OpenAI/diversidad. Eso causaba repetición de +1.5.
- Nuevo Scan Pro V27:
  * máximo 1 +1.5 full game
  * rotación real por familias de mercado
  * Exclusiva y VIP deben salir de mercados distintos cuando sea posible
  * las demás +1.5 repetidas se mueven a Malas / No tocar
- El resumen IA OpenAI ahora recibe los resultados estructurados del scan local.
- Corrección crítica: collectGameCardsForAI ahora usa EVENTS real, no window.EVENTS vacío.
- Panel visible de créditos IA en Scan Día.


V27.1 Audit Patch:
- Se auditó V27 y se encontró un error real:
  * El cliente enviaba scan_results, pero /api/ai-scan no lo incluía dentro del compact payload que se manda a OpenAI.
  * Resultado: el “Resumen IA OpenAI” no veía los picks reales del scan local.
- Corregido: /api/ai-scan ahora incluye scan_results.
- Agregado botón Diagnóstico V27.1:
  * Eventos cargados
  * Último scan local
  * Funciones de bloqueo +1.5
  * Créditos estimados
- Mantiene:
  * Máximo 1 +1.5 full game
  * Rotación de mercados
  * Créditos IA estimados
  * IA segura por OPENAI_API_KEY en Vercel


V27.2 Full Audit Fix:
- Auditoría adicional sobre V27.1.
- Se corrigió un conflicto visual: el contador "Créditos" estaba mezclando The Odds API con crédito IA estimado.
  * Ahora "Odds API" se queda para The Odds API.
  * "IA $" muestra el estimado de crédito OpenAI.
- /api/health ahora reporta OPENAI_API_KEY y OPENAI_MODEL.
- Diagnóstico V27.2 ahora prueba realmente:
  * eventos cargados
  * último scan local
  * bloqueo +1.5
  * rotación de mercados
  * endpoint /api/ai-scan
  * env vars de Vercel
- /api/ai-scan mantiene scan_results y agrega fallback si OpenAI rechaza json_object.
- Revisión estática ejecutada:
  * node --check index scripts
  * node --check api/ai-scan.js
  * IDs duplicados
  * funciones duplicadas
  * referencias $() faltantes


V27.3 Production Lock:
- Auditoría adicional por preocupación del usuario.
- Se corrigieron textos/etiquetas viejas V25/V26/V27.1/V27.2 que podían confundir.
- Se agregó bloqueo real: no se puede correr “Resumen IA OpenAI” si antes no existe LAST_DAILY_SCAN.
- /api/ai-scan también bloquea daily-scan sin scan_results.
- rotateScanResults ya no deja marcas _used pegadas en LAST_DAILY_SCAN al volver a renderizar.
- /api/health reporta version V27.3.
- Esta versión es la base más estable para probar SIN apostar primero.


V28 Rebuilt Decision Engine:
- Reescritura del motor de decisión, no solo parche visual.
- Cambios clave:
  * No más 100/100 falso: score máximo visible 99 y con topes duros.
  * Bloquea juegos en vivo/iniciados para picks pregame.
  * EXCLUSIVA/VIP ahora son PAPER, no recomendación de dinero real.
  * “MALA” se reemplaza por “NO BET / NO VALOR” para evitar confusión: puede ganar, pero no era apuesta válida.
  * Hard caps por probabilidad baja, Pro Score bajo, EV negativo, pocas casas, cuota cara, equipo débil y pitcher mismatch.
  * No puede salir Exclusiva si prob <72%, Pro Score <72, casas <8, EV no positivo o equipo <62.
  * No puede salir VIP si prob <69%, Pro Score <68, casas <7 o equipo <58.
  * Resumen IA debe usar scan_results y no puede correr sin scan local.
- Regla recomendada: 30 picks en papel antes de volver a usar dinero real.


V29 No False Good Mode:
- Objetivo principal: reducir falsos positivos. La app prefiere NO BET antes que llamar fuerte a una jugada floja.
- Categorías nuevas:
  * PAPER FUERTE: pasó filtros duros, pero sigue siendo solo prueba.
  * OBSERVAR: interesante, no dinero real.
  * NO BET / PUEDE GANAR PERO NO VALOR: puede ganar, pero no se considera apuesta confiable.
  * EN VIVO / NO BET: bloqueado para lectura pregame.
- Filtros duros para fuerte:
  * probabilidad >= 74%,
  * Pro Score >= 72,
  * EV positivo,
  * mínimo 8 casas,
  * equipo/matchup >= 64,
  * market safety >= 68,
  * precio no demasiado caro,
  * no pitcher mismatch,
  * no mercado riesgoso,
  * no partido iniciado.
- Regla operativa: 30 picks en papel antes de volver a usar dinero real.


V29.1 QA Clean:
- Auditoría QA sobre V29.
- Correcciones:
  * Limpieza de textos viejos que todavía decían Exclusiva/VIP como si fueran jugadas reales.
  * Resumen IA ahora se valida contra LAST_DAILY_SCAN.
  * Si OpenAI propone un candidato que no aparece como PAPER FUERTE en el motor local, se demueve a NO BET.
  * Las observaciones IA solo quedan si coinciden con PAPER FUERTE u OBSERVAR local.
  * Endpoint /api/health reporta V29.1.
  * No hay links externos rotos en index.html; todos los endpoints /api existen en el ZIP.
- Auditoría automática incluida en AUDIT_REPORT.txt.


V29.2 Pro UI:
- Rediseño visual profesional sin romper la lógica V29.1.
- CSS responsive para móvil, tablet y desktop.
- Paleta moderna: fondo navy, glassmorphism, azul/violeta como acento, verde/amarillo/rojo para estados.
- Mejor UX:
  * pestañas sticky,
  * botones grandes,
  * inputs con focus visible,
  * cards con sombras suaves,
  * hover/transition,
  * mejor espacio en blanco,
  * métricas responsivas.
- Se mantiene:
  * modo paper-only,
  * bloqueo en vivo,
  * validación IA contra scan local,
  * QA sin IDs/handlers rotos.


V30 Production Audit:
- Seguridad: proxies no aceptan llaves de navegador salvo ALLOW_CLIENT_KEYS=true.
- Estabilidad: fetch con timeout y JSON seguro.
- Lógica: validación IA/local reforzada en cliente y servidor.
- UI: Modo Pro bloqueado a Producción Paper Lock.
- Rendimiento: content-visibility y prefers-reduced-motion.


V30.1 Button Fix:
- Corrige el flujo del botón “Analizar este juego”.
- El botón ahora:
  * muestra feedback inmediato,
  * se desactiva mientras analiza,
  * cambia automáticamente a la pestaña Picks,
  * hace scroll al resultado,
  * muestra error claro si The Odds API no devuelve cuotas para ese juego,
  * re-activa el botón al terminar.
- Corrige spinner pegado en contenedores con class loading.
- Expone funciones en window para mejorar compatibilidad con Safari/iPhone e inline onclick.


V30.2 Balanced Paper Ranking:
- Problema observado: en días/juegos sin PAPER FUERTE, el usuario no tenía nada que medir.
- Solución:
  * Se mantiene la regla estricta: si no hay PAPER FUERTE, no se juega.
  * Se agrega “Top ranking solo papel” para calibrar el modelo sin dinero.
  * Se agrega “DECISIÓN FINAL” grande por partido:
    - HAY CANDIDATO PAPER FUERTE, o
    - NO JUGAR ESTE PARTIDO.
  * El aviso “Analizando...” se limpia al terminar.
- Importante: el ranking no es apuesta. Es solo registro paper.


V30.3 AI Center:
- Agrega Centro IA visible arriba:
  1) Cargar calendario
  2) Scan día local
  3) Resumen IA OpenAI
  Probar IA / Diagnóstico / Ver Scan
- La IA no inventa picks:
  * OpenAI solo corre después del scan local.
  * Si la IA propone algo que el motor local no valida, queda NO BET.
- Mejora UX:
  * Al tocar IA se mueve automáticamente a la pestaña Scan.
  * Mensajes claros del orden correcto.
