const Course = ({ course }) => {
  console.log(course);
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
    </div>
  );
};

export default Course;
