import { motion } from 'motion/react';
import { Mail, Linkedin, Phone, Github } from 'lucide-react';

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:deryan@keskin-neubulach.de',
    text: 'deryan@keskin-neubulach.de'
  },
  {
    icon: Phone,
    label: 'Telefon',
    href: 'tel:070531809404',
    text: '07053 / 1809404'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    text: 'LinkedIn Profil'
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Dravock',
    text: 'GitHub/Dravock'
  }
];

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-[40px]">Lass uns zusammenarbeiten</h2>
          <p className="text-[18px] text-muted-foreground mb-12 max-w-2xl mx-auto">
            Hast du ein Projekt im Kopf oder möchtest einfach nur Hallo sagen? Ich freue mich auf deine Nachricht!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all hover:scale-105 flex items-center gap-4"
              >
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[14px] text-muted-foreground mb-1">
                    {link.label}
                  </div>
                  <div className="text-[16px]">{link.text}</div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-border"
        >
          <p className="text-[14px] text-muted-foreground">
            © 2026 Deryan Keskin. Alle Rechte vorbehalten.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
