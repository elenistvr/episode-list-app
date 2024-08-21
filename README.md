# Front-end Assignment for Etraveli Group

## Overview

This is a Vite-powered React application.

## Features

- Integration with SWAPI and OMDB APIs.
- Redux state management.
- Search and sort functionality.
- Testing using Jest.

## Setup Instructions

### Prerequisites

- Yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/elenistvr/etraveli-assignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd etraveli-assignment
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```
4. Create a `.env` file in the root directory that has the OMDb apikey you provided in the assignment description for the second endpoint
   ```bash
   VITE_OMDB_API_KEY=apikey
   ```

## Running the Project

1. Start the development server:

```bash
yarn dev
```

2. Open your browser and go to http://localhost:5173 to view the app.

## Running Tests

To run tests with Jest:

```bash
yarn test
```
