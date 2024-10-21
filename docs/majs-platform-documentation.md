# Majs Platform Documentation

## Overview

Majs is a platform that simplifies application deployment on various cloud services without requiring extensive knowledge of cloud infrastructure or complex coding.

## Main Features

1. Deployment
2. Copilot (not detailed in this document)

## Deployment Flows

### 1. Beginner User Flow

#### 1.1 Deployment using UI

- Users can deploy projects by providing a GitHub repository link on the Majs website.
- The application will be deployed on Majs' on-premise PC servers.
- A URL with the top-level domain 'majs.live' will be provided.

#### 1.2 Deployment using CLI

Installation and Configuration:
```
majs
majs --help
majs config
```

Deployment process:
```
majs analyze
majs dockerize
majs run
```

### 2. Experienced User Flow

Experienced users can deploy projects on their own cloud accounts (AWS, GCP, Azure) using access and secret keys.

#### 2.1 Deployment using UI

1. Enter the GitHub repository link (repository must contain a .yaml file in a format mentioned on website)
2. Provide access key and secret key of your cloud provider.
3. Majs generates a main.tf file from the .yaml file and deploys the application.

#### 2.2 Deployment using CLI

Installation and Configuration:
```
majs
majs --help
majs config
```

Deployment process:
```
majs cloud config
majs init
majs build
majs deploy
```

## CLI Commands Explained

- `majs`: Main command
- `majs --help`: Get help
- `majs config`: Authenticate user on Majs CLI
- `majs analyze`: Initializes the Majs service, analyzes the project directory, identifies dependencies, and stores the project code in an AWS S3 bucket
- `majs dockerize`: Pulls Docker images of identified dependencies and creates a Docker container for the project
- `majs run`: Deploys the project on Majs' on-premise PC servers
- `majs cloud config`: Configure the chosen cloud provider
- `majs init`: Initialize deployment by generating .yaml file
- `majs build`: Generate main.tf file
- `majs deploy`: Deploy the application

This documentation provides an overview of the Majs Platform and its deployment features for both beginner and experienced users.
