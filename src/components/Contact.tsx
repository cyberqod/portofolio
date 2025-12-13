import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [state, handleSubmit] = useForm("meoajppg"); // remplace par ton ID Formspree

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Contact
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info de contact */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Restons en contact</h3>
                <p className="text-gray-300 leading-relaxed">
                  Vous avez un projet en tête ? Une question technique ? 
                  N'hésitez pas à me contacter, je serais ravi d'échanger avec vous.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-400">kemelaeleonardo@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Téléphone</p>
                    <p className="text-gray-400">+228 91 65 99 82</p>
                    <p className="text-gray-400">+228 96 03 82 84</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Localisation</p>
                    <p className="text-gray-400">Lomé, Togo</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-700">
                <h4 className="text-white font-semibold mb-4">Réseaux sociaux</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Linkedin className="w-6 h-6 text-gray-400 hover:text-white" />
                  </a>
                  <a href="https://github.com/cyberqod" className="w-12 h-12 bg-slate-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Github className="w-6 h-6 text-gray-400 hover:text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
              {state.succeeded ? (
                <p className="text-green-400 text-xl font-semibold text-center">Merci pour votre message ! Contacter moi sur WhatsApp</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-semibold mb-2">Nom complet</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 bg-slate-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                        placeholder="Votre nom"
                        required
                      />
                      <ValidationError prefix="Nom" field="name" errors={state.errors} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 bg-slate-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                        placeholder="votre@email.com"
                        required
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white font-semibold mb-2">Sujet</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                      placeholder="Objet du message"
                      required
                    />
                    <ValidationError prefix="Sujet" field="subject" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none resize-none"
                      placeholder="Décrivez votre projet ou demande..."
                      required
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
