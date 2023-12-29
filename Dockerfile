# FROM node
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# FROM node:alpine
# WORKDIR /app
# COPY --from=build /app/build ./build
# RUN npm install -g http-server
# EXPOSE 3000
# CMD ["http-server", "-p", "3000", "./build"]

# Use an appropriate Node.js base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install -g npm@10.2.5

# Copy the rest of the application files
COPY . .

# Set the command to start the React app
CMD ["npm", "start"]
