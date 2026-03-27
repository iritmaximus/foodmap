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
CMD ["npx", "nodemon", "--watch", "src", "--ext", "ts", "--exec", "node --loader ts-node/esm", "src/index.ts"]
EXPOSE 3001
