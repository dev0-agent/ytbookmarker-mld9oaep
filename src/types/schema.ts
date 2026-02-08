import { z } from 'zod';

export const VideoSchema = z.object({
  id: z.string().uuid(),
  youtubeId: z.string().min(1),
  title: z.string().min(1),
  url: z.string().url(),
  createdAt: z.string().datetime(), // ISO string
  tags: z.array(z.string()),
});

export type Video = z.infer<typeof VideoSchema>;

export const NoteSchema = z.object({
  id: z.string().uuid(),
  videoId: z.string().uuid(),
  content: z.string().min(1),
  timestamp: z.number().min(0), // Playback time in seconds
});

export type Note = z.infer<typeof NoteSchema>;
