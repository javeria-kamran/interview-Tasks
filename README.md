### React/Next.js Approval Record and Countdown Timer

This project implements two key features:

    1.Approval Record Management System
    2.Countdown Timer for Remaining Days

### Features Overview
## Approval Record Management System

    Independent Record States: Each record has its own approval state (isLoading, isApproved).
    Loading Indicators: Displays a custom spinner during approval.
    Concurrent Approvals: Handles multiple approvals simultaneously.

-Key Components:

    ApproveRecords.tsx: Manages state and renders the list of records.
    ApprovalCard.tsx: Displays individual record with approval button (not provided).

-Core Concepts:

    State Management: Uses useState to manage an array of records.
    Event Handling: Handles the approval process via button clicks.
    Asynchronous Simulation: Uses setTimeout to simulate a delay (can be replaced with actual API calls).
    Dynamic Button Text: Changes between "Approve", "Loading...", and "Approved".

## Countdown Timer - Remaining Days

    Date Input: User selects a future date.
    Countdown Calculation: Calculates remaining full days from the current date.
    Error Handling: Shows an error if the date is invalid or has passed.

-Core Function:

    calculateRemainingDays(endTime: string): Returns the number of full days remaining until the specified date.

-Main Components:

    State Management: Stores dateInput and remainingDays.
    UI: Displays a date picker, submit button, and countdown results.
    Error Handling: Displays appropriate messages if the date is invalid or passed.

-Tech Stack

    React.js: For building interactive UIs.
    Next.js: For efficient routing and server-side rendering.
    Tailwind CSS: For clean, responsive design.
## Commands
1.How to Run
-Clone the Repository:(git clone <repository-url>)
2.Install Dependencies:(npm install)
3.Start Development Server:(npm run dev)

Open your browser at http://localhost:3000 to view the application.

Thank you for the opportunity to interview for the internship position. I appreciate the time you took to discuss it theoritically and practically. I'm excited about the possibility of joining your team and contributing to its success.
Regards,
Javeria Kamran