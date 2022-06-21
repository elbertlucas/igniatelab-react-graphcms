import { gql, useQuery } from "@apollo/client";

const GET_LESSON_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface lessons {
  id: string;
  title: string;
}
function App() {
  const { data } = useQuery<{ lessons: lessons[] }>(GET_LESSON_QUERY);
  return (
    <div className="base-container">
      <ul>
        {data?.lessons.map((lesson) => {
          return (
            <li key={lesson.id} className="font-bold text-white">
              {lesson.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
