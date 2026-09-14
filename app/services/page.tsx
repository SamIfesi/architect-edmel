import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import SectionNav from '@/components/ui/SectionNav';
import ServiceDetail from '@/components/section/ServiceDetail';
import { PAGE_SECTIONS } from '@/libs/utils';
import {
  ArchitectureIcon,
  InteriorIcon,
  PropertyIcon,
  EngineeringIcon,
} from '@/components/icons/ServiceIcons';

export const metadata: Metadata = {
  title: 'Services | Edmel Konsult',
  description:
    'Architecture, interior architecture, property development and engineering solutions from Edmel Konsult.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="flex flex-1 flex-col">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-20">
          <h1 className="font-main text-4xl font-semibold text-primary-t md:text-5xl max-w-[16ch]">
            What we do, from first sketch to handover
          </h1>
          <p className="mt-5 max-w-[55ch] text-secondary-t leading-relaxed">
            Four disciplines, one team. Most projects draw on more than one of
            these at once — pick a section below to see how each works.
          </p>
        </div>

        <SectionNav sections={PAGE_SECTIONS.services} />

        <ServiceDetail
          id="architecture"
          title="Buildings that respond to how people actually use them"
          paragraphs={[
            'We design ground-up architecture for residential and commercial clients — from a single family home to a mixed-use block. Every project starts with the site: light, orientation, climate, and how people will move through the space, before it starts with a shape.',
            'Concept sketches move into working drawings, planning submissions, and construction documentation, with our team staying involved through to completion so the built result matches the design intent.',
          ]}
          bullets={[
            'Concept design and planning applications',
            'Construction documentation and detailing',
            'Site supervision through to handover',
            'Renovations, extensions and adaptive reuse',
          ]}
          Icon={ArchitectureIcon}
        />

        <ServiceDetail
          id="interior"
          title="Interiors built into the architecture, not added after it"
          paragraphs={[
            'We treat interior architecture as part of the same drawing set as the building shell — layout, materials, lighting and joinery are resolved alongside structure, not bolted on once the walls are up.',
            'The result is spaces that feel considered rather than decorated: rooms sized for what actually happens in them, sightlines that make small homes feel larger, and material choices that age well.',
          ]}
          bullets={[
            'Space planning and layout',
            'Material, lighting and finish selection',
            'Custom joinery and built-in furniture',
            'Styling and staging for handover',
          ]}
          Icon={InteriorIcon}
          reverse
        />

        <ServiceDetail
          id="property"
          title="Managing the parts of development architecture alone doesn't cover"
          paragraphs={[
            'For clients developing land or an existing building, we manage the process end to end — feasibility, approvals, budgeting and delivery — so design decisions are made with the numbers in view from day one.',
            "We work across residential, commercial and mixed-use developments, coordinating consultants, contractors and authorities on the client's behalf.",
          ]}
          bullets={[
            'Feasibility studies and site appraisal',
            'Planning and regulatory approvals',
            'Budget and programme management',
            'Contractor coordination and delivery',
          ]}
          Icon={PropertyIcon}
        />

        <ServiceDetail
          id="engineering"
          title="The structural and services engineering behind the design"
          paragraphs={[
            'Every design decision has an engineering consequence — spans, loads, drainage, services routing. We work with structural and civil engineers from the concept stage so the building that gets approved is the building that can actually be built.',
            'That keeps redesign to a minimum later in the process, when changes are far more expensive.',
          ]}
          bullets={[
            'Structural design and analysis',
            'Civil and drainage engineering',
            'Services coordination — electrical, mechanical, plumbing',
            'Site investigation and reporting',
          ]}
          Icon={EngineeringIcon}
          reverse
        />
      </main>

      <Footer />
    </>
  );
}
