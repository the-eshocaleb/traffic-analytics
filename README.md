# Webyn Traffic Analytics

## Overview
Traffic Analytics is a simple web application designed to visualize and analyze website page traffic data. The application displays traffic statistics for different pages, allowing users to view both tabular data and graphical representations of page visits.

## Architecture
The application follows a client-server architecture:

- **Frontend**: Angular-based single-page application
- **Backend**: Symfony PHP framework with a RESTful API
- **Database**: Stores page traffic data (page ID, URL, and traffic count)

## Getting Started

### Prerequisites
- PHP 8.x
- Composer
- Node.js and npm
- Angular CLI

### Backend Setup
1. Navigate to the `server` directory
2. Run `composer install` to install dependencies
3. Configure your database connection in `.env`
4. Run database migrations: `php bin/console doctrine:migrations:migrate`
5. To load dummy data, run `php bin/console doctrine:fixtures:load`
6. To run unit tests, execute `php bin/phpunit`
7. Start the Symfony server: `symfony serve`

### Frontend Setup
1. Navigate to the `client` directory
2. Run `npm install` to install dependencies
3. Start the Angular development server: `ng serve`
4. Access the application at `http://localhost:4200`

## API Documentation

### GET /api/traffic
Returns traffic data for all pages.

**Response Format**:
```json
[
  {
    "page_id": 1,
    "page_url": "/home",
    "traffic": 1500
  },
  {
    "page_id": 2,
    "page_url": "/about",
    "traffic": 750
  }, ...
]
```

## Features

### Backend (Symfony)
- RESTful API endpoint (`/api/traffic`) that provides page traffic data
- Data model for storing page traffic information (page ID, URL, traffic count)
- Repository pattern for data access
- Unit test for API endpoint (`/api/traffic`)

### Frontend (Angular)
- Interactive data table showing page traffic information
- Filtering capability to show pages with traffic above a specified threshold
- Bar chart visualization of traffic data across different pages
- Responsive layout that works on various screen sizes

## Components

### Backend Components
- **Entity**: `Pagetraffic` - Represents the data model for page traffic
- **Repository**: `PagetrafficRepository` - Handles database operations
- **Controller**: `PageTrafficController` - Provides API endpoint for traffic data
- **DataFixtures**: `AppFixtures` - Provides dummy data for database

### Frontend Components
- **Services**: `TrafficDataService` - Fetches data from the backend API
- **Components**:
  - `HeaderComponent` - Application header
  - `TrafficTableComponent` - Displays tabular traffic data with filtering
  - `TrafficChartComponent` - Visualizes traffic data using Chart.js

## Technical Stack
- **Frontend**:
  - Angular
  - TypeScript
  - Chart.js for data visualization
  - RxJS for reactive programming
  - Angular Signals for state management
  
- **Backend**:
  - Symfony PHP framework
  - Doctrine ORM
  - RESTful API design

## Future Improvements
- CRUD functionality for traffic data
