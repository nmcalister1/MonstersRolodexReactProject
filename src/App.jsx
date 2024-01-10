import { useEffect, useState } from "react";
import { MonsterCard } from "./MonsterCard";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((users) => {
        setMonsters(users);
        setIsLoading(false);
      });
  }, []);

  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-r from-teal-700 via-sky-700 to-blue-950 min-h-screen">
      <h1 className="flex place-content-center text-5xl pt-8 text-teal-300 decoration-black">Monsters Rolodex</h1>
      <div className="flex items-center justify-center">
        <input
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
          type="text"
          placeholder="monster name"
          autoComplete="off"
          name="monsterName"
          className="border-4 p-2 my-20 transition-all duration-300 focus:outline-none focus:border-rose-500 hover:border-rose-400 cursor-pointer"
        />
      </div>
      <div className="flex justify-center mt-20">
        <div className="grid grid-cols-4 gap-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            filteredMonsters.map((monster) => <MonsterCard key={monster.id} {...monster} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default App;