// ─────────────────────────────────────────────────────────────
// Construtores de JSON-LD (Schema.org) por página.
// ─────────────────────────────────────────────────────────────

import { SITE_URL, DOCTOR, ADDRESS, SAME_AS } from './site';

const PHYSICIAN_ID = `${SITE_URL}/#physician`;

export function postalAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  };
}

// Physician completo — usado na Home e referenciado pelas demais páginas.
export function physicianSchema() {
  const node: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': PHYSICIAN_ID,
    name: 'Prof. Dr. Ricardo Reges',
    alternateName: DOCTOR.fullName,
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/fotos/dr-ricardo-reges.jpg`,
    medicalSpecialty: 'Urologic',
    description:
      'Urologista em Fortaleza. Professor de Urologia da UFC, doutor pela UNICAMP. Cirurgia da próstata a Laser (HoLEP, GreenLight), robótica, EchoLASER e tratamento de incontinência e disfunção erétil pós-prostatectomia.',
    telephone: '+55-85-99698-3366',
    address: postalAddress(),
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'CRM', value: DOCTOR.crm },
      { '@type': 'PropertyValue', propertyID: 'RQE', value: DOCTOR.rqe },
    ],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Universidade Federal do Ceará (UFC)' },
      { '@type': 'CollegeOrUniversity', name: 'Universidade Estadual de Campinas (UNICAMP)' },
    ],
    award: [
      'Medalha Alberto Gentile (AMB/SBU) — melhor residente de urologia do Brasil',
      '1º lugar nacional no Título de Especialista da Sociedade Brasileira de Urologia (2007)',
    ],
    knowsAbout: [
      'Hiperplasia prostática benigna',
      'Câncer de próstata',
      'Cirurgia a Laser da próstata',
      'Cirurgia robótica',
      'Incontinência urinária pós-prostatectomia',
      'Disfunção erétil',
      'Estudo urodinâmico',
    ],
  };
  if (SAME_AS.length) node.sameAs = SAME_AS;
  return node;
}

// MedicalClinic com horários — página Agendar (alimenta o Google local).
export function clinicSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Consultório Dr. Ricardo Reges — Urologia',
    url: `${SITE_URL}/agendar/`,
    image: `${SITE_URL}/fotos/dr-ricardo-reges.jpg`,
    telephone: '+55-85-99698-3366',
    address: postalAddress(),
    medicalSpecialty: 'Urologic',
    physician: { '@id': PHYSICIAN_ID },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };
}

// MedicalWebPage + MedicalProcedure (páginas de procedimento P1–P4).
export function procedurePageSchema(opts: {
  path: string;
  name: string;
  description: string;
  procedures: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    author: { '@id': PHYSICIAN_ID },
    reviewedBy: { '@id': PHYSICIAN_ID },
    about: opts.procedures.map((p) => ({
      '@type': 'MedicalProcedure',
      name: p,
      medicalSpecialty: 'Urologic',
    })),
  };
}

// MedicalWebPage + MedicalTest — página de Avaliação (urodinâmica).
export function testPageSchema(opts: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    author: { '@id': PHYSICIAN_ID },
    reviewedBy: { '@id': PHYSICIAN_ID },
    about: {
      '@type': 'MedicalTest',
      name: 'Estudo urodinâmico',
      usedToDiagnose: [
        { '@type': 'MedicalCondition', name: 'Sintomas do trato urinário inferior' },
        { '@type': 'MedicalCondition', name: 'Incontinência urinária' },
        { '@type': 'MedicalCondition', name: 'Bexiga neurogênica' },
      ],
      medicalSpecialty: 'Urologic',
    },
  };
}

// FAQPage — a partir de pares pergunta/resposta.
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}
