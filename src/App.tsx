import Card from './components/Card';

const projects = [
  {
    title: 'Project One',
    description: 'This is the first project.',
    link: '#',
    thumbnail: "D:\Code\my-portfolio\src\assets\react.svg"
  },
  
];

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            thumbnail={project.thumbnail}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
