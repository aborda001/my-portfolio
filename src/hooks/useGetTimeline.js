const useGetTimeline = () => {
  const data = [
    [
      {
        title: 'Fullstack Developer',
        subTitle: 'Sisteas Guaraní',
        date: 'Sept 2021 - Present: 10 months',
        description:
          'Responsible for the development and maintenance of systems as well as implementation of new systems. I work developing APIs with NodeJS and ExpressJS, and with frontend technologies such as HTML, CSS, JavaScript. Use of relational databases (PostgreSQL). I also work with UNITY and C# for develop aumented reality applications.',
      },
      {
        title: 'Frontend Web Developer',
        subTitle: 'Software Natura',
        date: 'Dec 2021 - Jun 2022: 7 months',
        description:
          'I worked as a Frontend Web Developer at Software Natura, contributing to educational web pages design and development using HTML, CSS. I created a Telegram bot to help my team and the other teams to extract and verify the id_tags nomenclature, this bot increased productivity and workflow. Worked with agile methodologies (Kanban). Using GIT and Bitbucket to manage the project, and AWS S3 to store the files and media.',
      },
    ],
    [
      {
        title: 'Informatic Engineer',
        subTitle: 'Catholic University',
        date: 'March 2020 - Present',
        description: '',
      },
      {
        title: 'Informatic technician',
        subTitle: 'SIL National School',
        date: 'Feb 2017 - Dec 2019',
        description: '',
      },
    ],
  ];
  return data;
};

export default useGetTimeline;
