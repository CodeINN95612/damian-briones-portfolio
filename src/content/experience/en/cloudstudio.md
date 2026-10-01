---
company: CloudStudio
role: Junior Software Engineer
summary: Banking software for credit unions in Ecuador.
location: Remote · Ecuador
start: "2019-08"
end: "2023-07"
highlights:
  - metric: "min → s"
    label: Heavy accounting and financial reports, from 5–10 minutes to as little as 30 seconds. Tuned stored procedures, queries and EF, with no data warehouse to lean on.
  - metric: "30 → 2 min"
    label: Bulk loads of files with millions of records. Replaced a paid EF extension with my own batched writer, and added a background job for users far from the server.
  - metric: "6×"
    label: Trained the teams of credit unions that bought the code, so they could run the system themselves.
stack: [.NET, SQL, Entity Framework, DevExpress, Silverlight]
---

I started as an intern in August 2019 and was hired about two months later. The
product was a banking system used by around 30 savings and credit cooperatives in
Ecuador. It covered savings, loans, investments and more, with a large
parameter engine that let administrators configure products and workflows. It was
a .NET Framework application with a Silverlight front end.

Almost all of my work there was inside design decisions other people had made.
The first ones that were mine were small: a batch writer for the imports and a
background job for users far from the server.

For the first three years I worked tickets: reports with DevExpress, database
maintenance and code in .NET, EF and Silverlight. I gave direct support to about
ten of the cooperatives.

The reports ran straight off the production database, so making them faster meant
tuning stored procedures, queries and EF. The hardest ones rebuilt a savings
account's balance from its very first transaction, to check that accounting and
finance still added up.

When another team moved the application to newer .NET and WPF, I spent about a
month fixing the bugs the migration left, until it became the standard version.
