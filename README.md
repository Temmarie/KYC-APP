
---

# KYC - Loan App

This is a **KYC Loan Application Form** built with **React** and styled using **TailwindCSS**. The app allows users to go through a multi-step process to submit their personal, contact, and financial information for loan application purposes. The form includes input validation, a progress bar, and a summary step for review before submission.

## Live Preview
[Live Preview](https://kyc-app-kappa.vercel.app//)
## Screenshots

<table>
  <tr>
    <td>
      <h3>Personal Information</h3>
      <img src="https://github.com/Temmarie/Your-Repo-Path/blob/main/screenshots/personal-info.png" alt="Personal Information" width="100%"/>
    </td>
    <td>
      <h3>Contact Information</h3>
      <img src="https://github.com/Temmarie/Your-Repo-Path/blob/main/screenshots/contact-info.png" alt="Contact Information" width="100%"/>
    </td>
  </tr>
  <tr>
    <td>
      <h3>Financial Information</h3>
      <img src="https://github.com/Temmarie/Your-Repo-Path/blob/main/screenshots/financial-info.png" alt="Financial Information" width="100%"/>
    </td>
    <td>
      <h3>Summary & Review</h3>
      <img src="https://github.com/Temmarie/Your-Repo-Path/blob/main/screenshots/summary-review.png" alt="Summary Review" width="100%"/>
    </td>
  </tr>
</table>

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)

## Features

- **Multi-step Form**: Users can navigate through multiple steps, collecting personal, contact, financial, and verification information.
- **Progress Indicator**: A visual progress bar shows users how far along they are in the form process.
- **Data Retention**: User inputs are saved across steps, allowing users to go back and edit previous steps without losing data.
- **Summary & Review**: A final step where users can review and edit all of their entered information before submission.
- **Responsive Design**: Fully responsive UI using TailwindCSS, optimized for both desktop and mobile devices.
- **User-Friendly Navigation**: The app has "Next" and "Back" buttons, making it easy to navigate between steps.
- **Form Validation**: Basic validation checks ensure that users fill out all required fields before proceeding.

## Built With

- **React** - A JavaScript library for building user interfaces.
- **TailwindCSS** - A utility-first CSS framework used for styling.
- **Vite** - A modern build tool to optimize development speed and performance.
- **Vercel** - A modern deployment tool

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- **Node.js** (v14 or above)
- **npm** or **yarn** for package management

### Setup 

1. Clone the repository:

   ```
   git clone https://github.com/Temmarie/KYC-Loan-APP.git
   cd KYC-Loan-APP
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Start the local json server: 

    ```
     json-server --watch src/utils/db.json --port 5000
     ```

5. Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

---
