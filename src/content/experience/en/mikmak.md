---
company: MikMak (by Spins)
role: Senior Software Engineer
summary: Marketing and commerce software for brands.
location: Remote · US
start: "2025-10"
highlights:
  - metric: "100s"
    label: Destini clients moved to MikMak by the migration module I led, an asynchronous, event-driven process that has already run for hundreds of them.
  - metric: "4 modules"
    label: Moved from the old apps into the new modular monolith, plus a couple of new ones. The old apps were full of bugs and hard to maintain.
  - metric: "< 30 s"
    label: The limit I hold every EF query to, on databases another team owns, with no N+1. At Logiztik I fixed these after the fact. Here I try not to write them.
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

I joined in October 2025, working fully remote for a US company from Ecuador.
MikMak was acquired by Spins in early 2026. From the start they put me on a new
project: the new main app for employees, replacing a couple of old apps that were full of bugs and hard to
maintain. The company is more mature about architecture and design than my
previous ones, and we were on AWS from the first day.

The app is a .NET modular monolith with a Vue 3 UI. There's a big team and I'm
part of it. I'm not the team lead, but most decisions about this app are mine and
I review most of its code, so in practice it's my responsibility. Here the design
decisions are the main part of the job, not something that happens alongside the
tickets. I also manage its infrastructure, which is simple but important:
Route 53, an ALB, Fargate, ElastiCache (Redis), S3, MongoDB and MySQL, with Auth0
for authentication. It's all written in OpenTofu and applied through Spacelift.

After the acquisition we merged with Destini, another Spins company and a
smaller competitor with much the same features. I led the way on the software
that turns Destini clients into MikMak clients. It's a whole module inside the
main app, with a lot of asynchronous, event-driven code, and it has already
migrated hundreds of clients.

I don't touch the SQL databases directly, there's a team for that, but I use EF.
That means making sure queries stay under 30 seconds and don't have N+1 problems.
It's the same kind of problem I used to fix in tickets, and now the job is to not
write it in the first place.

I'm also in charge of a shared component library. Each UI app has its own styling
today, so the components are moving into one npm package that every app can use.

I've been here about a year, almost all of it on this one app. It spans several
microservices, and it will keep growing into the company's main internal app, so
key decisions go through me.
