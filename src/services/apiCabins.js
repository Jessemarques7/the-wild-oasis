import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log("Cabins could not be loaded");
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log("Cabin could not be deleted");
    throw new Error("Cabin could not be deleted");
  }
}

export async function CreateCabin(newCabin) {
  const { name } = newCabin;

  const { data, error } = await supabase
    .from("cabins")
    .insert([
      {
        ...newCabin,
        image: `https://oiiexdfbxpyckfghbmbb.supabase.co/storage/v1/object/public/cabin-images/cabin-${name}.jpg`,
      },
    ])
    .select();

  if (error) {
    console.log("Cabin could not be created");
    throw new Error("Cabin could not be created");
  }

  return data;
}
