---
sidebar_position: 3
---

# Experienced User Flow

Experienced users can deploy projects on their own cloud accounts (AWS, GCP, Azure) using access and secret keys.

## 2.1 Deployment using UI

1. Enter the GitHub repository link (repository must contain a .yaml file in a format mentioned on website)
2. Provide access key and secret key of your cloud provider.
3. Majs generates a main.tf file from the .yaml file and deploys the application.

## 2.2 Deployment using CLI

### Installation and Configuration:

```
majs
```

```
majs --help
```

```
majs configure
```

### Deployment process:

```
majs init
```

```
majs build
```

```
majs deploy
```
