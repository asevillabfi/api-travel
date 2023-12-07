# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory within the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# ENV https_proxy=http://192.168.36.35:3128

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that your application will run on
EXPOSE 6000

# Define the command to start your application
CMD [ "npm", "start" ]
