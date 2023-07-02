# Employees Voting App

This is a sample application for managing employee voting. The application is built using Next.js, GraphQL, React, styled-components, and Docker.

## Technologies Used

- Next.js
- GraphQL
- React
- styled-components
- Docker

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository_url>

   ```

2. Navigate to the project directory:

```
cd employees-voting-app
```

3. Install the dependencies:

```
npm install
```

4. run:

```
npm run dev
```

5. Open your browser and visit http://localhost:3000 to view the application.

Docker Deployment

To deploy the application using Docker, make sure you have Docker installed on your system. Then, follow these steps:

1. Build the Docker image:

```
docker build -t employes-voting-app .
```

2. Run the Docker container:

```
docker run -p 3000:3000 employes-voting-app
```

The application will be accessible at http://localhost:3000.

For detailed information about the project and its components, refer to the project documentation or the source code.
