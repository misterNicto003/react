import React from "react";
function button() {
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    age: 100,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>Полное имя: {person.firstName} {person.lastName}</h1>
      <h2>Возраст: {person.age}</h2>

      <label>
        Имя:
        <input
          type="text"
          name="firstName"
          value={person.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Фамилия:
        <input
          type="text"
          name="lastName"
          value={person.lastName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button onClick={() => setPerson({ ...person, age: person.age + 1 })}>
        Увеличить возраст
      </button>
    </>
  );
}







  const [person, setPerson] = useState({
    Firstname: "John",
    lastName,
    age: 100,
  });

  const handleIncreaseAge = (e) => {
    const { name, value } = e.targer;
    setPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };

  console.log([name]);
  

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Увеличить возраст</button>
    </>
  );
}
export default button;
