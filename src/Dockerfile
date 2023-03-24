# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:lts as build

RUN npm install -g http-server

# Set the working directory
WORKDIR /app

# Add the source code to app
COPY . .

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npx ng build --configuration production

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest
# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/bank-root-front /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/nginx.conf


# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
