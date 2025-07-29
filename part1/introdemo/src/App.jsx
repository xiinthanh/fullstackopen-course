const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you're {age} years old
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  );
}

const App = () => {
  const name = 'Peter';
  const age = 10;
  return (
    <>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
      <Hello name="Maya" age={10+16} />
    </>
  )
}

export default App;