## Whale project UI automation

Base frameworks:


## Setup

0. Install [NodeJS](https://nodejs.org/en/) - LTS version is preferable
1. Install `ts-node` globally
1. Clone the repository
1. Locate to the project folder and install dependencies.

    ```
    yarn or npm install
    ```

### Structure of the project

```
├───output
├───lib
    ├───helpers
    ├───data
    ├───common
├───specs
    ├───component
    │   ├───pages
    │   ├───steps
    |   ├───..._test.js
    ├───...
├───types
    ├───model.d.ts
    ├───steps.d.ts
├───steps_file.js
```

-   lib/helpers - directory with additional helpers that extends base API.
-   lib/common - directory with Page Fragments, Page Objects, Factories etc.
-   specs - tests, located in the folders. Each folder inside includes page objects, steps and tests.
-   page-definitions.js/fragment-definitions.js - includes page objects def which should be added to config.

## Nuances for working with helpers

-   Name of the method should be "talkable"
-   Each method should include a description (comment) about what it does and information about input and output
-   BDD concept.

If method is common it should be located in the helpers.

## Nuances for working with PageObjects

-   Name of the file with PageObjects should be talkable, so it is clear what's inside. Pattern of the file name [componentName]-[componentComplexity].js/ts
-   All the selectors/locators are stored in the PageObjects. Locator should have comment where it is situated on the page, and what it is.
-   Locator priority: Id, CSS, XPath.
-   Repeatable steps in the tests write in the PageObjects as a method.
-   Common things are stored in the steps_file.js

## Nuances for writing tests

-   Name of the test should be talkable, so one can define what test about. Follow next pattern [project name]-[Acceptance or E2E]-[test suite number]-[rc/dev]-[name]\_test.js

-   Name Feature should include name of the file without \_tests.js. After the name - write a description.

-   Name Scenario - use case or story with acceptance criteria in the name. Follow the rule - When->Then. Add int_test_# where # is the seq number.

        	Example: `@int_test_# Unauthorised user goes to the welcome page of the BIF. The user should be redirected to login page and see the login form to authorize`

-   Steps of the test should be described from the end-user perspective and should be talkable.
-   All the selectors should be located inside the pageObjects
-   All the timeouts should be located inside the pageObjects
-   All tests you implement should be easy to customize.
-   WaitUntil should be used most of the time
-   Do not refresh the page inside the tests twice
-   Using brackets or slashes is forbidden to use for the name of the Scenarios.

## Nuances for running tests

For successful login you have to provide three valid variables:

- GOOGLE_EMAIL - your google account
- GOOGLE_PWD - your google account password
- USERDATA - path to your default user data folder

**Be aware, your chrome instance should be closed before running tests.**

Paste your data within this string and run it in terminal

```USERDATA= GOOGLE_EMAIL= GOOGLE_PWD= npm test```
