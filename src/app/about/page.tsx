import { Card, CardContent, CardTitle } from '@/components/ui/card'
import React from 'react'
import skills from "./skills.json"
import MyLinks from '../Components/MyLinks'

function About() {
  return (
    <div className='w-full flex flex-col items-center section-padding min-h-screen'>
      {/* Titre principal avec animation */}
      <h2 className="md:mt-32 mt-20 relative flex-col md:flex-row z-10 text-4xl md:text-6xl lg:text-7xl font-bold text-center tracking-tight slide-up title-with-particles">
        <span className="text-gradient-primary">About Me</span>
        <div className="mt-4 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
      </h2>

      {/* Section WHO AM I avec design moderne */}
      <div className="w-full max-w-6xl mt-16 slide-up" style={{animationDelay: '0.2s'}}>
        <div className="card-modern hover-lift p-8 lg:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gradient-accent">Qui suis-je ?</h3>
          </div>
          
          <div className="text-lg md:text-xl leading-relaxed text-gray-300 space-y-6">
            <p className="fade-in" style={{animationDelay: '0.4s'}}>
              Je suis un étudiant passionné en informatique poursuivant actuellement un double diplôme à l'Institut Supérieur d'Informatique d'Ariana de l'Université Tunis El Manar et à l'IUT Villetaneuse de l'Université Sorbonne Paris Nord.
            </p>
            
            <p className="fade-in" style={{animationDelay: '0.6s'}}>
              Avec une forte passion pour la technologie, je me spécialise dans la <span className="text-gradient-primary font-semibold">programmation compétitive</span>, le <span className="text-gradient-accent font-semibold">machine learning</span>, le <span className="text-gradient-primary font-semibold">développement web</span>, les <span className="text-gradient-accent font-semibold">DevOps</span> et le <span className="text-gradient-primary font-semibold">montage vidéo</span>.
            </p>
            
            <p className="fade-in" style={{animationDelay: '0.8s'}}>
              Je recherche constamment des opportunités pour élargir mes connaissances et perfectionner mes compétences, croyant que la persévérance et le travail acharné sont la clé pour atteindre l'excellence. Je suis motivé par la résolution de problèmes et désireux de contribuer à des projets innovants.
            </p>
            
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 fade-in" style={{animationDelay: '1s'}}>
              <p className="text-center font-semibold">
                🎯 <span className="text-gradient-accent">Objectif :</span> Stage de 14 à 16 semaines à partir du 10 mars 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Titre Skills avec animation */}
      <h2 className="mt-20 mb-12 relative z-10 text-4xl md:text-6xl font-bold text-center tracking-tight slide-up title-with-particles">
        <span className="text-gradient-accent">Compétences</span>
        <div className="mt-4 w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full mx-auto"></div>
      </h2>

      {/* Grid des compétences */}
      <div className="w-full max-w-6xl space-y-6">
        {skills.map(({ category, technologies }, index) => (
          <div key={category} className={`card-modern hover-lift stagger-item`} style={{animationDelay: `${0.1 * (index + 1)}s`}}>
            <div className="flex flex-col lg:flex-row">
              {/* Titre de catégorie */}
              <div className="lg:w-64 w-full bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-neutral-600">
                <div className="text-center">
                  <div className="text-3xl mb-2">
                    {category === 'Programming Languages' && '💻'}
                    {category === 'Frameworks' && '🚀'}
                    {category === 'Databases' && '🗄️'}
                    {category === 'Tools' && '🛠️'}
                    {category === 'Cloud & DevOps' && '☁️'}
                    {category === 'Design' && '🎨'}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gradient-primary">
                    {category}
                  </h3>
                </div>
              </div>
              
              {/* Technologies */}
              <div className="flex-1 p-6">
                <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
                  {technologies.map((technology, techIndex) => {
                    let technology_file = technology;
                    if (technology === "C++") technology_file = "cplusplus";
                    
                    return (
                      <div
                        key={technology}
                        className="group relative w-12 h-12 mx-auto hover-lift"
                        style={{animationDelay: `${0.05 * techIndex}s`}}
                      >
                        <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 p-2 border border-gray-600 group-hover:border-blue-400/50 transition-all duration-300">
                          <img
                            src={`technologies icons/${technology_file.toLowerCase()}.svg`}
                            alt={technology}
                            className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                          />
                          
                          {/* Effet de lueur au hover */}
                          <div className="absolute inset-0 rounded-xl bg-blue-400/0 group-hover:bg-blue-400/10 transition-all duration-300"></div>
                        </div>
                        
                        {/* Tooltip moderne */}
                        <div className='absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50'>
                          <div className='relative'>
                            <div className='bg-black/90 backdrop-blur-sm text-white text-sm font-medium py-2 px-3 rounded-lg border border-white/20 shadow-xl whitespace-nowrap'>
                              {technology}
                            </div>
                            <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/90'></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Section Call to Action */}
      <div className="mt-20 text-center slide-up" style={{animationDelay: '1.2s'}}>
        <div className="card-modern p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gradient-primary mb-4">
            Intéressé par mon profil ?
          </h3>
          <p className="text-gray-300 mb-6">
            N'hésitez pas à me contacter pour discuter d'opportunités ou de collaborations !
          </p>
          <a
            href="/contact"
            className="btn-modern inline-block hover-lift"
          >
            Me contacter 📧
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
