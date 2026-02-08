# YTBookmarker

> Your private, offline-first YouTube library.

YTBookmarker is a client-side application that allows you to curate, organize, and annotate YouTube videos without needing a Google account or an internet connection for your metadata. It stores everything in your browser's LocalStorage.

## Tech Stack

*   **Framework:** React + Vite
*   **Styling:** Tailwind CSS
*   **Components:** shadcn/ui
*   **State/Persistence:** Zustand + LocalStorage
*   **Validation:** Zod
*   **Icons:** Lucide React

## Features

*   **Privacy First:** No database, no tracking. Your data lives in your browser.
*   **Video Organization:** Add videos by URL and organize them with custom tags.
*   **Notes & Comments:** Write personal notes for each video to remember key takeaways.
*   **Search:** Quickly find videos by title or tag.
*   **Embedded Player:** Watch videos directly within the app interface.

## Getting Started

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd ytbookmarker
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Navigate to `http://localhost:5173` to start using the app.

## Project Structure

*   `src/components`: UI components (shadcn/ui and custom)
*   `src/store`: Zustand store for state management and persistence
*   `src/lib`: Utility functions and Zod schemas
*   `src/pages`: Main application views

## Documentation

*   [Task List](./TASKLIST.md) - Progress tracking
*   [Learnings](./LEARNINGS.md) - Technical insights and decisions
*   [.dev0/RULES.md](.dev0/RULES.md) - AI coding guidelines