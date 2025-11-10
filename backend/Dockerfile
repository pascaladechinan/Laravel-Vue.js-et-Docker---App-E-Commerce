# Stage build
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* yarn.lock* ./
RUN npm ci
COPY . .
RUN npm run build

# Stage runtime (nginx)
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Si ton app frontend nécessite réécriture (SPA)
COPY nginx-vue.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
