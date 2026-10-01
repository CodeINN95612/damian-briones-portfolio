---
company: Logiztik Alliance Group
role: Senior Software Engineer
summary: Logística de importación y exportación para Ecuador.
location: Remote · Ecuador
start: "2023-08"
end: "2025-08"
highlights:
  - metric: "Reinicios → 0"
    label: El servicio de SAP del que dependía contabilidad se congelaba y exigía reiniciar todo el servidor varias veces por semana. Un semáforo que limita las conexiones a SAP lo resolvió para siempre.
  - metric: "Meses → config"
    label: Conectarse a una API externa nueva implicaba que un desarrollador escribiera un conector nuevo, lo que podía tomar meses. Ahora es una entrada nueva con los parámetros correctos.
  - metric: "5 min → ms"
    label: Consultas lentas que encontré al resolver tickets. Casi siempre problemas N+1, resueltos con tablas temporales, CTE o mejores consultas de EF.
stack: [.NET, SQL, Entity Framework, Docker, SAP, Azure DevOps, Next.js]
---

Entré en agosto de 2023 como desarrollador junior y me subieron a senior poco
después, cuando la empresa vio que había evaluado mal mi nivel. Logiztik maneja
importaciones y exportaciones desde y hacia Ecuador. Un cliente quiere mucho de
un producto, un productor quiere exportarlo, y ninguno sabe cómo moverlo.
Logiztik se encarga de todo eso para cientos de exportadores y clientes, con
millones de dólares en mercadería moviéndose cada día. Los sistemas detrás eran
un desorden.

Con el tiempo el trabajo pasó de arreglar el sistema a darle forma. Todo corría
on premises, y ahí tomé decisiones de arquitectura. Ayudé a añadir observabilidad
a varios servicios, empecé un application gateway, separé monolitos en
microservicios y traje Docker, que luego usamos con el equipo de infraestructura
para los servicios nuevos. Cuando me fui se hablaba de usar Azure Kubernetes.

Mi primer proyecto grande fue el backend de una app móvil antigua para clientes.
Era una API en .NET Framework sin arquitectura, difícil de mantener y de
desenredar. La pasé completa a .NET 8 con Clean Architecture, yo solo y con un
líder revisando el trabajo.

Contabilidad usaba un servicio viejo que convertía nuestros datos financieros a
algo que SAP entendía. Se congelaba seguido, y TI tenía que reiniciar todo el
servidor varias veces por semana o contabilidad no podía trabajar. Nuestra
licencia de SAP limitaba el número de conexiones, y cuando había suficientes
abiertas, SAP no rechazaba la siguiente, la dejaba colgada para siempre. Reiniciar
el servicio no ayudaba, porque las conexiones colgadas seguían bloqueando la base
de datos. Al pasar el servicio a .NET actual añadí un semáforo alrededor del SDK
de SAP para que nunca abra más conexiones de las permitidas. Los congelamientos
se acabaron por completo.

Enviar facturas era una operación bloqueante. Un clic mandaba miles de correos y
dejaba al usuario atado durante horas. Puse los correos en una cola y un
microservicio aparte los envía uno por uno, así la gente sigue trabajando y los
fallos aparecen en una página de errores. Fue un proyecto pequeño, pero el primer
trabajo asíncrono de la empresa.

Conectarse a APIs externas significaba que un desarrollador escribiera un
conector nuevo cada vez, y las APIs cambiaban o llegaban nuevas todo el tiempo.
La mayoría sigue los mismos estándares, así que lo rehíce con parámetros: URLs,
códigos de autenticación y similares. Si llega una API con un estándar nuevo,
soportarla es una implementación más de una interfaz (el patrón Strategy) en vez
de más `if`.

En paralelo corregí cientos de errores. En mi segundo año me pusieron a cargo del
equipo de tickets, hasta tres personas corrigiendo errores a tiempo completo
mientras otros equipos construían funcionalidades. Ese no era el trabajo que
quería hacer, así que me fui.
