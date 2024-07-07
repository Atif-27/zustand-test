"use client";
import { useNoteStore } from "@/store/note-store";
import React from "react";

export default function Page() {
  const note = useNoteStore((store) => store.note);
  const addNote = useNoteStore((store) => store.addNote);
  console.log(note);

  function handleAddNote() {
    addNote("222", {
      title: "Cant understand",
      description: "good",
      timeStamp: 2,
    });
  }
  return (
    <div>
      {JSON.stringify(note)}
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
}
