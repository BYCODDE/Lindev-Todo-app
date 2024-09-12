import { supabase } from "../supabase";

export async function fetchData() {
  const { data, error } = await supabase.from("todos").select();
  // .order("created_at", { ascending: false });
  if (error) {
    console.log(error);
  } else {
    // setAddTasks(data);
    console.log(data);
  }
}
