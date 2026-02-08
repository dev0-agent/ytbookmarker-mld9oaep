# Task List

This file shows the current progress of all tasks in this project.
It is automatically updated by dev0 as tasks are completed.

---

## Phase 1

- [x] ✅ **Implement Data Store and Schemas**
  Create the core data structure for the application. Define Zod schemas for `Video` (id, youtubeId, title, url, createdAt, tags) and `Note` (id, videoId, content, timestamp). Implement a Zustand store (or React Context) that persists this state to `localStorage`. Include utility functions to add, update, and remove items.

- [ ] ⏳ **Create App Layout and Navigation**
  Scaffold the main application shell using a Sidebar/Header layout. Include navigation links for 'Library' and 'Settings'. Ensure the layout is responsive. Use shadcn/ui components (Sidebar, Button, Separator).

## Phase 2

- [ ] ⏳ **Implement 'Add Video' Functionality**
  Create a Dialog/Modal component that accepts a YouTube URL. Implement a utility to extract the YouTube Video ID from various URL formats (shortened, standard, embedded). Allow the user to manually input a Title (since we are avoiding external API keys for metadata fetching to keep it serverless). Validate input using Zod and save to the store.

- [ ] ⏳ **Build Video Grid Display**
  Create a responsive grid view to display saved videos. Each card should show the video thumbnail (fetched via `https://img.youtube.com/vi/<id>/mqdefault.jpg`), the title, and a 'Watch' button. Handle the empty state when no videos exist.

- [ ] ⏳ **Implement Video Player View**
  Create a detailed view for a single video. Integrate the `react-youtube` package or a raw iframe to play the video. Display the video title and metadata below the player. Ensure the player is responsive.

## Phase 3

- [ ] ⏳ **Add Notes and Comments System**
  In the Video Player View, add a section for Notes. Allow users to create, edit, and delete text notes associated with the specific video. Persist these changes to the store.

- [ ] ⏳ **Implement Tagging System**
  Allow users to add tags to videos during creation or editing. Update the Video Card and Detail view to display these tags (using shadcn/ui Badge). Update the store to handle tag management.

## Phase 4

- [ ] ⏳ **Search and Filter Logic**
  Implement a search bar in the header and a tag filter in the library view. Filter the video list based on title matches or selected tags. This should be a client-side filter against the store data.

- [ ] ⏳ **UI Polish and Empty States**
  Refine the UI. Add confirmation dialogs for deleting videos. Improve the 'Add Video' modal with better error handling for invalid URLs. Add subtle animations for list items appearing.

---

_Last updated by dev0 automation_
