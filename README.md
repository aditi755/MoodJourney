# MoodJourney

**MoodJourney** is a web application that helps users create daily mood records and visualize how they feel every day throughout the year. It features a beautiful and clean UI, allowing users to track their moods seamlessly.

## Features

- **Mood Tracking**: Record your mood daily and see a visual representation of your feelings throughout the year.
- **Authentication**: Secure login and signup functionality using Firebase Authentication.
- **Data Storage**: Store mood data in real-time using Firebase as the backend database.
- **Responsive Design**: Beautiful and clean UI built with Tailwind CSS for a great user experience on all devices.

## Tech Stack

- **Next.js**: React framework for server-side rendering and static site generation.
- **Firebase**: Used for the database to store user mood data.
- **Firebase Auth**: Provides authentication for secure user access.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Context API**: Used for global state management.

## Demo

![Screenshot (116)](https://github.com/user-attachments/assets/d82017c2-e076-4418-917b-4e3fc0ff3f36)

![Screenshot (117)](https://github.com/user-attachments/assets/0e9d5a88-5168-4653-92a4-175c6eada05f)

![Screenshot (114)](https://github.com/user-attachments/assets/23f025a3-ebaf-479b-9a73-aa358057c801)


## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/download/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/moodjourney.git
   cd moodjourney
   ```

2. **Go to root directory and install dependencies:**

```bash
npm i
```
3. **Set up Firebase:**

Go to Firebase Console and create a new project.
Set up a Firebase Firestore database.
Enable Firebase Authentication and set up the authentication methods you want to support (e.g., Email/Password, Google).
Copy your Firebase project configuration. It should look something like this:
```bash
{
  "apiKey": "YOUR_API_KEY",
  "authDomain": "YOUR_PROJECT_ID.firebaseapp.com",
  "projectId": "YOUR_PROJECT_ID",
  "storageBucket": "YOUR_PROJECT_ID.appspot.com",
  "messagingSenderId": "YOUR_MESSAGING_SENDER_ID",
  "appId": "YOUR_APP_ID"
}
```

4. **Configure environment variables:**

Create a .env.local file in the root of your project: 
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT_ID.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_PROJECT_ID.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
```

5. ** Run the development server:**
```bash
next dev
```
