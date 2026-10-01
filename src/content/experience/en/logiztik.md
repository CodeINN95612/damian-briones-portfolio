---
company: Logiztik Alliance Group
role: Senior Software Engineer
summary: Import and export logistics for Ecuador.
location: Remote · Ecuador
start: "2023-08"
end: "2025-08"
highlights:
  - metric: "Reboots → 0"
    label: The SAP service accounting depended on froze and needed a full server reboot several times a week. A semaphore capping SAP connections fixed it for good.
  - metric: "Months → config"
    label: Connecting to a new external API used to mean a developer writing a new connector, which could take months. Now it's a new entry with the right parameters.
  - metric: "5 min → ms"
    label: Slow queries found while fixing tickets. Mostly N+1 problems, solved with temp tables, CTEs or better EF queries.
stack: [.NET, SQL, Entity Framework, Docker, SAP, Azure DevOps, Next.js]
---

I joined in August 2023 as a junior developer and was made senior soon after,
once the company saw it had misjudged my level. Logiztik handles imports and
exports to and from Ecuador. A client wants a lot of a product, a producer wants
to export it, and neither knows how to move it. Logiztik does all of that for
hundreds of exporters and clients, with millions of dollars of goods moving
daily. The systems behind it were messy.

Over time the work moved from fixing the system to shaping it. Everything ran
on premises, and I made architecture decisions there. I helped add observability
across several services, started an application gateway, split monoliths into
microservices, and brought in Docker, which the infra team and I then used for
new services. Azure Kubernetes was being discussed when I left.

My first big project was the backend of an old mobile app for clients. It was a
.NET Framework API with no architecture, hard to maintain and hard to untangle.
I moved all of it to .NET 8 with Clean Architecture, on my own with a lead
looking over the work.

Accounting used an old service that turned our financial data into something SAP
understood. It kept freezing, and IT had to reboot the whole server several times
a week or accounting couldn't work. Our SAP licence capped the number of
connections, and once enough were open, SAP didn't refuse the next one, it hung
it forever. Restarting the service didn't help, because the hung connections kept
blocking the database. While moving the service to current .NET I added a
semaphore around the SAP SDK so it never opens more connections than allowed.
The freezes stopped completely.

Sending invoices was a blocking operation. One click sent thousands of emails and
tied the user up for hours. I put the emails in a queue and a separate
microservice sends them one by one, so people keep working and any failures show
on an error page. It was a small project, but the first async work the company
had done.

Connecting to external APIs meant a developer writing a whole new connector each
time, and the APIs kept changing or new ones kept arriving. Most of them follow
the same standards, so I rebuilt it as parameters: URLs, auth codes and so on.
When an API arrives with a new standard, supporting it is one more implementation
of an interface (the Strategy pattern) instead of more `if`s.

Alongside all that I fixed hundreds of bugs. In my second year I was put in
charge of the ticket team, up to three people fixing bugs full time while other
teams built features. That wasn't the work I wanted to do, so I left.
