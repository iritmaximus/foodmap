FROM node:20-alpine
WORKDIR /usr/src/app

ENV NODE_ENV=development

# Install deps
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source
COPY . .

# Example dev command using ts-node and nodemon
# Ensure you have ts-node and nodemon in devDependencies.
# Replace the command with your own dev script.
CMD ["npm", "run", "dev"]
EXPOSE 3000
