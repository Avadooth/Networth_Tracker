# Hapi PII API

This is a RESTful API built using Hapi.js for managing Personally Identifiable Information (PII) with features such as user registration, authentication, and rate limiting. The application is designed with security and scalability in mind.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [CI/CD](#cicd)
- [License](#license)

## Features
- User registration and authentication
- Secure storage of PII
- Rate limiting to prevent abuse
- Docker support for easy deployment
- Unit tests for user and authentication functionalities

## Technologies Used
- [Hapi.js](https://hapi.dev/) - Web framework for Node.js
- [Sequelize](https://sequelize.org/) - Promise-based Node.js ORM for SQL databases
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - Password hashing library
- [JSON Web Tokens (JWT)](https://jwt.io/) - For user authentication
- [Docker](https://www.docker.com/) - For containerization
- [GitHub Actions](https://github.com/features/actions) - For CI/CD

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Avadooth/Networth_Tracker.git
   cd hapi-pii-api
2.   Install the dependencies:
   npm install
