# Automated Testing Examples

This repository contains a series of progressive examples demonstrating different testing approaches and tools in Node.js/TypeScript applications. Each project builds upon the previous one, introducing new concepts and testing strategies.

## Project Overview

### 1. Simple Test (`1-simple-test/`)
**Basic Jest Testing with TypeScript**

A foundational example showing how to set up Jest with TypeScript for testing simple functions.

**Key Features:**
- Basic Jest configuration with TypeScript support
- Simple function testing (`sum` function)
- Unit test examples with multiple test cases

**Files:**
- `src/index.ts` - Contains a simple `sum` function
- `src/tests/sum.test.ts` - Unit tests for the sum function
- `jest.config.js` - Jest configuration
- `package.json` - Dependencies: `@jest/globals`, `ts-jest`

**Run Tests:**
```bash
cd 1-simple-test
npm test
```

---

### 2. Simple Express App (`2-simple-express-app/`)
**Express API Testing with Supertest**

Demonstrates how to test Express.js applications using Supertest for HTTP endpoint testing.

**Key Features:**
- Express.js application with POST `/sum` endpoint
- Supertest integration for API testing
- HTTP request/response testing
- Multiple test scenarios (positive and edge cases)

**Files:**
- `src/index.ts` - Express app with `/sum` POST endpoint
- `src/tests/sum.test.ts` - API tests using Supertest
- `package.json` - Dependencies: `express`, `supertest`, `@types/express`, `@types/supertest`

**Run Tests:**
```bash
cd 2-simple-express-app
npm test
```

---

### 3. Express with Zod (`3-express-with-zod/`)
**Input Validation and Error Handling Testing**

Shows how to implement and test input validation using Zod schema validation.

**Key Features:**
- Zod schema validation for request inputs
- Error handling for invalid inputs (returns 411 status)
- Both POST and GET endpoints with validation
- Testing validation error scenarios

**Files:**
- `src/index.ts` - Express app with Zod validation
- `src/tests/sum.test.ts` - Tests for validation scenarios
- `package.json` - Dependencies: `zod` for schema validation

**Key Testing Scenarios:**
- Valid input testing
- Invalid input testing (missing fields, wrong types)
- Error response validation

**Run Tests:**
```bash
cd 3-express-with-zod
npm test
```

---

### 4. Express with Vitest (`4-express-with-vitest/`)
**Modern Testing with Vitest**

Migrates from Jest to Vitest, a faster and more modern testing framework.

**Key Features:**
- Vitest as the testing framework (faster than Jest)
- Same Express app with Zod validation
- Identical test coverage but with Vitest syntax
- Better performance and developer experience

**Files:**
- `src/index.ts` - Same Express app as project 3
- `src/tests/index.test.ts` - Vitest-based tests
- `package.json` - Dependencies: `vitest` instead of Jest

**Run Tests:**
```bash
cd 4-express-with-vitest
npm test
```

---

### 5. Express Vitest Prisma (`5-express-vitest-prisma/`)
**Database Integration and Mocking**

Advanced example showing how to test applications with database integration using Prisma ORM and mocking strategies.

**Key Features:**
- Prisma ORM integration with PostgreSQL
- Database operations (create, read operations)
- Mocking database calls in tests
- Advanced mocking with `vitest-mock-extended`
- Database schema with Prisma

**Files:**
- `src/index.ts` - Express app with Prisma database operations
- `src/db.ts` - Prisma client configuration
- `src/__mocks__/db.ts` - Mock implementation for testing
- `src/tests/index.test.ts` - Tests with database mocking
- `prisma/schema.prisma` - Database schema definition
- `package.json` - Dependencies: `@prisma/client`, `prisma`, `vitest-mock-extended`

**Database Schema:**
```prisma
model Sum {
  id     Int @id @default(autoincrement())
  a      Int
  b      Int
  result Int
}
```

**Key Testing Concepts:**
- Mocking external dependencies (database)
- Testing database interactions without real database
- Verifying mock function calls
- Isolating units under test

**Run Tests:**
```bash
cd 5-express-vitest-prisma
npm test
```

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- For project 5: PostgreSQL database

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd automated-testing
   ```

2. **Install dependencies for each project:**
   ```bash
   # For each project directory
   cd 1-simple-test
   npm install
   
   cd ../2-simple-express-app
   npm install
   
   cd ../3-express-with-zod
   npm install
   
   cd ../4-express-with-vitest
   npm install
   
   cd ../5-express-vitest-prisma
   npm install
   ```

3. **For project 5 (Prisma setup):**
   ```bash
   cd 5-express-vitest-prisma
   # Set up your DATABASE_URL in .env file
   npx prisma generate
   npx prisma db push
   ```

### Running Tests

Each project can be tested independently:

```bash
# Navigate to any project
cd <project-directory>

# Run tests
npm test
```

## Testing Concepts Covered

1. **Unit Testing** - Testing individual functions in isolation
2. **Integration Testing** - Testing API endpoints with HTTP requests
3. **Input Validation Testing** - Testing schema validation and error handling
4. **Mocking** - Mocking external dependencies like databases
5. **Test Framework Migration** - Moving from Jest to Vitest
6. **Database Testing** - Testing applications with database integration

## Key Dependencies

- **Jest** - JavaScript testing framework
- **Vitest** - Fast, modern testing framework
- **Supertest** - HTTP assertion library
- **Express** - Web framework for Node.js
- **Zod** - TypeScript-first schema validation
- **Prisma** - Database ORM
- **Supertest** - HTTP testing library

## Learning Path

This repository is designed as a progressive learning path:

1. Start with **1-simple-test** to understand basic testing concepts
2. Move to **2-simple-express-app** to learn API testing
3. Progress to **3-express-with-zod** for validation testing
4. Try **4-express-with-vitest** to experience modern testing tools
5. Finish with **5-express-vitest-prisma** for advanced mocking and database testing

Each project builds upon the previous one, introducing new concepts while reinforcing existing knowledge.
