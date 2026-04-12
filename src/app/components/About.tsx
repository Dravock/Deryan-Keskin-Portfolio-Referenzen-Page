import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import dkImage from '../assets/img/deryan_keskin_office.png';



export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-24 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={dkImage}
                alt="Profil"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-[40px]">Über mich</h2>
            <div className="space-y-4 text-[18px] text-muted-foreground">
              <p>
                Als passionierter Softwareentwickler mit über 5 Jahren Erfahrung liegt mein Fokus auf der Entwicklung moderner Webanwendungen, die nicht nur funktional, sondern auch intuitiv und ästhetisch ansprechend sind.
              </p>
              <p>
                Meine Reise in der Softwareentwicklung begann mit einer Faszination für Technologie und dem Wunsch, digitale Erlebnisse zu schaffen, die Menschen begeistern. Heute arbeite ich täglich daran, komplexe Probleme in elegante Lösungen zu verwandeln.
              </p>
              <p>
                Wenn ich nicht gerade code, findest du mich beim Erkunden neuer Technologien, beim Lesen von Tech-Blogs oder beim Teilen meines Wissens in der Developer-Community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
