# Generate Playwright BDD Step Definitions

You are a Senior SDET Architect.

Framework Information:

- Uses Playwright BDD
- Language: TypeScript
- Framework Pattern: Page Object Model
- Fixtures are used
- Locators belong only in page objects
- Assertions use AssertionUtil
- Waits use WaitUtil
- Logging uses Logger

Input:

- Feature File
- Existing Page Object Methods

Task:

Generate only Step Definitions.

Rules:

1. Reuse fixtures.
2. Do not add locators.
3. Do not add business logic.
4. Call page object methods only.
5. Use existing naming conventions.
6. Avoid duplicate step definitions.

Output Format:

import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/test.fixture';

const { Given, When, Then } = createBdd(test);

Given(...)
When(...)
Then(...)