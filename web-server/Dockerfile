# 첫 번째 단계: 빌드
FROM node:22 AS build
WORKDIR /app
COPY ./testapp/package*.json ./
RUN npm install
COPY ./testapp .
RUN npm run build

# 두 번째 단계: 배포
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/nginx.conf
# COPY nginx/conf.d/nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]