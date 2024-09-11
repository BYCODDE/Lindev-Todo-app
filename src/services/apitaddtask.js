import { supabase } from "../client";
// import { useUser } from "@clerk/clerk-react";
export async function createPost(description, userId) {
  // return(

  // const { user } = useUser();

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
  // )
  console.log(description, userId);
}
