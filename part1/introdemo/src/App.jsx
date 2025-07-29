const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name}, you're {props.age} years old</p>
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