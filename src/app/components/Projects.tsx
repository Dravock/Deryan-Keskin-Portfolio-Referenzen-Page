import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Online-Shops & WordPress-Websites',
    description: 'Konzeption, Entwicklung und Pflege mehrerer Online-Shops sowie professioneller WordPress-Auftritte für verschiedene Kunden. Schwerpunkte: individuelle Themes, WooCommerce-Integration, SEO-Optimierung und Performance-Tuning.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'CSS', 'SEO'],
    liveLink: '',
    sourceLink: ''
  },
  {
    title: 'WebMail-Anwendung',
    description: 'Vollständige WebMail-Applikation mit React-Frontend und Laravel-Backend. Features: E-Mail-Postfach, Ordner­verwaltung, Anhänge, Senden & Empfangen über IMAP/SMTP sowie responsives UI.',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['React', 'Laravel', 'PHP', 'IMAP', 'SMTP', 'MySQL'],
    liveLink: '',
    sourceLink: ''
  },
  {
    title: 'Zeiterfassungssystem',
    description: 'Webbasierte Zeiterfassungslösung zur einfachen Erfassung von Arbeitszeiten, Projekten und Mitarbeiterdaten. Enthält Auswertungen, Exportfunktionen und eine übersichtliche Dashboard-Ansicht.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['PHP', 'JavaScript', 'MySQL', 'Chart.js'],
    liveLink: '',
    sourceLink: ''
  },
  {
    title: 'World of Warcraft Addon',
    description: 'Individuelles WoW-Addon in Lua, das die Spieloberfläche um nützliche Features erweitert – darunter Custom-UI-Elemente, automatisierte Spielmechaniken und statistische Auswertungen für den Charakter.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Lua', 'WoW API', 'Game Development'],
    liveLink: '',
    sourceLink: ''
  },
  {
    title: 'Bewässerungsautomation – WebUI',
    description: 'Web-Frontend mit REST-API-Schnittstelle zur Steuerung und Überwachung eines Schaltschranks für die Gartenbewässerung. Ermöglicht das Konfigurieren von Zeitplänen, Echtzeit-Statusanzeigen und manuelle Steuerung über den Browser.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['JavaScript', 'REST API', 'HTML', 'CSS', 'Embedded Systems'],
    liveLink: '',
    sourceLink: ''
  },
  {
    title: 'GrundVerwalter',
    description: 'Webbasierte Immobilienverwaltungssoftware zur zentralen Verwaltung von Objekten, Mietern, Mietverträgen und Zahlungen. Bietet eine übersichtliche Dashboard-Ansicht, Dokumentenverwaltung und automatisierte Abrechnungsfunktionen.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['React', 'Laravel', 'MySQL', 'PHP', 'Tailwind'],
    liveLink: '',
    sourceLink: ''
  },
  {
    title: 'WordPress Plugins',
    description: 'Mehrere eigenständige Plugins für WordPress und WooCommerce entwickelt – von der Terminbuchung über interne Entwicklerwerkzeuge bis hin zur Shop-Erweiterung.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'MySQL'],
    plugins: [
      { name: 'Appointment System', desc: 'Terminbuchung mit Kalenderansicht, E-Mail-Benachrichtigungen und Admin-Dashboard.' },
      { name: 'BugNotes', desc: 'Bug- & Notizverwaltung direkt im WordPress-Backend mit Priorisierung und Kommentarfunktion.' },
      { name: 'WooCommerce Companion', desc: 'Shop-Erweiterung mit erweiterten Filtern, Custom Checkout-Feldern und Bestellstatistiken.' }
    ],
    liveLink: '',
    sourceLink: ''
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
              <div className="flex flex-col md:flex-row md:max-h-64">
                <div className="aspect-video md:aspect-auto md:w-2/5 flex-shrink-0">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-6 md:py-8">
                  <h3 className="mb-3 text-[24px]">{project.title}</h3>
                  <p className="text-[16px] text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-[14px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {'plugins' in project && project.plugins && (
                    <ul className="mb-6 space-y-1">
                      {project.plugins.map((p) => (
                        <li key={p.name} className="text-[14px] text-muted-foreground">
                          <span className="font-medium text-foreground">{p.name}:</span> {p.desc}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex gap-4">
                    {project.liveLink && (
                      <a href={project.liveLink} className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}

                    {project.sourceLink && (
                      <a href={project.sourceLink} className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer">
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
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
