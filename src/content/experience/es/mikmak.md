---
company: MikMak (by Spins)
role: Senior Software Engineer
summary: Software de marketing y comercio para marcas.
location: Remoto · EE. UU.
start: "2025-10"
highlights:
  - metric: "100s"
    label: Clientes de Destini pasados a MikMak por el módulo de migración que lideré, un proceso asíncrono y orientado a eventos que ya se ha ejecutado para cientos de ellos.
  - metric: "4 módulos"
    label: Pasados de las apps viejas al nuevo monolito modular, más un par de módulos nuevos. Las apps viejas estaban llenas de errores y eran difíciles de mantener.
  - metric: "< 30 s"
    label: El límite al que someto cada consulta de EF, sobre bases de datos que son de otro equipo, sin N+1. En Logiztik arreglaba esto después. Aquí intento no escribirlo.
stack:
  [
    .NET,
    Vue 3,
    AWS,
    Fargate,
    MongoDB,
    MySQL,
    Redis,
    Auth0,
    OpenTofu,
    Spacelift,
    Datadog,
  ]
---

Entré en octubre de 2025, completamente remoto para una empresa de EE. UU. desde
Ecuador. Spins adquirió MikMak a comienzos de 2026. Desde el principio me
pusieron en un proyecto nuevo: la nueva app principal para los empleados, que reemplaza a un par de apps viejas llenas de
errores y difíciles de mantener. La empresa tiene más madurez en arquitectura y
diseño que las anteriores, y desde el primer día estábamos en AWS.

La app es un monolito modular en .NET con una interfaz en Vue 3. Hay un equipo
grande y soy parte de él. No soy el líder del equipo, pero la mayoría de las
decisiones sobre esta app son mías y reviso casi todo su código, así que en la
práctica es mi responsabilidad. Aquí las decisiones de diseño son la parte
principal del trabajo, no algo que ocurre junto a los tickets. También gestiono
su infraestructura, que es sencilla pero importante: Route 53, un ALB, Fargate,
ElastiCache (Redis), S3, MongoDB y MySQL, con Auth0 para la autenticación. Todo
está escrito en OpenTofu y se aplica con Spacelift.

Tras la adquisición nos fusionamos con Destini, otra empresa de Spins y un
competidor más pequeño con funciones muy parecidas. Yo abrí el camino con el
software que convierte a los clientes de Destini en clientes de MikMak. Es un
módulo completo dentro de la app principal, con mucho código asíncrono y orientado
a eventos, y ya ha migrado a cientos de clientes.

No toco las bases de datos SQL directamente, hay un equipo para eso, pero uso EF.
Eso significa asegurarme de que las consultas no pasen de 30 segundos y no tengan
problemas N+1. Es el mismo tipo de problema que antes arreglaba en tickets, y
ahora el trabajo es no escribirlo desde el principio.

También estoy a cargo de una biblioteca de componentes compartida. Hoy cada app
de UI tiene su propio estilo, así que los componentes se están moviendo a un solo
paquete de npm que pueda usar cualquier app.

Llevo cerca de un año aquí, casi todo en esta misma app. Abarca varios
microservicios y va a seguir creciendo hasta ser la app interna principal de la
empresa, así que las decisiones clave pasan por mí.
