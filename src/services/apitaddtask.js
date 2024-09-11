import { supabase } from "../client";

export async function createPost(description) {
  await supabase
    .from("todos")
    .insert([
      {
        description,

        // user_id: supabase.auth.user().id,
      },
    ])
    .single();

  // fetchData();
}
