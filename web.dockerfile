# We don't want to start from scratch.
# That is why we tell node here to use the current node image as base.
FROM node:16-slim

# Create an application directory
RUN mkdir -p /app

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY reddit-web/package*.json ./

# Install node packages
RUN npm install

# Copy or project directory (locally) in the current directory of our docker image (/app)
COPY reddit-web/ .

# Build the app
RUN npm run start

# Expose $PORT on container.
# We use a varibale here as the port is something that can differ on the environment.
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]