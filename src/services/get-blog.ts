"use server";
import { blogMock } from "@data/mock/blog";
import { Blog } from "@data/types/blog";

export const getBlog = async (): Promise<Blog[]> => {
  return blogMock;
};
