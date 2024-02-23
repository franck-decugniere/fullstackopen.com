export const Course = ({ course }) => {
    return (
        <>
            <Header title={course.name} />
            {course.parts.map((item) => <Part key={item.id} name={item.name} exercises={item.exercises} />)}
            <Total items={course.parts} />
        </>
    )
}

const Header = ({ title }) => {
    return (<h1>{title}</h1>)
}

const Part = ({ name, exercises }) => {
    return (
        <p>{name} {exercises}</p>
    )
}

const Total = ({ items }) => {
    return (
        <p>Number of exercises {items.map(item => item.exercises).reduce((acc, nb) => acc + nb)}</p>
    )
}