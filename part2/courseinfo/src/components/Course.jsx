const Header = (props) => <h2>{props.course}</h2>

const Content = (props) => (
  <div>
    {props.parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => {
  const total = props.parts.reduce((s, p) => {
    console.log(s, p)
    return s + p.exercises
  }, 0)
    return (
    <p style={{ fontWeight: 'bold' }}>
      total of {total} exercises
    </p>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

export default Course