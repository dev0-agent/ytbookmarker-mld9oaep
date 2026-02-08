import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Video, Note, VideoSchema, NoteSchema } from '../types/schema';
import { z } from 'zod';

export interface StoreState {
  videos: Video[];
  notes: Note[];
  
  // Video Actions
  addVideo: (video: Video) => void;
  updateVideo: (id: string, video: Partial<Video>) => void;
  deleteVideo: (id: string) => void;
  
  // Note Actions
  addNote: (note: Note) => void;
  updateNote: (id: string, note: Partial<Note>) => void;
  deleteNote: (id: string) => void;
}

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      videos: [],
      notes: [],

      addVideo: (video) =>
        set((state) => {
          // Validate before adding
          const result = VideoSchema.safeParse(video);
          if (!result.success) {
            console.error('Invalid video data:', result.error);
            return {};
          }
          return { videos: [...state.videos, video] };
        }),

      updateVideo: (id, updatedFields) =>
        set((state) => {
            const result = VideoSchema.partial().safeParse(updatedFields);
            if (!result.success) {
                console.error('Invalid video update data:', result.error);
                return {};
            }
            return {
                videos: state.videos.map((video) =>
                    video.id === id ? { ...video, ...updatedFields } : video
                ),
            };
        }),

      deleteVideo: (id) =>
        set((state) => ({
          videos: state.videos.filter((video) => video.id !== id),
          // Also delete associated notes
          notes: state.notes.filter((note) => note.videoId !== id),
        })),

      addNote: (note) =>
        set((state) => {
            const result = NoteSchema.safeParse(note);
            if (!result.success) {
                console.error('Invalid note data:', result.error);
                return {};
            }
            return { notes: [...state.notes, note] };
        }),

      updateNote: (id, updatedFields) =>
        set((state) => {
             const result = NoteSchema.partial().safeParse(updatedFields);
             if (!result.success) {
                 console.error('Invalid note update data:', result.error);
                 return {};
             }
             return {
                notes: state.notes.map((note) =>
                    note.id === id ? { ...note, ...updatedFields } : note
                ),
             };
        }),

      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        })),
    }),
    {
      name: 'ytbookmarker-storage',
      storage: createJSONStorage(() => localStorage),
      // Optional: Add versioning and migration logic if schema changes
      version: 1,
    }
  )
);

export default useStore;