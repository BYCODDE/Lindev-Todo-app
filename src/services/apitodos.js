import { supabase } from "../client";

export async function fetchData() {
  const { data, error } = await supabase.from("todos").select("user_id");
  // .order("created_at", { ascending: false });
  if (error) {
    console.log(error);
  } else {
    // setAddTasks(data);
    console.log(data);
  }
}
