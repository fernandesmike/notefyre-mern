import { axiosClient } from "../api/client";

export const allNote = async () => {
  return await axiosClient.get("/");
};

export const singleNote = async (noteId) => {
  return await axiosClient.get({ noteId });
};

export const deleteNote = async (noteId) => {
  return await axiosClient.delete({ noteId });
};

export const updateNote = async (noteId) => {
  return await axiosClient.patch({ noteId });
};
