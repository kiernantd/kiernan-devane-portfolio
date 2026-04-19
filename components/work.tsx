import { Container } from "@/components/ui/container";
import { SectionMarker } from "@/components/ui/section-marker";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <Container>
        <SectionMarker number="02" label="Selected Work" />
        <div>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
          <div className="border-t border-ink/10" />
        </div>
      </Container>
    </section>
  );
}
