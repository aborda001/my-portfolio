const useGetProjects = () => {
  const data = [
    {
      title: 'Py Shop',
      image:
        'https://raw.githubusercontent.com/aborda001/pyShop/master/captura.png',
      description:
        'A simple web app for controlling a shop. It used flask, bootstrap and SQLITE. Can be used for any kind of shop.',
      code: 'https://github.com/aborda001/pyShop',
      link: '',
    },
    {
      title: 'Py Task',
      image:
        'https://raw.githubusercontent.com/aborda001/pyTask/main/static/img/pyTask2.png',
      description:
        'Web app for managing tasks. It uses flask, bootstrap and SQLITE.',
      code: 'https://github.com/aborda001/pyTask',
      link: '',
    },
    {
      title: 'Teachers App',
      image:
        'https://raw.githubusercontent.com/aborda001/web_app/master/public/images/captura.png',
      description:
        'Web app for managing teachers and subjects. It uses PHP, Apache, MySQL. You can export the data to a PDF file.',
      code: 'https://github.com/aborda001/web_app',
      link: '',
    },
    {
      title: 'Ahorcado Game',
      image:
        'https://raw.githubusercontent.com/aborda001/ahorcadopy/master/capturaImg.png',
      description:
        'A fun shell game of guessing letters. It uses Python. With 3 levels of difficulty, hangman figure and colors.',
      code: 'https://github.com/aborda001/ahorcadopy',
      link: '',
    },
  ];
  return data;
};
export default useGetProjects;
