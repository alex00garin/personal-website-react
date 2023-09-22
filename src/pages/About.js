import React, { useEffect } from 'react';
import './about.css'
import { useTheme } from '../components/ThemeContext'; // Assuming you have a ThemeContext for managing the theme

  export default function About() {

    const { isDarkMode } = useTheme();

    useEffect(() => {
        const listItems = document.querySelectorAll('.slide-element');
    
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('slide-in');
            } else {
              entry.target.classList.remove('slide-in');
            }
          });
        }, 
        {
            threshold: 0.5  ,
        });
    
        listItems.forEach(item => {
          observer.observe(item);
        });
    
        // Cleanup when the component unmounts
        return () => {
          listItems.forEach(item => {
            observer.unobserve(item);
          });
        };
    }, []);

  return (
    <>
      <section id="about" className="flex flex-col md:flex-row text-center justify-center items-center gap-12 md:gap-20 h-fit pt-20 px-5 md:px-16 lg:px-32  overflow-hidden bg-white dark:bg-black font-rajdhani">
          <div className="md:w-1/2 block">
              <h1 className="text-black dark:text-white text-2xl md:text-3xl text-start mt-5 md:mt-0 font-bold">
                  Software Developer Journey
              </h1>
              <ol className="block mt-10 md:mt-12 border-l border-neutral-200 dark:border-neutral-700 justify-start text-left ml-5">
                  <li className="mb-5 ml-8 text-left slide-element">            
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-100 rounded-full -left-3 ring-8 ring-black dark:text-white dark:ring-neutral-800 dark:bg-neutral-600">
                          <svg className="w-2.5 h-2.5 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                          </svg>
                      </span>
                      <h3 className="flex items-center mb-1 ml-8 md:text-md font-semibold text-black dark:text-white">HTML</h3>
                      <time className="flex mb-2 ml-7 text-sm font-normal leading-none text-neutral-700 dark:text-neutral-500">January 2023</time>
                      <p className="mb-4  text-base font-normal text-neutral-500 dark:text-neutral-400">Designed all sorts of web pages.</p>
                  </li>
                  <li className="mb-5 ml-8 text-left slide-element">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-100 rounded-full -left-3 ring-8 ring-black dark:text-white dark:ring-neutral-800 dark:bg-neutral-600">
                          <svg className="w-2.5 h-2.5 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                          </svg>
                      </span>
                      <h3 className="flex mb-1 ml-8 text-md font-semibold text-black dark:text-white">CSS (Tailwind)</h3>
                      <time className="flex mb-2 ml-7 text-sm font-normal leading-none text-neutral-700 dark:text-neutral-500">February 2023</time>
                      <p className="text-base font-normal text-neutral-500 dark:text-neutral-400">Styled things up and kept them in line with Figma.</p>
                  </li>
                  <li className="mb-5 ml-8 text-left slide-element">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-100 rounded-full -left-3 ring-8 ring-black dark:text-white dark:ring-neutral-800 dark:bg-neutral-600">
                          <svg className="w-2.5 h-2.5 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                          </svg>
                      </span>
                      <h3 className="flex mb-1 ml-8 text-md font-semibold text-black dark:text-white">JavaScript</h3>
                      <time className="flex mb-2 ml-7 text-sm font-normal leading-none text-neutral-700 dark:text-neutral-500">April 2023</time>
                      <p className="text-base font-normal text-neutral-500 dark:text-neutral-400">Learned how to make websites interactive and lively.</p>
                  </li>
                  <li className="mb-5 ml-8 text-left slide-element">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-100 rounded-full -left-3 ring-8 ring-black dark:text-white dark:ring-neutral-800 dark:bg-neutral-600">
                          <svg className="w-2.5 h-2.5 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                          </svg>
                      </span>
                      <h3 className="flex mb-1 ml-8 text-md font-semibold text-black dark:text-white">React/Next.js</h3>
                      <time className="flex mb-2 ml-7 text-sm font-normal leading-none text-neutral-700 dark:text-neutral-500">June 2023</time>
                      <p className="text-base font-normal text-neutral-500 dark:text-neutral-400">Learned how to work with and crafted UI components.</p>
                  </li>
                  <li className="mb-5 ml-8 text-left slide-element">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-100 rounded-full -left-3 ring-8 ring-black dark:text-white dark:ring-neutral-800 dark:bg-neutral-600">
                          <svg className="w-2.5 h-2.5 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                          </svg>
                      </span>
                      <h3 className="flex mb-1 ml-8 text-md font-semibold text-black dark:text-white">Node.js</h3>
                      <time className="flex mb-2 ml-7 text-sm font-normal leading-none text-neutral-700 dark:text-neutral-500">August 2023</time>
                      <p className="text-base font-normal text-neutral-500 dark:text-neutral-400">I am learning how to built fast and search-friendly sites.</p>
                  </li>
                  <li className=" ml-8 text-left slide-element">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-100 rounded-full -left-3 ring-8 ring-black dark:text-white dark:ring-neutral-800 dark:bg-neutral-600">
                          <svg className="w-2.5 h-2.5 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                          </svg>
                      </span>
                      <h3 className="flex mb-1 ml-8 text-md font-semibold text-black dark:text-white">Python/Java/C#</h3>
                      <time className="flex mb-2 ml-7 text-sm font-normal leading-none text-neutral-700 dark:text-neutral-500">...</time>
                      <p className="text-base font-normal text-neutral-500 dark:text-neutral-400">Aiming to master Python and Java for diverse applications.</p>
                  </li>
              </ol>
          </div>
          <div className="md:w-1/2 flex justify-center ">
          <div>
            {isDarkMode ? (
              // Dark mode card (visible when isDarkMode is true)
              <div className='dark'>
                  <img
                    src="https://api.roadmap.sh/v1-badge/tall/650051ae5ce9f4ca58b90af3?variant=dark&roadmaps=frontend%2Cfull-stack%2Cbackend%2Cjava"
                    alt="..."
                  />
              </div>
            ) : (
              // Light mode card (visible when isDarkMode is false)
              <div className='light'>
                  <img
                    src="https://api.roadmap.sh/v1-badge/tall/650051ae5ce9f4ca58b90af3?variant=light&roadmaps=frontend%2Cfull-stack%2Cbackend%2Cjava"
                    alt="..."
                  />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}