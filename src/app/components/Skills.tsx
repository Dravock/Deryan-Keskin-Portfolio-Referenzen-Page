import { motion } from 'motion/react';
import { Code2, Database, Globe, Smartphone, Server, GitBranch } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'React, TypeScript, Next.js, Tailwind CSS',
    color: 'text-chart-1'
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Node.js, Python, REST APIs, GraphQL',
    color: 'text-chart-2'
  },
  {
    icon: Database,
    title: 'Datenbanken',
    description: 'PostgreSQL, MongoDB, Redis, Supabase',
    color: 'text-chart-3'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'React Native, Progressive Web Apps',
    color: 'text-chart-4'
  },
  {
    icon: Globe,
    title: 'Web Technologies',
    description: 'HTML5, CSS3, JavaScript, WebAssembly',
    color: 'text-chart-5'
  },
  {
    icon: GitBranch,
    title: 'DevOps & Tools',
    description: 'Git, Docker, CI/CD, AWS, Vercel',
    color: 'text-chart-1'
  }
];

export function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[40px]">Was ich kann</h2>
          <p className="text-[18px] text-muted-foreground max-w-2xl mx-auto">
            Meine technischen Fähigkeiten umfassen ein breites Spektrum moderner Technologien und Best Practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className={`${skill.color} mb-4`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="mb-2">{skill.title}</h3>
                <p className="text-[16px] text-muted-foreground">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
