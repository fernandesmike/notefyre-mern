import { axiosClient } from "../api/client";

export const addSingleNote = async (noteObj) => {
  return await axiosClient.post("/", noteObj);
};

export const fetchAllNote = async () => {
  return await axiosClient.get("/");
};

export const fetchNoteById = async (noteId) => {
  return await axiosClient.get({ noteId });
};

export const deleteNote = async (noteId) => {
  return await axiosClient.delete({ noteId });
};

export const updateNote = async (noteId, noteObj) => {
  return await axiosClient.patch({ noteId }, noteObj);
};
