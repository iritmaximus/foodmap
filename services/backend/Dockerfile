# ---- Base builder ----
FROM node:20-alpine AS deps
WORKDIR /usr/src/app

# Install dependencies (use npm ci if package-lock.json exists)
COPY package.json package-lock.json* ./
# If you use pnpm or yarn, copy their lockfiles and change the install command
RUN npm ci

COPY . .

# Ensure TypeScript is available (if not listed as a prod dep)
# If typescript is only a devDependency, npm ci in deps will still install it.
# Build will produce dist/ via your tsconfig/build script.
RUN npm run build

# ---- Runtime ----
FROM node:20-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
# Copy only what is needed to run
COPY --from=build /usr/src/app/package.json ./
COPY --from=build /usr/src/app/package-lock.json* ./
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

# If your app needs other runtime assets (e.g., views, public), copy them:
COPY --from=build /app/public ./public

# If you use ESM, ensure "type": "module" and entry is dist/index.js
# Set the default command to your built entrypoint
CMD ["node", "dist/index.js"]
# Or if you have a start script that runs node dist/index.js:
# CMD ["npm", "start"]

# Expose port if running a server inside
EXPOSE 3000
