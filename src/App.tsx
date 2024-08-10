import supabase from "./utils/supabase";
import { useQuery } from "@tanstack/react-query";

// Ausprobieren
// Rendering-Proczess von Objekten in React (wann werden Änderungen erkannt?)

function App() {
  const { data } = useQuery({
    queryKey: ["things"],
    queryFn: async () => {
      const { data } = await supabase.from("thing").select();
      return data;
    },
    staleTime: 3_000,
  });

  return (
    <div>
      {data && data.map((thing) => <li key={thing.id}>{thing.title}</li>)}
    </div>
  );
}

export default App;
