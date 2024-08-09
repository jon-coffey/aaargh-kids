import { useEffect, useState } from "react";
import supabase from "./utils/supabase";

// Ausprobieren
// Rendering-Proczess von Objekten in React (wann werden Änderungen erkannt?)

type Thing = {
  id: string;
  created_at: string;
  title: string;
};

function App() {
  const [things, setThings] = useState<Thing[]>([]);

  useEffect(() => {
    async function getTodos() {
      const { data: things } = await supabase
        .from("thing")
        .select()
        .returns<Thing[]>();

      if (things && things.length > 0) {
        setThings(things);
      }
    }

    getTodos();
  }, []);

  return (
    <div>
      {things.map((thing) => (
        <li key={thing.id}>{thing.title}</li>
      ))}
    </div>
  );
}

export default App;
