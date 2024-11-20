import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

function Projects() {
  let projects = [
    {
      title: "TodoLista",
      description: "Development of a task management application with a relational PostgreSQL database, allowing users to add, modify, and delete tasks.",
      technologies: ["NextJS","React", "Tailwind", "Typescript","Prisma","RESTFUL API","ShacnUi"],
      ImageLink: "/Projects images/todolista.png",
      sourceCodeLink: "https://github.com/Karim-Zaf/ToDoLista",
      WebSiteLink: "https://github.com/Karim-Zaf/ToDoLista",
    },{
      title: "Ahkili",
      description: "Ahkili is a web application built using Next.js and Tailwind CSS that allows users to ask questions and get answers. This application provides a simple and intuitive interface for interacting with the AI. The responsive design ensures a seamless experience across different devices.",
      technologies: ["NextJS","React", "Tailwind", "Typescript","ShadcnUI"],
      ImageLink: "/Projects images/Ahkili.png",
      sourceCodeLink: "https://github.com/Karim-Zaf/Ahkili?tab=readme-ov-file",
      WebSiteLink: "https://ahkili.vercel.app/",
    },{
      title: "Calculator",
      description: "This is a simple calculator web application that I built with Next.js and Tailwind CSS. It performs basic arithmetic operations such as addition, subtraction, multiplication, and division.",
      technologies: ["NextJS","React", "Tailwind", "Typescript"],
      ImageLink: "/Projects images/Calculator.png",
      sourceCodeLink: "https://github.com/Karim-Zaf/Calculator?tab=readme-ov-file",
      WebSiteLink: "https://calculator-five-wheat-57.vercel.app/",
    },{
      title: "TIC TAC TOE GAME",
      description: "Development of a task management application with a relational PostgreSQL database, allowing users to add, modify, and delete tasks.",
      technologies: ["NextJS","React", "Tailwind", "Typescript"],
      ImageLink: "/Projects images/TicTacToe.png",
      sourceCodeLink: "https://github.com/Karim-Zaf/Tic-Tac-Toe?tab=readme-ov-file",
      WebSiteLink: "https://tic-tac-toe-seven-virid.vercel.app/",
    }
    
  ];

  return (
    <div className='w-full flex flex-col items-center py-8 min-h-screen mt-32'>
      <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 border-b-4 pb-2">
        <span>My Projects</span>
      </h2>
      <div className='mt-8 w-full text-xl text-white h-1 bg-gradient-to-r mb-16 text-center'>
        Here you will find a list of my projects
      </div>
      {projects.map(({ title, description, technologies, ImageLink, sourceCodeLink, WebSiteLink }, index) => (
        <Card key={index} className='md:w-[1000px] w-[90%] mb-8 shadow-lg bg-neutral-800'>
          <CardContent className='p-6 flex flex-col md:flex-row gap-7'>
            <img src={ImageLink} alt={title} className='w-full md:w-96 h-auto mb-4 rounded' />
            <div>
              <h1 className='text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white'>
                {title}
              </h1>
              <p className='text-gray-300 mb-4'>{description}</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {technologies.map((technology) => (
                  <span key={technology} className='bg-gray-700 text-gray-300 px-2 py-1 rounded'>
                    {technology}
                  </span>
                ))}
              </div>
              <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
                <Button className='bg-blue-500 hover:bg-blue-600 text-white'>
                  <a href={sourceCodeLink} className='hover:underline'>
                    Source Code
                  </a>
                </Button>
                <Button className='bg-green-500 hover:bg-green-600 text-white'>
                  <a href={WebSiteLink} className='hover:underline'>
                    Website
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Projects;
