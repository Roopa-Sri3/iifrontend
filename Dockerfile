#FROM node:20.14.0 as build
# Set the working directory
#WORKDIR /home/app
# Copy the package.json and package-lock.json files
#COPY . ./
# Install dependencies
#RUN npm ci

#COPY . .

#RUN npm run build

FROM nginx:latest

COPY --from=build /app/build /usr/share/nginx/html
# Expose port 80 for Nginx
EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
 
