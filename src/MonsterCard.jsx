export const MonsterCard = ({ id, name, email }) => (
    <div key={id} className="flex flex-col items-center bg-teal-300 p-5 h-auto transition-transform transform hover:scale-105">
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} className="w-72 h-72" alt={`Monster: ${name}`} />
      <h1 className="p-2 my-3">{name}</h1>
      <p className="p-2">{email}</p>
    </div>
  );