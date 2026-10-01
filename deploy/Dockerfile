# Build the static site, then serve `dist/` with nginx. Deployed by Dokploy.
# The build context is the repo root, so run it from there:
#   docker build -f deploy/Dockerfile .

FROM node:22-alpine AS build
WORKDIR /app
RUN npm install -g pnpm@11.9.0

# Dependencies first, so this layer is cached until the lockfile changes.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM nginx:alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO /dev/null http://127.0.0.1/ || exit 1
