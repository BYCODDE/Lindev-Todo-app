import { supabase } from "../supabase";

export async function createPost(description, userId) {
  await supabase
    .from("todos")
    .insert([
      {
        description,
        complate: false,
        important: false,
        user_id: userId,
      },
    ])
    .single();
}
