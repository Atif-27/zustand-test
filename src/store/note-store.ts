import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface NoteType {
  title: string;
  description: string;
  timeStamp: number;
}

interface NoteState {
  note: Record<string, NoteType[]>;
}
interface Action {
  addNote: (id: string, note: NoteType) => void;
}

export const useNoteStore = create<NoteState & Action>()(
  immer((set) => ({
    note: {
      "123": [
        {
          title: "Revise Thermo",
          description: "This is a description",
          timeStamp: 20,
        },
      ],
    },
    addNote: (id, note) =>
      set((state) => {
        if (state.note[id]?.length > 0) state.note[id].push(note);
        else state.note[id] = [note];
      }),
  }))
);
