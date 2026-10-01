---
company: CloudStudio
role: Junior Software Engineer
summary: Software bancario para cooperativas de ahorro y crédito de Ecuador.
location: Remote · Ecuador
start: "2019-08"
end: "2023-07"
highlights:
  - metric: "min → s"
    label: Reportes contables y financieros pesados, de 5–10 minutos a hasta 30 segundos. Optimicé procedimientos almacenados, consultas y EF, sin un data warehouse en el que apoyarme.
  - metric: "30 → 2 min"
    label: Cargas masivas de archivos con millones de registros. Reemplacé una extensión de EF de pago con mi propio escritor por lotes y añadí un trabajo en segundo plano para usuarios lejos del servidor.
  - metric: "6×"
    label: Capacité a los equipos de cooperativas que compraron el código, para que pudieran operar el sistema por su cuenta.
stack: [.NET, SQL, Entity Framework, DevExpress, Silverlight]
---

Empecé como pasante en agosto de 2019 y me contrataron unos dos meses después.
El producto era un sistema bancario usado por unas 30 cooperativas de ahorro y
crédito de Ecuador. Cubría ahorros, créditos, inversiones y más, con un gran
motor de parámetros que permitía a los administradores configurar productos y
flujos. Era una aplicación en .NET Framework con un frontend en Silverlight.

Casi todo mi trabajo allí fue dentro de decisiones de diseño que otros habían
tomado. Las primeras que fueron mías eran pequeñas: un escritor por lotes para
las importaciones y un trabajo en segundo plano para los usuarios lejos del
servidor.

Los primeros tres años trabajé tickets: reportes con DevExpress, mantenimiento
de base de datos y código en .NET, EF y Silverlight. Di soporte directo a unas
diez de las cooperativas.

Los reportes salían directamente de la base de datos de producción, así que
acelerarlos significaba optimizar procedimientos almacenados, consultas y EF.
Los más difíciles reconstruían el saldo de una cuenta de ahorros desde su
primera transacción, para comprobar que la contabilidad y las finanzas seguían
cuadrando.

Cuando otro equipo pasó la aplicación a un .NET más nuevo y WPF, dediqué cerca de
un mes a corregir los errores que dejó la migración, hasta que se convirtió en
la versión estándar.
