# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=18.17.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Next.js"

# Next.js app lives here
WORKDIR /app

# Install pnpm
# ARG PNPM_VERSION=8.3.1
# RUN npm install -g pnpm@$PNPM_VERSION


# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules
COPY --link .npmrc package.json package-lock.json ./
RUN npm install

# Copy application code
COPY --link . .

# Build application
ARG STRAPI_KEY
ARG STRAPI_URL
ENV STRAPI_KEY=${STRAPI_KEY}
ENV STRAPI_URL=${STRAPI_URL}
ENV NODE_ENV="production"

RUN npm run build

# Remove development dependencies
# RUN pnpm prune --prod


# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "npm", "run", "start" ]
