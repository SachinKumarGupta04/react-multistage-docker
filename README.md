# React Multi-Stage Docker

## Overview
This project demonstrates how to Dockerize a React application using multi-stage Docker builds. The multi-stage approach optimizes the final image size by separating the build environment from the production runtime environment.

## Features
- **Multi-Stage Build**: Uses Node.js for building and Nginx for serving
- **Optimized Image Size**: Significantly smaller production image by excluding dev dependencies
- **Production Ready**: Configured for efficient deployment
- **Create React App**: Built with the official React template

## Architecture

### Stage 1: Build Stage (Node.js)
- Uses Node.js image
- Installs dependencies
- Builds the React application
- Creates optimized production bundle

### Stage 2: Production Stage (Nginx)
- Uses lightweight Nginx image
- Copies only the built static files from Stage 1
- Serves the application efficiently
- Minimal footprint for production

## Prerequisites
- Docker installed on your machine
- Basic understanding of React and Docker

## Getting Started

### Building the Docker Image
```bash
docker build -t react-multistage-app .
```

### Running the Container
```bash
docker run -p 80:80 react-multistage-app
```

The application will be available at `http://localhost`

## Project Structure
```
react-multistage-docker/
├── Dockerfile          # Multi-stage Docker configuration
├── .dockerignore      # Files to exclude from Docker build
├── .gitignore         # Git ignored files
├── package.json       # Node.js dependencies
├── public/            # Static files
└── src/               # React source code
```

## Benefits of Multi-Stage Builds

1. **Smaller Image Size**: Final image only contains production artifacts
2. **Security**: Reduces attack surface by excluding build tools
3. **Separation of Concerns**: Clear distinction between build and runtime
4. **Faster Deployments**: Smaller images transfer and start faster
5. **Cost Efficiency**: Less storage and bandwidth usage

## Docker Configuration

The project includes:
- **Dockerfile**: Defines the multi-stage build process
- **.dockerignore**: Excludes unnecessary files (node_modules, build artifacts, etc.)

## Learn More

- [Docker Multi-Stage Builds](https://docs.docker.com/build/building/multi-stage/)
- [Create React App Documentation](https://create-react-app.dev/)
- [Nginx Docker Image](https://hub.docker.com/_/nginx)

## License
MIT
