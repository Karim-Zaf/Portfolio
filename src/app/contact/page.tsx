import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

function ContactPage() {
  return (
    <div className='w-full flex flex-col items-center section-padding min-h-screen'>
      {/* Titre principal avec animation */}
      <h2 className="md:mt-32 mt-20 relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold text-center tracking-tight slide-up title-with-particles">
        <span className="text-gradient-primary">Contact</span>
        <div className="mt-4 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
      </h2>
      
      {/* Sous-titre */}
      <div className='mt-8 text-xl md:text-2xl text-gray-400 mb-16 text-center max-w-3xl fade-in' style={{animationDelay: '0.2s'}}>
        N'hésitez pas à me contacter ! Je serais ravi d'échanger avec vous 💬
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Informations de contact */}
        <div className="space-y-8 slide-up" style={{animationDelay: '0.4s'}}>
          <div className="card-modern p-8 hover-lift">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient-accent mb-6">
              Restons en contact !
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Je suis toujours ouvert aux nouvelles opportunités, collaborations et discussions intéressantes. 
              Que vous souhaitiez discuter d'un projet, d'une opportunité de stage, ou simplement échanger sur la tech, 
              je serai ravi de vous répondre !
            </p>

            {/* Moyens de contact */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-gray-400">karim.zaafrani@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">LinkedIn</h4>
                  <p className="text-gray-400">Karim Zaafrani</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🐙</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">GitHub</h4>
                  <p className="text-gray-400">@Karim-Zaf</p>
                </div>
              </div>
            </div>

            {/* Temps de réponse */}
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold text-white">Temps de réponse</h4>
                  <p className="text-gray-300">Généralement sous 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="slide-up" style={{animationDelay: '0.6s'}}>
          <div className='card-modern p-8 hover-lift'>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-xl">✉️</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gradient-primary">
                Envoyez-moi un message
              </h3>
            </div>

            <form action="https://api.web3forms.com/submit" method="POST" className='space-y-6'>
              <input type="hidden" name="access_key" value="0ae40cc4-6c26-41c6-ba33-a186a9a17886"/>
              
              <div className="stagger-item">
                <label htmlFor='name' className='block text-gray-300 mb-3 font-medium'>
                  Nom complet *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-white/20'
                  placeholder='Votre nom et prénom'
                />
              </div>

              <div className="stagger-item">
                <label htmlFor='email' className='block text-gray-300 mb-3 font-medium'>
                  Adresse email *
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  className='w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-white/20'
                  placeholder='votre.email@exemple.com'
                />
              </div>

              <div className="stagger-item">
                <label htmlFor='subject' className='block text-gray-300 mb-3 font-medium'>
                  Sujet
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  className='w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-white/20'
                  placeholder='Sujet de votre message'
                />
              </div>

              <div className="stagger-item">
                <label htmlFor='message' className='block text-gray-300 mb-3 font-medium'>
                  Message *
                </label>
                <textarea
                  id='message'
                  rows={6}
                  name='message'
                  required
                  className='w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-white/20 resize-none'
                  placeholder='Décrivez votre projet, vos questions, ou ce dont vous aimeriez discuter...'
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full btn-modern py-4 text-lg font-bold hover-lift group relative overflow-hidden'
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <span className="group-hover:rotate-12 transition-transform duration-300">📤</span>
                  Envoyer le message
                </span>
              </button>
            </form>

            {/* Note de confidentialité */}
            <div className="mt-6 p-4 rounded-xl bg-gray-800/50 border border-gray-700">
              <p className="text-sm text-gray-400 text-center">
                🔒 Vos informations sont sécurisées et ne seront jamais partagées avec des tiers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section réseaux sociaux */}
      <div className="mt-20 text-center slide-up" style={{animationDelay: '0.8s'}}>
        <div className="card-modern p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gradient-accent mb-4">
            Suivez-moi sur les réseaux
          </h3>
          <p className="text-gray-300 mb-8">
            Restez connecté pour suivre mes derniers projets et actualités !
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/karim-zaafrani-148868209/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center hover-lift group transition-all duration-300"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">💼</span>
            </a>
            <a
              href="https://github.com/Karim-Zaf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center hover-lift group transition-all duration-300"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🐙</span>
            </a>
            <a
              href="https://codeforces.com/profile/Kairm_Zaf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center hover-lift group transition-all duration-300"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🏆</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;