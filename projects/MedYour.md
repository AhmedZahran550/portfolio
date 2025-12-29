---
title: "Medyour Healthcare App"
description: "A robust, scalable backend acting as a centralized hub for an E-Pharmacy and telemedicine platform. Built with NestJS and PostgreSQL to serve 10,000+ users."
image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
tech: ["Node.js", "Nest.js", "PostgreSQL", "Docker", "Redis"]
highlights:
  [
    "85% test coverage",
    "Real-time notifications",
    "Cloud storage",
    "Multi-layer caching",
  ]
repos:
  - text: "Core Backend"
    url: "https://github.com/AhmedZahran550/medyour-be"
  - text: "Jobs/Workers"
    url: "https://github.com/AhmedZahran550/medyour-jobs"
demos:
  - text: "Portal Demo"
    type: "video"
    url: "./assets/videos/medyour.mp4"
seo_keywords:
  [
    "Healthcare App",
    "Telemedicine Backend",
    "NestJS",
    "PostgreSQL",
    "E-Pharmacy",
    "Medical API",
  ]
---

# Project Overview: Medyour Backend

## Project Description

**Medyour-be** is a robust, scalable backend application designed to power an E-Pharmacy and telemedicine platform. Built with **NestJS**, a progressive Node.js framework, it follows a modular architecture to handle complex business logic ranging from e-commerce operations (orders, cart, inventory) to healthcare services (doctor consultations, prescriptions).

The system connects various stakeholders including Customers, Doctors (Providers), and Pharmacy Employees/Admins, ensuring seamless interaction through secure RESTful APIs. It leverages modern database technologies and caching strategies to ensure high performance and reliability.

## Technologies & Stack

### Core Framework & Language

- **[NestJS v11](https://nestjs.com/)**: A framework for building efficient, scalable Node.js server-side applications.
- **[TypeScript v5.8](https://www.typescriptlang.org/)**: Strongly typed programming language that builds on JavaScript.
- **Node.js**: Asynchronous event-driven runtime.

### Database & ORM

- **[PostgreSQL](https://www.postgresql.org/)**: Advanced open-source relational database.
- **[TypeORM](https://typeorm.io/)**: ORM for TypeScript and JavaScript (ES7, ES6, ES5).
- **Redis**: In-memory data structure store, used as a database, cache, and message broker.

### Authentication & Security

- **JWT (JSON Web Tokens)**: Stateless authentication mechanism.
- **Passport.js**: Authentication middleware for Node.js.
- **Argon2**: Secure password hashing algorithm.
- **Helmet**: Helps secure Express apps by setting various HTTP headers.

### Integrations & Services

- **Firebase Admin**: Likely used for mobile app authentication or push management.
- **Google Cloud Storage**: For storing files (images, documents).
- **Google Maps API**: For location-based services (branches, delivery).
- **Expo SDK**: For sending push notifications to mobile devices.
- **Nodemailer**: For sending transactional emails.

### Utilities

- **Class Validator / Class Transformer**: For DTO validation and transformation.
- **NestJS i18n**: Internationalization support.
- **RxJS**: Reactive Extensions for JavaScript.

## Key Features

The application is structured into domain-driven modules:

1.  **E-Commerce & Retail**

    - **Orders & Cart**: Full lifecycle management of customer orders and shopping carts.
    - **Items & Inventory**: Management of pharmaceutical products, offers, and promotions.
    - **Branches**: Location-based branch management and inventory tracking.

2.  **Healthcare Services**

    - **Providers (Doctors)**: Management of healthcare professionals, specialties, and schedules.
    - **Consultations**: Logic for handling doctor-patient interactions (implied).

3.  **User Management**

    - **Authentication**: Secure login/signup for Customers, Employees, and Doctors.
    - **Role-Based Access Control (RBAC)**: Distinct permissions for different user types.
    - **Loyalty Programs**: Loyalty points and rewards system.

4.  **Financials**

    - **Transactions**: Handling payments, refunds, and balance transactions.
    - **Subscriptions & Plans**: Management of recurring service plans.

5.  **Operations & Support**
    - **Notifications**: Push notifications and system alerts.
    - **Support Tickets**: Customer support and helpdesk functionality.
    - **Global Search**: Search capability across products and services.

## Skills Used in Development

The development of this project demonstrates proficiency in:

- **Modular Monolith Architecture**: Structuring a large codebase into cohesive, loosely coupled modules.
- **Database Design**: designing complex relational schemas with PostgreSQL.
- **API Development**: Designing RESTful endpoints with strict validation and error handling.
- **Clean Code Principles**: Utilizing Dependency Injection, Decorators, and Interceptors for maintainable code.
- **Performance Engineering**: Implementing caching and database indexing.
- **Integration**: Connecting with third-party cloud services (GCP, Firebase).

## Developer Skills Required

To successfully contribute to this project, a developer should possess:

1.  **Strong TypeScript & Node.js**: Mastery of async/await, types, and modern JS features.
2.  **NestJS Expertise**: Deep understanding of Modules, Services, Controllers, Guards, Pipes, and Interceptors.
3.  **SQL & ORM Proficiency**: Ability to write efficient queries and work with TypeORM entities and migrations.
4.  **Backend Security Knowledge**: Understanding of JWT, hashing, and API security best practices.
5.  **Experience with Redis**: Knowledge of caching strategies to optimize API response times.
6.  **Containerization**: Familiarity with Docker for local development and deployment.

## Performance Optimization

The development approach focuses on high performance through several key strategies. While exact runtime numbers depend on deployment infrastructure, the architectural choices provide quantifiable algorithmic benefits:

1.  **Database Indexing**:

    - **Impact**: Reduces query lookup time from linear **O(n)** to logarithmic **O(log n)**.
    - **Implementation**: The codebase extensively uses `@Index` decorators on frequently queried columns (e.g., in `Order`, `Employee`, `Offer` entities), ensuring that search operations (like finding an order by ID or filtering products) remain fast even as the dataset grows to millions of records.

2.  **Redis Caching**:

    - **Impact**: Reduces data retrieval time from **10-100ms** (database disk I/O) to **<1ms** (in-memory).
    - **Implementation**: Integrated via `CacheModule` and `CacheService`. Frequently accessed static data (like configurations, supported regions) or expensive query results can be cached, drastically reducing load on the primary database and improving API response latency.

3.  **Pagination Strategy**:

    - **Impact**: Prevents memory overflows and slow responses when fetching large lists.
    - **Implementation**: Usage of `nestjs-paginate` ensures that endpoints return manageable chunks of data (e.g., 20 items per page) rather than dumping thousands of records at once, keeping the memory footprint constant **O(1)** relative to total data size.

4.  **Asynchronous Architecture**:
    - **Impact**: Increases throughput (requests per second).
    - **Implementation**: Leveraging Node.js's non-blocking I/O model allows the server to handle concurrent requests efficiently, especially for I/O heavy operations like third-party API calls (Google Maps, Firebase), preventing main thread blockage.
