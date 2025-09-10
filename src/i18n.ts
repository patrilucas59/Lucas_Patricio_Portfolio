import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        home: {
          navBar: {
            about: "About Me",
            skills: "Skills",
            projects: "Projects",
          },
          hero: {
            title: "Lucas Patrício",
            subtitle: "Front-end Developer",
            downloadCV: "Download CV",
            contactMe: "Contact Me"
          },
          about: {
            title: "About Me",
            description: "My full name is Lucas Patrício da Silva, I'm 23 years old, born in São Paulo and living in São Bernardo do Campo. I started my career studying System Analysis and Development in 2022. I'm currently working as a front-end developer, improving myself and always studying something new!"
          },
          skills: { title: "Skills" },
          projects: {
            title: "Projects",
            viewGithub: "View on GitHub",
            accessProject: "Access Project",
            projectsList: [
              {
                title: "Note Me - To Do List",
                description: "A simple and functional project of to-do list, build with React, JavaScript and styled with TailwindCSS. Ideal for practicing React hooks, local storage and URL manipulation with react-router-dom.",
                github: "https://github.com/patrilucas59/gerenciador-de-tarefas",
                project: "https://note-me-to-do-list-six-liard.vercel.app/",
              }
            ]
          },
          footer: {
            text: "@ {{year}} All Rights Reserved | Lucas Patrício | Front-end Developer"
          }
        }
      },
      pt: {
        home: {
          navBar: {
            about: "Sobre Mim",
            skills: "Habilidades",
            projects: "Projetos",
          },
          hero: {
            title: "Lucas Patrício",
            subtitle: "Desenvolvedor Front-end",
            downloadCV: "Baixar Currículo",
            contactMe: "Contato"
          },
          about: {
            title: "Sobre Mim",
            description: 'Meu nome completo é Lucas Patrício da Silva, tenho 23 anos de idade, nasci em São Paulo e moro em São Bernardo do Campo. Eu iniciei minha carreira estudando Análise e Desenvolvimento de Sistemas em 2022. Atualmente trabalho como um desenvolvedor front-end, sempre me desafiando e aprendendo algo novo!'
          },
          skills: { title: "Habilidades" },
          projects: {
            title: "Projetos",
            viewGithub: "Veja no GitHub",
            accessProject: "Acessar Projeto",
            projectsList: [
              {
                title: "Note Me - To Do List",
                description: "Um projeto simples e funcional de uma lista de tarefas, feito em React, JavaScript e estilizado com TailwindCSS. Ideal para praticar hooks do React, local storage e manipulação de URLs com react-router-dom.",
                github: "https://github.com/patrilucas59/gerenciador-de-tarefas",
                project: "https://note-me-to-do-list-six-liard.vercel.app/",
              }
            ]
          },
          footer: {
            text: "@ {{year}} Todos os direitos reservados | Lucas Patrício | Desenvolvedor Front-end"
          }
        }
      }
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });