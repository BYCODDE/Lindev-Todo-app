import { supabase } from "../supabase";

export async function fetchData() {
  const { data, error } = await supabase.from("todos").select();

  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
}
