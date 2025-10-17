import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import projects from './projects.json'

function Projects() {
  return (
    <div className='w-full flex flex-col items-center section-padding min-h-screen'>
      {/* Titre principal avec animation */}
      <h2 className="md:mt-32 mt-20 relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold text-center tracking-tight slide-up title-with-particles">
        <span className="text-gradient-primary">Mes Projets</span>
        <div className="mt-4 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
      </h2>
      
      {/* Sous-titre */}
      <div className='mt-8 text-xl md:text-2xl text-gray-400 mb-16 text-center max-w-3xl fade-in' style={{animationDelay: '0.2s'}}>
        Découvrez une sélection de mes projets les plus remarquables, alliant créativité et expertise technique
      </div>

      {/* Grid des projets */}
      <div className="w-full max-w-7xl space-y-12">
        {projects.map(({ title, description, technologies, imageLink, sourceCodeLink, webSiteLink }, index) => (
          <div 
            key={index} 
            className={`stagger-item ${index % 2 === 0 ? 'fade-in' : 'slide-up'}`}
            style={{animationDelay: `${0.2 * (index + 1)}s`}}
          >
            <div className={`card-modern hover-lift overflow-hidden ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              <div className="flex flex-col lg:flex-row w-full">
                {/* Image du projet */}
                <div className="lg:w-1/2 w-full relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={imageLink} 
                    alt={title} 
                    className='w-full h-64 lg:h-80 object-cover transition-all duration-500 group-hover:scale-110' 
                  />
                  {/* Overlay avec icône */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-2xl">👁️</span>
                    </div>
                  </div>
                </div>

                {/* Contenu du projet */}
                <div className="lg:w-1/2 w-full p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-xl">🚀</span>
                      </div>
                      <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-primary'>
                        {title}
                      </h3>
                    </div>
                    
                    <p className='text-gray-300 text-lg leading-relaxed mb-6'>{description}</p>
                    
                    {/* Technologies */}
                    <div className='mb-8'>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Technologies utilisées</h4>
                      <div className='flex flex-wrap gap-3'>
                        {technologies.map((technology, techIndex) => (
                          <span 
                            key={technology} 
                            className='px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-600 hover:border-blue-400/50 transition-all duration-300 hover-lift'
                            style={{animationDelay: `${0.05 * techIndex}s`}}
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Boutons d'action */}
                  <div className='flex flex-col sm:flex-row gap-4'>
                    <a
                      href={sourceCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div className='btn-modern flex items-center justify-center gap-3 min-w-[150px] bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600'>
                        <span>💻</span>
                        Code Source
                      </div>
                    </a>
                    
                    <a
                      href={webSiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div className='btn-modern flex items-center justify-center gap-3 min-w-[150px] bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500'>
                        <span>🌐</span>
                        Voir le Site
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section Call to Action */}
      <div className="mt-20 text-center slide-up" style={{animationDelay: '1s'}}>
        <div className="card-modern p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gradient-accent mb-4">
            Plus de projets à venir ! 🚀
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            Je travaille constamment sur de nouveaux projets passionnants. Restez connecté pour découvrir mes dernières créations !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/Karim-Zaf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-modern inline-block hover-lift"
            >
              Voir sur GitHub 🐙
            </a>
            <a
              href="/contact"
              className="btn-modern inline-block hover-lift bg-gradient-to-r from-purple-500 to-pink-500"
            >
              Collaborer avec moi 🤝
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
