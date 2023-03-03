# Optimizing AWS Lambda Deployment Packages for Node.js Applications

This project is a sample Node.js application that demonstrates how to optimize the size of AWS Lambda deployment packages. It contains two endpoints: a lightweight endpoint that returns a simple string, and a heavy endpoint that uses multiple dependencies to increase the size of the application bundle.

The techniques used to optimize the size of the deployment packages include using the Serverless Framework, packaging individually, and Browserify. You can read more about these techniques in the accompanying article on [dev.to](https://dev.to/alanneves/optimizing-aws-lambda-how-to-reduce-nodejs-application-bundle-size-2hi1).

## Getting Started
To use this project, clone the repository and navigate to the root directory. Then, follow the steps below.

### Prerequisites
Before you can use this project, you'll need to have the following installed:

- Node.js
- npm
- Serverless Framework

### Installing
To install the project dependencies, run the following command:

    npm install
    
### Packaging
To package the functions, run the following command:

    serverless package
