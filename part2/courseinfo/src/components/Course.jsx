const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => {
        return (
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        );
      })}
      <h3>
        Total of{" "}
        {course.parts.reduce((sum, part) => (sum += part.exercises), 0)}{" "}
        exercises
      </h3>
    </div>
  );
};

export default Course;
