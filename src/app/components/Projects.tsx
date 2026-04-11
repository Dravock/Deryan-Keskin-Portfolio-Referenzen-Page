import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Eine vollständige E-Commerce-Lösung mit React, Node.js und Stripe-Integration. Features umfassen Produktverwaltung, Warenkorbfunktion und sichere Zahlungsabwicklung.',
    image: 'https://images.unsplash.com/photo-1579882392185-581038fbc8c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc3NTc0NzIyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    title: 'Task Management App',
    description: 'Eine moderne Projektmanagement-Anwendung mit Echtzeit-Kollaboration, Drag-and-Drop Interface und detaillierten Analysen.',
    image: 'https://images.unsplash.com/photo-1579882392185-581038fbc8c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc3NTc0NzIyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['TypeScript', 'Next.js', 'Supabase', 'Tailwind']
  },
  {
    title: 'Fitness Tracking Dashboard',
    description: 'Ein umfassendes Dashboard zur Verfolgung von Trainingsfortschritten mit Datenvisualisierung und personalisierten Trainingsplänen.',
    image: 'https://images.unsplash.com/photo-1579882392185-581038fbc8c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc3NTc0NzIyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Recharts', 'PostgreSQL', 'Express']
  }
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-24 bg-secondary">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[40px]">Ausgewählte Projekte</h2>
          <p className="text-[18px] text-muted-foreground max-w-2xl mx-auto">
            Einblicke in einige meiner Lieblingsprojekte, die meine Fähigkeiten und meinen Ansatz zur Softwareentwicklung zeigen
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-2 aspect-video md:aspect-auto">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6 md:py-8">
                  <h3 className="mb-3 text-[24px]">{project.title}</h3>
                  <p className="text-[16px] text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-[14px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button className="inline-flex items-center gap-2 text-primary hover:underline">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                    <button className="inline-flex items-center gap-2 text-primary hover:underline">
                      <Github className="w-4 h-4" />
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
