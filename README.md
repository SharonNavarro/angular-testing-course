
# Angular Testing Course

This project demonstrates a comprehensive approach to testing Angular applications while improving code quality and maintaining consistent commit standards.

## Overview

The **Angular Testing Course** repository showcases best practices for:
- Unit testing services and components.
- Integrating Jest as the primary testing framework.
- Ensuring code quality through linting and formatting tools.
- Enforcing commit message standards using Git hooks.

---

## Test report

Run `npm run test:coverage`
- Console
  
![image](https://github.com/user-attachments/assets/0f752a43-9de6-4f28-a5f2-710ccd97bdd4)

- HTML report

![image](https://github.com/user-attachments/assets/271cd5d4-ae07-4876-ba3b-4adf487b09c0)
![image](https://github.com/user-attachments/assets/4e7acdb3-9b0e-4096-8b0a-1e087c8b3451)
![image](https://github.com/user-attachments/assets/e2be715d-bed8-458a-bcd6-9df63d9b59b7)

---

## Features

### 1. **Testing Framework: Jest**
- Replaces the default Angular testing setup with [Jest](https://jestjs.io/), a faster and more flexible JavaScript testing framework.
- Supports features like snapshot testing, powerful mocking, and easy integration with TypeScript.

### 2. **Linting and Formatting**
- Utilizes [ESLint](https://eslint.org/) for linting.
- Integrates [Prettier](https://prettier.io/) to ensure consistent code formatting.
- Adds custom ESLint plugins:
  - **`eslint-plugin-simple-import-sort`**: Automatically sorts imports.
  - **`eslint-plugin-unused-imports`**: Identifies and removes unused imports.

### 3. **Commit Standards**
- Enforces commit message conventions using [Commitlint](https://commitlint.js.org/).
- Configured with the **Conventional Commits** standard via `@commitlint/config-conventional`.
- Git hooks are managed with [Husky](https://typicode.github.io/husky/), ensuring linting, formatting, and commit validation before each push.

---

## Setup

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
ng serve
```

---

## Scripts

### Testing
- **Run Unit Tests**:
  ```bash
  npm test
  ```
- **Run Tests in Watch Mode**:
  ```bash
  npm run test:watch
  ```
- **Run Tests in CI Mode**:
  ```bash
  npm run test:ci
  ```

### Code Quality
- **Lint Code**:
  ```bash
  npm run lint
  ```
- **Format Code**:
  ```bash
  npm run format
  ```

### Husky and Commitlint
- **Enable Husky**:
  ```bash
  npm run enabled-husky
  ```
- **Prepare Commit Hooks**:
  ```bash
  npm run prepare
  ```

---

## Testing Libraries

### 1. **Jest**:
- Fast and efficient testing framework with an Angular preset for seamless integration.
  - **Packages Installed**:
    - `jest`
    - `jest-preset-angular`
    - `@types/jest`

### 2. **Angular Testing Tools**:
- Supports unit tests with Angular's testing modules and Karma for legacy compatibility.
  - **Packages Installed**:
    - `@angular-devkit/build-angular`
    - `@angular/cli`
    - 
---

## Quality and Standards Tools

### 1. **Linting and Formatting**
- **ESLint**:
  - Core linter for detecting issues in TypeScript and JavaScript files.
  - Custom plugins:
    - `eslint-config-prettier`: Prevents Prettier and ESLint from conflicting.
    - `eslint-plugin-prettier`: Integrates Prettier rules into ESLint.
    - `eslint-plugin-simple-import-sort`: Automatically organizes imports.
    - `eslint-plugin-unused-imports`: Removes unused imports.
- **Prettier**:
  - Enforces a consistent code style across the project.

### 2. **Commit Standards**
- **Husky**:
  - Configures Git hooks to run linting, formatting, and commit validation tasks.
- **Commitlint**:
  - Enforces [Conventional Commits](https://www.conventionalcommits.org/) to maintain clean and readable commit history.
  - Configuration:
    - `@commitlint/cli`
    - `@commitlint/config-conventional`
- **Lint-staged**:
  - Runs linting and formatting checks only on staged files before commits.

---

## Resources

- [Angular Testing Guide](https://angular.io/guide/testing)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [ESLint Documentation](https://eslint.org/docs/latest/user-guide/getting-started)
- [Prettier Documentation](https://prettier.io/docs/en/)
- [Commitlint Documentation](https://commitlint.js.org/)
- [Husky Documentation](https://typicode.github.io/husky/)

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
