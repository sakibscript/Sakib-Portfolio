import { Icon } from "./icons";

const education = [
  {
    id: 1,
    title: "B.Sc. in Computer Science & Engineering",
    institute: "American International University-Bangladesh (AIUB)",
    location: "Dhaka, Bangladesh",
    duration: "2021 – 2025",
    grade: "CGPA: 3.7/4.0",
    description: "Coursework and project work across software engineering, algorithms, database systems, artificial intelligence, and modern application development.",
  },
  {
    id: 2,
    title: "Higher Secondary Certificate (Science)",
    institute: "Chittagong Cantonment High School",
    location: "Chattogram, Bangladesh",
    duration: "2018 – 2020",
    grade: "GPA: 5.0/5.0",
    description: "Science studies with a focus on mathematics and analytical problem-solving.",
  },
  {
    id: 3,
    title: "Secondary School Certificate",
    institute: "Ispahani Ideal High School",
    location: "Chattogram, Bangladesh",
    duration: "2007 – 2018",
    grade: "GPA: 5.0/5.0",
    description: "Completed secondary education and built a foundation across core academic subjects.",
  },
];

export function Education() {
  return (
    <div className="education-list">
      {education.map((item, index) => (
        <article className="education-item" key={item.id}>
          <div className="education-index">0{index + 1}</div>
          <div className="education-copy">
            <div className="education-topline"><h3 className="row-title">{item.title}</h3><span className="row-date">{item.duration}</span></div>
            <p className="row-subtitle">{item.institute}</p>
            <div className="row-meta"><span><Icon name="MapPin" size={14} /> {item.location}</span><span>{item.grade}</span></div>
            <p className="row-description">{item.description}</p>
          </div>
        </article>
      ))}
      <div className="education-continuous">
        <h3 className="row-title">Learning beyond the curriculum</h3>
        <p className="row-description">I continue to strengthen my skills by building practical applications, exploring backend architecture, and working with modern web development tools.</p>
      </div>
    </div>
  );
}
