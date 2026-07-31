// Situaciones de tránsito — preguntas de "¿quién pasa primero?"
// Traffic scenarios — right-of-way questions. Muchas incluyen diagrama (diag).
// En los diagramas: USTED es el auto AZUL. / In the diagrams, YOU are the BLUE car.

const SITUACIONES = [

  // ===== ALTO DE 4 VÍAS / FOUR-WAY STOPS =====
  {cat:"situaciones", diag:"cuatro-altos-derecha",
   q:{es:"Usted (auto azul) y el otro auto llegan al alto de 4 vías EXACTAMENTE al mismo tiempo. ¿Quién pasa primero?",
      en:"You (blue car) and the other car reach the four-way stop at EXACTLY the same time. Who goes first?"},
   opts:[
     {es:"El otro auto: viene por su derecha", en:"The other car: it is on your right"},
     {es:"Usted: va derecho", en:"You: you are going straight"},
     {es:"El que acelere primero", en:"Whoever accelerates first"},
     {es:"El auto más grande", en:"The larger vehicle"}],
   a:0,
   exp:{es:"Cuando dos vehículos llegan al mismo tiempo, pasa primero el de la DERECHA. El otro auto está a su derecha, así que usted cede.",
        en:"When two vehicles arrive at the same time, the one on the RIGHT goes first. The other car is on your right, so you yield."}},

  {cat:"situaciones", diag:"cuatro-altos-izquierda",
   q:{es:"En un alto de 4 vías, usted (azul) quiere dar vuelta a la izquierda y el otro auto viene de frente y sigue derecho. Llegaron al mismo tiempo. ¿Quién pasa primero?",
      en:"At a four-way stop, you (blue) want to turn left and the other car is coming toward you going straight. You arrived at the same time. Who goes first?"},
   opts:[
     {es:"El otro auto: quien sigue derecho tiene preferencia sobre quien gira a la izquierda", en:"The other car: through traffic has priority over a left turn"},
     {es:"Usted: ya tiene puesta la direccional", en:"You: your turn signal is already on"},
     {es:"Los dos al mismo tiempo", en:"Both at the same time"},
     {es:"El que llegó por la calle más ancha", en:"Whoever came from the wider street"}],
   a:0,
   exp:{es:"Entre dos vehículos que llegan al mismo tiempo de frente, el que va derecho pasa primero. Quien da vuelta a la izquierda siempre cede.",
        en:"Between two vehicles arriving at the same time facing each other, the one going straight goes first. The left-turning driver always yields."}},

  {cat:"situaciones",
   q:{es:"En un alto de 4 vías usted llegó claramente PRIMERO, pero otro conductor empieza a avanzar. ¿Qué debe hacer?",
      en:"At a four-way stop you clearly arrived FIRST, but another driver starts moving. What should you do?"},
   opts:[
     {es:"Cederle el paso aunque usted tenga la razón: evitar el choque es lo primero", en:"Let them go even though you had the right: avoiding a crash comes first"},
     {es:"Avanzar porque usted llegó primero", en:"Go, because you arrived first"},
     {es:"Tocar el claxon y avanzar", en:"Honk and go"},
     {es:"Quedarse ahí sin moverse hasta que él se detenga", en:"Sit still until they stop"}],
   a:0,
   exp:{es:"El derecho de paso se CEDE, nunca se toma. Tener la razón no sirve de nada después de un choque.",
        en:"Right-of-way is given, never taken. Being right does not help you after a crash."}},

  {cat:"situaciones",
   q:{es:"Llegan tres autos a un alto de 4 vías en este orden: primero el de enfrente, luego usted, luego el de su izquierda. ¿En qué orden pasan?",
      en:"Three cars reach a four-way stop in this order: the one across first, then you, then the one on your left. In what order do they go?"},
   opts:[
     {es:"En el orden en que llegaron", en:"In the order they arrived"},
     {es:"Primero los que van derecho, luego los que giran", en:"Straight-through cars first, then turning cars"},
     {es:"Siempre en el sentido de las manecillas del reloj", en:"Always clockwise"},
     {es:"El de la izquierda siempre al final", en:"The one on the left always last"}],
   a:0,
   exp:{es:"La regla principal es el orden de llegada. La regla de 'el de la derecha' solo se usa para desempatar.",
        en:"The main rule is order of arrival. The 'car on the right' rule is only a tiebreaker."}},

  // ===== INTERSECCIÓN EN T / T-INTERSECTION =====
  {cat:"situaciones", diag:"t-interseccion",
   q:{es:"Usted (azul) llega a una intersección en T: su calle TERMINA aquí. Viene un auto por la calle principal. ¿Quién tiene el derecho de paso?",
      en:"You (blue) reach a T-intersection: your street ENDS here. A car is coming along the through street. Who has the right-of-way?"},
   opts:[
     {es:"El auto de la calle principal: usted debe ceder", en:"The car on the through street: you must yield"},
     {es:"Usted, si llegó primero", en:"You, if you arrived first"},
     {es:"El que va más despacio", en:"Whoever is going slower"},
     {es:"Usted, porque va a dar vuelta", en:"You, because you are turning"}],
   a:0,
   exp:{es:"En una intersección en T, el tráfico de la calle que continúa siempre tiene preferencia. Quien llega por la calle que termina cede el paso.",
        en:"At a T-intersection, traffic on the continuing street always has priority. The driver on the ending street yields."}},

  // ===== SIN CONTROL / UNCONTROLLED =====
  {cat:"situaciones", diag:"sin-control",
   q:{es:"Una intersección de barrio SIN señales ni semáforos. Usted (azul) y otro auto llegan casi al mismo tiempo; el otro viene por su derecha. ¿Qué hace?",
      en:"A neighborhood intersection with NO signs or signals. You (blue) and another car arrive at nearly the same time; the other is on your right. What do you do?"},
   opts:[
     {es:"Reducir la velocidad y cederle el paso", en:"Slow down and yield to them"},
     {es:"Pasar rápido antes que él", en:"Hurry through before them"},
     {es:"Tocar el claxon y seguir", en:"Honk and continue"},
     {es:"Detenerse por completo siempre", en:"Always come to a full stop"}],
   a:0,
   exp:{es:"Sin señales, la regla es ceder al vehículo de la derecha. Aunque no haya señal de alto, debe bajar la velocidad y estar listo para parar.",
        en:"With no signs, the rule is to yield to the vehicle on your right. Even with no stop sign, slow down and be ready to stop."}},

  // ===== VUELTA A LA IZQUIERDA / LEFT TURNS =====
  {cat:"situaciones", diag:"izquierda-verde",
   q:{es:"El semáforo está en verde REDONDO (no flecha). Usted (azul) quiere dar vuelta a la izquierda y viene tráfico de frente. ¿Qué hace?",
      en:"The light is a ROUND green (not an arrow). You (blue) want to turn left and traffic is coming toward you. What do you do?"},
   opts:[
     {es:"Entrar a la intersección y esperar hasta que haya un espacio seguro", en:"Enter the intersection and wait for a safe gap"},
     {es:"Girar de inmediato: el verde le da preferencia", en:"Turn immediately: green gives you the right-of-way"},
     {es:"Esperar detrás de la línea de alto", en:"Wait behind the stop line"},
     {es:"Tocar el claxon para que le cedan", en:"Honk so they let you through"}],
   a:0,
   exp:{es:"El verde redondo NO protege su vuelta: debe ceder al tráfico de frente. Espere dentro de la intersección con las llantas derechas y gire cuando sea seguro.",
        en:"A round green does NOT protect your turn: you must yield to oncoming traffic. Wait in the intersection with your wheels straight and turn when it is safe."}},

  {cat:"situaciones",
   q:{es:"Está esperando dentro de la intersección para dar vuelta a la izquierda y el semáforo se pone AMARILLO y luego ROJO. ¿Qué debe hacer?",
      en:"You are waiting in the intersection to turn left and the light turns YELLOW, then RED. What should you do?"},
   opts:[
     {es:"Completar la vuelta cuando sea seguro: ya está dentro de la intersección", en:"Complete the turn when safe: you are already in the intersection"},
     {es:"Quedarse ahí hasta el siguiente verde", en:"Stay there until the next green"},
     {es:"Regresar en reversa", en:"Back up out of the intersection"},
     {es:"Apagar el motor y esperar", en:"Turn off the engine and wait"}],
   a:0,
   exp:{es:"Si ya entró legalmente a la intersección, complete la vuelta en cuanto pueda hacerlo con seguridad. Quedarse ahí bloquea el tráfico cruzado.",
        en:"If you legally entered the intersection, complete the turn as soon as it is safe. Staying there blocks cross traffic."}},

  {cat:"situaciones",
   q:{es:"El semáforo le muestra una FLECHA VERDE hacia la izquierda. Esto significa que:",
      en:"The signal shows you a GREEN ARROW pointing left. This means:"},
   opts:[
     {es:"Su vuelta está protegida: el tráfico de frente tiene luz roja", en:"Your turn is protected: oncoming traffic has a red light"},
     {es:"Debe ceder al tráfico de frente", en:"You must yield to oncoming traffic"},
     {es:"Puede seguir derecho también", en:"You may also go straight"},
     {es:"Debe detenerse antes de girar", en:"You must stop before turning"}],
   a:0,
   exp:{es:"La flecha verde es una vuelta protegida. Aun así, revise que no haya peatones cruzando.",
        en:"A green arrow is a protected turn. Even so, check for pedestrians crossing."}},

  {cat:"situaciones", diag:"dos-izquierdas",
   q:{es:"Usted (azul) y el auto de enfrente (naranja) van a dar vuelta a la izquierda al mismo tiempo. Lo correcto es:",
      en:"You (blue) and the oncoming car (orange) are both turning left at the same time. The correct move is:"},
   opts:[
     {es:"Girar los dos pasando uno frente al otro, manteniendo su lado", en:"Both turn, passing in front of each other, each keeping to their side"},
     {es:"Usted debe esperar a que el otro termine", en:"You must wait for the other to finish"},
     {es:"El otro debe esperar a que usted termine", en:"The other must wait for you to finish"},
     {es:"Los dos deben detenerse por completo", en:"Both must come to a complete stop"}],
   a:0,
   exp:{es:"Cuando dos autos de frente giran a la izquierda, ambos pueden girar a la vez pasando uno delante del otro, sin cruzar trayectorias.",
        en:"When two opposing cars both turn left, both may turn at once by passing in front of each other, without crossing paths."}},

  {cat:"situaciones",
   q:{es:"En Kansas, ¿puede dar vuelta a la IZQUIERDA con luz roja?",
      en:"In Kansas, may you turn LEFT on a red light?"},
   opts:[
     {es:"Sí, solo de una calle de un sentido a otra de un sentido, después de detenerse por completo", en:"Yes, only from a one-way street onto another one-way street, after a complete stop"},
     {es:"No, nunca", en:"No, never"},
     {es:"Sí, en cualquier calle", en:"Yes, on any street"},
     {es:"Solo de noche", en:"Only at night"}],
   a:0,
   exp:{es:"Kansas permite la vuelta a la izquierda en rojo únicamente de una vía de un sentido a otra vía de un sentido, tras el alto total y cediendo el paso. Si hay señal que lo prohíbe, no se puede.",
        en:"Kansas allows a left on red only from a one-way street onto another one-way street, after stopping completely and yielding. If a sign prohibits it, you may not."}},

  // ===== GLORIETA / ROUNDABOUT =====
  {cat:"situaciones", diag:"glorieta",
   q:{es:"Usted (azul) va a entrar a una glorieta y otro auto (naranja) ya está circulando dentro. ¿Qué hace?",
      en:"You (blue) are about to enter a roundabout and another car (orange) is already circulating inside. What do you do?"},
   opts:[
     {es:"Ceder el paso y esperar un espacio seguro", en:"Yield and wait for a safe gap"},
     {es:"Entrar primero porque va más rápido", en:"Enter first because you are moving faster"},
     {es:"Detenerse por completo siempre, aunque esté vacía", en:"Always stop completely, even if it is empty"},
     {es:"Entrar girando a la izquierda", en:"Enter by turning left"}],
   a:0,
   exp:{es:"El tráfico que ya circula dentro de la glorieta tiene la preferencia. Se entra girando a la DERECHA y se circula en sentido contrario a las manecillas.",
        en:"Traffic already in the roundabout has priority. You enter by turning RIGHT and travel counterclockwise."}},

  {cat:"situaciones",
   q:{es:"Va dentro de una glorieta y se pasó de su salida. Lo correcto es:",
      en:"You are in a roundabout and missed your exit. The correct thing is:"},
   opts:[
     {es:"Dar otra vuelta completa y salir la próxima vez", en:"Go around again and take it next time"},
     {es:"Frenar y esperar a que lo dejen salir", en:"Stop and wait for someone to let you out"},
     {es:"Cruzar los carriles rápidamente para alcanzar la salida", en:"Cut across lanes quickly to reach the exit"},
     {es:"Ir en reversa", en:"Back up"}],
   a:0,
   exp:{es:"Nunca frene ni cruce carriles de golpe dentro de una glorieta: simplemente dé otra vuelta.",
        en:"Never stop or cut across lanes inside a roundabout: just go around again."}},

  // ===== PEATONES / PEDESTRIANS =====
  {cat:"situaciones", diag:"peaton-vuelta",
   q:{es:"Usted (azul) va a dar vuelta a la derecha y un peatón (verde) está cruzando por el cruce peatonal. ¿Qué hace?",
      en:"You (blue) are turning right and a pedestrian (green) is crossing in the crosswalk. What do you do?"},
   opts:[
     {es:"Esperar a que el peatón termine de cruzar", en:"Wait for the pedestrian to finish crossing"},
     {es:"Girar rápido antes de que llegue", en:"Turn quickly before they get there"},
     {es:"Pasar por detrás del peatón", en:"Drive behind the pedestrian"},
     {es:"Tocar el claxon para que se apure", en:"Honk so they hurry"}],
   a:0,
   exp:{es:"El peatón en el cruce siempre tiene la preferencia. Espere a que llegue completamente a la banqueta.",
        en:"A pedestrian in the crosswalk always has the right-of-way. Wait until they have fully reached the sidewalk."}},

  {cat:"situaciones",
   q:{es:"Está en una intersección SIN cruce peatonal pintado y un peatón quiere cruzar. ¿Tiene derecho de paso?",
      en:"You are at an intersection with NO painted crosswalk and a pedestrian wants to cross. Do they have the right-of-way?"},
   opts:[
     {es:"Sí: en las esquinas existe un cruce peatonal aunque no esté pintado", en:"Yes: a crosswalk exists at corners even when unmarked"},
     {es:"No, solo si está pintado", en:"No, only if it is painted"},
     {es:"Solo si hay señal de alto", en:"Only if there is a stop sign"},
     {es:"Solo los niños tienen preferencia", en:"Only children have the right-of-way"}],
   a:0,
   exp:{es:"Todas las esquinas tienen un cruce peatonal 'implícito' aunque no haya pintura. Ceda el paso igual.",
        en:"Every corner has an implied crosswalk even without paint. Yield just the same."}},

  {cat:"situaciones",
   q:{es:"El auto del carril de al lado se detiene sin razón aparente antes de un cruce peatonal. Usted debe:",
      en:"The car in the next lane stops for no apparent reason before a crosswalk. You should:"},
   opts:[
     {es:"Detenerse también: probablemente está cediendo el paso a un peatón que usted no ve", en:"Stop too: they are probably yielding to a pedestrian you cannot see"},
     {es:"Rebasarlo con cuidado", en:"Carefully pass them"},
     {es:"Tocar el claxon", en:"Honk at them"},
     {es:"Cambiarse de carril y seguir", en:"Change lanes and continue"}],
   a:0,
   exp:{es:"Nunca rebase a un vehículo detenido en un cruce peatonal. Ese auto le tapa la vista de un peatón que puede estar cruzando.",
        en:"Never pass a vehicle stopped at a crosswalk. That car is blocking your view of a pedestrian who may be crossing."}},

  // ===== VEHÍCULOS DE EMERGENCIA / EMERGENCY =====
  {cat:"situaciones", diag:"emergencia",
   q:{es:"Usted (azul) está DENTRO de una intersección y una ambulancia con sirena se acerca por detrás. ¿Qué hace?",
      en:"You (blue) are IN an intersection and an ambulance with its siren approaches from behind. What do you do?"},
   opts:[
     {es:"Terminar de cruzar la intersección y luego orillarse a la derecha", en:"Finish crossing the intersection, then pull over to the right"},
     {es:"Frenar de inmediato ahí mismo", en:"Stop immediately right there"},
     {es:"Dar vuelta a la izquierda rápido", en:"Quickly turn left"},
     {es:"Acelerar para no estorbarle", en:"Speed up to stay out of its way"}],
   a:0,
   exp:{es:"Nunca se detenga dentro de una intersección: bloquea a la ambulancia. Salga de la intersección y ahí oríllese a la derecha.",
        en:"Never stop inside an intersection: it blocks the ambulance. Clear the intersection first, then pull to the right."}},

  {cat:"situaciones",
   q:{es:"Una patrulla con sirena viene de FRENTE por el otro lado de una calle de dos sentidos. Usted debe:",
      en:"A police car with its siren is coming TOWARD you on the other side of a two-way street. You should:"},
   opts:[
     {es:"Orillarse a la derecha y detenerse también", en:"Pull to the right and stop as well"},
     {es:"Seguir normal: viene del otro lado", en:"Continue normally: it is on the other side"},
     {es:"Acelerar para dejar el camino libre", en:"Speed up to clear the road"},
     {es:"Cambiarse al carril izquierdo", en:"Move into the left lane"}],
   a:0,
   exp:{es:"En una calle de dos sentidos sin camellón, el tráfico de AMBOS lados debe orillarse y detenerse.",
        en:"On a two-way street with no median, traffic in BOTH directions must pull over and stop."}},

  // ===== AUTOBÚS ESCOLAR / SCHOOL BUS =====
  {cat:"situaciones", diag:"bus-dividida",
   q:{es:"Un autobús escolar se detiene con luces rojas del OTRO lado de una carretera dividida por camellón. Usted (azul) viene en sentido contrario. ¿Debe detenerse?",
      en:"A school bus stops with red lights on the OTHER side of a highway divided by a median. You (blue) are traveling the opposite direction. Must you stop?"},
   opts:[
     {es:"No, pero debe seguir con precaución", en:"No, but continue with caution"},
     {es:"Sí, siempre", en:"Yes, always"},
     {es:"Sí, pero solo si ve niños", en:"Yes, but only if you see children"},
     {es:"Solo si va a menos de 30 mph", en:"Only if going under 30 mph"}],
   a:0,
   exp:{es:"El camellón o barrera separa los sentidos, así que el tráfico contrario no está obligado a parar. SIN camellón, sí debe detenerse aunque haya varios carriles.",
        en:"A median or barrier separates the directions, so opposing traffic need not stop. WITHOUT a median, you must stop even on a multi-lane road."}},

  {cat:"situaciones",
   q:{es:"En una calle ancha de cuatro carriles SIN camellón, un autobús escolar se detiene con luces rojas del otro lado. ¿Debe detenerse?",
      en:"On a wide four-lane street with NO median, a school bus stops with red lights on the other side. Must you stop?"},
   opts:[
     {es:"Sí: sin camellón, todo el tráfico en ambos sentidos se detiene", en:"Yes: with no median, all traffic in both directions stops"},
     {es:"No, hay cuatro carriles", en:"No, there are four lanes"},
     {es:"Solo el carril de junto al autobús", en:"Only the lane next to the bus"},
     {es:"Solo si el autobús está en su carril", en:"Only if the bus is in your lane"}],
   a:0,
   exp:{es:"Lo que importa no es el número de carriles, sino si hay un camellón o barrera física que separe los sentidos.",
        en:"What matters is not the number of lanes but whether a median or physical barrier separates the directions."}},

  // ===== INCORPORARSE Y CEDER / MERGING & YIELDING =====
  {cat:"situaciones",
   q:{es:"Va a entrar a una autopista por la rampa y el carril de aceleración se está acabando, pero no hay espacio. ¿Qué hace?",
      en:"You are entering a highway on the ramp and the acceleration lane is ending, but there is no gap. What do you do?"},
   opts:[
     {es:"Ajustar su velocidad y buscar un espacio; ceder el paso al tráfico de la autopista", en:"Adjust your speed and find a gap; yield to highway traffic"},
     {es:"Meterse a la fuerza: usted tiene la preferencia", en:"Force your way in: you have the right-of-way"},
     {es:"Detenerse al final de la rampa", en:"Stop at the end of the ramp"},
     {es:"Usar el acotamiento para seguir", en:"Use the shoulder to keep going"}],
   a:0,
   exp:{es:"El tráfico de la autopista tiene la preferencia. Detenerse al final de la rampa es muy peligroso: cause un choque por atrás.",
        en:"Highway traffic has the right-of-way. Stopping at the end of the ramp is very dangerous and invites a rear-end crash."}},

  {cat:"situaciones",
   q:{es:"Llega a una señal de CEDA EL PASO (triángulo invertido) y no viene nadie. ¿Debe detenerse?",
      en:"You reach a YIELD sign (upside-down triangle) and no one is coming. Must you stop?"},
   opts:[
     {es:"No es obligatorio parar, pero sí bajar la velocidad y estar listo para detenerse", en:"You need not stop, but you must slow down and be ready to stop"},
     {es:"Sí, siempre alto total", en:"Yes, always a full stop"},
     {es:"No, puede pasar a la misma velocidad", en:"No, you may go through at the same speed"},
     {es:"Solo se detiene de noche", en:"You only stop at night"}],
   a:0,
   exp:{es:"CEDA EL PASO exige reducir la velocidad y ceder; se detiene solo si hace falta para no estorbar.",
        en:"YIELD requires slowing and giving way; you stop only if necessary to avoid interfering."}},

  {cat:"situaciones",
   q:{es:"Sale de un estacionamiento y va a entrar a la calle. Hay peatones en la banqueta y autos en la calle. ¿Quién cede?",
      en:"You are leaving a parking lot to enter the street. There are pedestrians on the sidewalk and cars on the street. Who yields?"},
   opts:[
     {es:"Usted cede a los peatones y a todo el tráfico", en:"You yield to the pedestrians and to all traffic"},
     {es:"Los peatones deben esperar", en:"The pedestrians must wait"},
     {es:"Los autos deben dejarlo entrar", en:"The cars must let you in"},
     {es:"El primero que llegue", en:"Whoever gets there first"}],
   a:0,
   exp:{es:"Quien sale de un estacionamiento, callejón o entrada privada cede a TODOS: primero a los peatones de la banqueta, luego al tráfico.",
        en:"Anyone leaving a parking lot, alley, or driveway yields to EVERYONE: first to sidewalk pedestrians, then to traffic."}},

  // ===== SITUACIONES DIFÍCILES / TRICKY SITUATIONS =====
  {cat:"situaciones",
   q:{es:"El semáforo se pone verde pero el tráfico del otro lado está detenido y no cabe su auto al cruzar. ¿Qué hace?",
      en:"Your light turns green but traffic ahead is backed up and there is no room for your car on the far side. What do you do?"},
   opts:[
     {es:"Esperar antes de la intersección hasta que haya espacio para cruzar completamente", en:"Wait before the intersection until there is room to clear it completely"},
     {es:"Entrar de todos modos: tiene luz verde", en:"Go anyway: you have a green light"},
     {es:"Entrar hasta la mitad", en:"Pull in halfway"},
     {es:"Tocar el claxon a los de adelante", en:"Honk at the cars ahead"}],
   a:0,
   exp:{es:"Bloquear la intersección es infracción y traba a todos. Solo entre si puede salir del otro lado.",
        en:"Blocking the intersection is a violation and jams everyone. Only enter if you can clear the far side."}},

  {cat:"situaciones",
   q:{es:"En una intersección, su semáforo tiene luz roja INTERMITENTE y el de la calle que cruza tiene amarilla intermitente. ¿Qué significa?",
      en:"At an intersection, your signal is FLASHING red and the cross street has flashing yellow. What does that mean?"},
   opts:[
     {es:"Usted se detiene y cede: la otra calle solo reduce la velocidad", en:"You stop and yield: the other street only slows down"},
     {es:"Los dos se detienen", en:"Both streets stop"},
     {es:"Usted tiene la preferencia", en:"You have the right-of-way"},
     {es:"El semáforo está descompuesto: pase sin parar", en:"The signal is broken: go through without stopping"}],
   a:0,
   exp:{es:"Rojo intermitente = alto total y ceder. Amarillo intermitente = seguir con precaución. La calle con amarillo tiene preferencia.",
        en:"Flashing red = full stop and yield. Flashing yellow = proceed with caution. The street with yellow has priority."}},

  {cat:"situaciones",
   q:{es:"Se detuvo en un alto pero unos arbustos le tapan la vista de la calle que cruza. ¿Qué hace?",
      en:"You stopped at a stop sign but bushes block your view of the cross street. What do you do?"},
   opts:[
     {es:"Avanzar poco a poco después del alto hasta poder ver, y ceder el paso", en:"Creep forward slowly after stopping until you can see, then yield"},
     {es:"Cruzar rápido y confiar en la suerte", en:"Cross quickly and hope for the best"},
     {es:"Tocar el claxon y cruzar", en:"Honk and cross"},
     {es:"Regresar por otra calle", en:"Turn around and take another street"}],
   a:0,
   exp:{es:"Después del alto obligatorio, avance despacio hasta tener visibilidad y vuelva a detenerse si hace falta. Este segundo alto es normal y legal.",
        en:"After the required stop, edge forward slowly until you can see, stopping again if needed. That second stop is normal and legal."}},

  {cat:"situaciones",
   q:{es:"Un tren acaba de pasar y las barreras empiezan a subir, pero hay DOS vías. ¿Qué debe hacer?",
      en:"A train just passed and the gates begin to rise, but there are TWO sets of tracks. What should you do?"},
   opts:[
     {es:"Revisar la segunda vía antes de cruzar: un tren puede esconder a otro", en:"Check the second track before crossing: one train can hide another"},
     {es:"Cruzar de inmediato", en:"Cross immediately"},
     {es:"Seguir al auto de adelante", en:"Follow the car ahead"},
     {es:"Cruzar rápido antes de que bajen otra vez", en:"Cross fast before the gates come down again"}],
   a:0,
   exp:{es:"Un tren puede ocultar otro que viene en sentido contrario por la segunda vía. Espere a que las señales se apaguen por completo y mire a ambos lados.",
        en:"One train can hide another coming the other way on the second track. Wait for the signals to stop completely and look both ways."}},

  {cat:"situaciones",
   q:{es:"Un ciclista va delante de usted en su carril y se acerca una intersección. ¿Cómo debe tratarlo?",
      en:"A bicyclist is ahead of you in your lane and an intersection is coming up. How should you treat them?"},
   opts:[
     {es:"Como a cualquier otro vehículo: tiene los mismos derechos", en:"Like any other vehicle: they have the same rights"},
     {es:"Rebasarlo antes de la intersección", en:"Pass them before the intersection"},
     {es:"Tocarle el claxon para que se orille", en:"Honk so they move over"},
     {es:"Pasarlo por la derecha", en:"Pass them on the right"}],
   a:0,
   exp:{es:"El ciclista es un vehículo con los mismos derechos. No lo rebase justo antes de una intersección: puede ir a dar vuelta.",
        en:"A cyclist is a vehicle with the same rights. Do not pass right before an intersection: they may be turning."}},

  {cat:"situaciones",
   q:{es:"Va a dar vuelta a la derecha y hay un ciclista a su derecha, entre usted y la banqueta. ¿Qué hace?",
      en:"You are turning right and a cyclist is to your right, between you and the curb. What do you do?"},
   opts:[
     {es:"Cederle el paso y girar detrás de él", en:"Yield and turn behind them"},
     {es:"Girar primero: usted es más grande", en:"Turn first: you are bigger"},
     {es:"Acelerar para pasarlo antes de girar", en:"Speed up to get past them before turning"},
     {es:"Girar junto a él al mismo tiempo", en:"Turn alongside them at the same time"}],
   a:0,
   exp:{es:"Girar frente a un ciclista que va derecho es una de las causas más comunes de atropello. Cédale el paso.",
        en:"Turning across a cyclist going straight is one of the most common ways they get hit. Yield to them."}},

  {cat:"situaciones",
   q:{es:"Usted va derecho con luz verde. Otro auto ya está dentro de la intersección esperando para dar vuelta. ¿Qué hace?",
      en:"You have a green light going straight. Another car is already in the intersection waiting to turn. What do you do?"},
   opts:[
     {es:"Dejar que termine su maniobra antes de avanzar", en:"Let them complete their turn before you proceed"},
     {es:"Avanzar: usted tiene luz verde", en:"Go: you have the green light"},
     {es:"Tocar el claxon", en:"Honk"},
     {es:"Rodearlo por la derecha", en:"Go around them on the right"}],
   a:0,
   exp:{es:"Siempre ceda a los vehículos que ya están dentro de la intersección, aunque usted tenga verde.",
        en:"Always yield to vehicles already in the intersection, even when you have a green light."}},

  {cat:"situaciones",
   q:{es:"Dos autos llegan a un alto de 4 vías: usted va a dar vuelta a la DERECHA y el otro, de frente, va a dar vuelta a la IZQUIERDA. ¿Quién pasa primero?",
      en:"Two cars reach a four-way stop: you are turning RIGHT and the oncoming car is turning LEFT. Who goes first?"},
   opts:[
     {es:"Usted: quien da vuelta a la derecha pasa antes que quien da vuelta a la izquierda", en:"You: a right turn goes before a left turn"},
     {es:"El otro auto", en:"The other car"},
     {es:"Los dos a la vez", en:"Both at once"},
     {es:"El que llegó por la calle principal", en:"Whoever came from the main street"}],
   a:0,
   exp:{es:"Con llegada simultánea, el orden es: derecho primero, luego vuelta a la derecha, y al final vuelta a la izquierda.",
        en:"On simultaneous arrival the order is: straight first, then right turns, and left turns last."}}
];
