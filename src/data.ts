/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProductCategory, IndustrySector } from './types';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'water-treatment',
    name: 'Water Treatment Chemicals',
    description: 'Procurement of premium chemicals for pre-treatment, process water, boiler systems, and effluent treatment.',
    items: [
      {
        id: 'wt-01',
        name: 'Coagulants',
        description: 'Primary coagulants used in industrial water clarification and suspended solids separation.',
        chemicalFormula: 'Al2(SO4)3 / FeCl3',
        standardPackaging: '25kg poly bags, 1000L IBC Totes',
        typicalApplications: ['Industrial Raw Water Clarification', 'Pre-treatment of process water', 'Suspended solids separation'],
        keySpecifications: ['Available as Aluminum Sulfate, Ferric Chloride, or Polyaluminum Chloride (PAC)', 'Technical & Food grades available', 'Strict pH-range effectiveness controls']
      },
      {
        id: 'wt-02',
        name: 'Flocculants',
        description: 'High-molecular-weight polymers designed to promote aggregation of micro-flocs in industrial effluent treatment.',
        standardPackaging: '25kg moisture-proof paper sacks',
        typicalApplications: ['Wastewater sludge dewatering', 'Sedimentation acceleration', 'Daf unit efficiency optimization'],
        keySpecifications: ['Cationic, Anionic, and Non-ionic polyacrylamides', 'High water solubility with minimal residue', 'Wide range of molecular weights & charge densities']
      },
      {
        id: 'wt-03',
        name: 'pH Control Agents',
        description: 'Strong alkaline or acidic formulations utilized for neutralization, scale mitigation, and optimal process pH safeguarding.',
        chemicalFormula: 'NaOH / H2SO4 / Na2CO3',
        standardPackaging: '25kg bags, bulk road tankers, 200L drums',
        typicalApplications: ['Effluent pH neutralization', 'Boiler feedwater adjustment', 'Process stream conditioning'],
        keySpecifications: ['Sodium Hydroxide (Caustic Soda lye/pearls)', 'Soda Ash (sodium carbonate, dense/light)', 'Sulfuric Acid and hydrochloric acid blends']
      },
      {
        id: 'wt-04',
        name: 'Disinfection & Oxidation Chemicals',
        description: 'Biocides and oxidizers dedicated to micro-organism elimination, bio-film control, and organic contaminant oxidation.',
        standardPackaging: '45kg drums, IBC totes, 25kg bags',
        typicalApplications: ['Cooling tower microbiological control', 'Disinfection of plant process streams', 'Sulfide and organic compounds oxidation'],
        keySpecifications: ['Calcium Hypochlorite (65% & 70% min active chlorine)', 'Sodium Hypochlorite solutions', 'Chlorine Dioxide precursors & stabilized formulations']
      }
    ]
  },
  {
    id: 'industrial-filtration',
    name: 'Industrial Filtration Materials',
    description: 'High-capacity adsorbents and mechanical medias utilized for solid-liquid extraction, gas separation, and fluid dehydration.',
    items: [
      {
        id: 'if-01',
        name: 'Desiccants',
        description: 'Chemicals and synthetic crystalline structures engineered to target extreme moisture removal of hydrocarbon gases or air streams.',
        standardPackaging: '150kg airtight steel drums',
        typicalApplications: ['Instrument air drying', 'Natural gas stream dehydration', 'Petrochemical process line moisture safety'],
        keySpecifications: ['Activated Alumina (high crush strength, optimal thermal stability)', 'Molecular Sieves (3A, 4A, 5A, and 13X zeolites)', 'High-purity indicating and non-indicating Silica Gels']
      },
      {
        id: 'if-02',
        name: 'Adsorbents',
        description: 'Highly porous raw materials designed to selectively adhere organic contaminants, trace heavy metals, and coloring agents.',
        standardPackaging: '25kg bags, 500kg supersacks',
        typicalApplications: ['Hydrocarbon purification', 'Amine loop treatment for organic removal', 'Industrial heavy metal capture'],
        keySpecifications: ['Coal, wood, and coconut-shell activated carbon', 'Granular, powdered, and extruded (pelletized) formats', 'Acid-washed or impregnated options for dedicated gases']
      },
      {
        id: 'if-03',
        name: 'Filtration Media',
        description: 'Granulated deep-bed filtration elements for general industrial water extraction and particulate removal.',
        standardPackaging: '25kg valve bags, 1-tonne bulk bags',
        typicalApplications: ['Multimedia water filtration systems', 'Deep bed filters', 'Cooling bypass filtration'],
        keySpecifications: ['High-purity washed Silica Sand with verified uniformity coefficients', 'Acid-washed Anthracite Coal with low friability', 'Crushed Walnut Shell media for offshore oil-from-water extraction']
      },
      {
        id: 'if-04',
        name: 'Gas & Moisture Control Materials',
        description: 'Highly specialized coalescers and molecular traps for selective extraction of acid gases and volatile organics.',
        standardPackaging: 'Sealed moisture-barrier drums',
        typicalApplications: ['Compressor outlet safety', 'Acidic gas scrubber columns', 'Vapor recovery systems'],
        keySpecifications: ['Hydrophobic ceramic support matrices', 'Structured coalescence materials', 'Corrosion-resistant metal alloy packing elements']
      }
    ]
  },
  {
    id: 'oil-gas-process',
    name: 'Oil & Gas Process Chemicals',
    description: 'Advanced production chemicals and thermodynamic additives supporting separation, line flow stability, and corrosion protection.',
    items: [
      {
        id: 'og-01',
        name: 'Gas Dehydration Glycols',
        description: 'Thermodynamic hydrate inhibitors utilized to absorb moisture from raw gas streams to prevent pipeline freezing.',
        chemicalFormula: 'TEG / MEG / DEG',
        standardPackaging: '1000L IBC totes, 210L drums',
        typicalApplications: ['Triethylene Glycol (TEG) dehydration units', 'Monoethylene Glycol (MEG) injection systems', 'Hydrate block prevention'],
        keySpecifications: ['Triethylene Glycol (TEG) purity >= 99.5%', 'Monoethylene Glycol (MEG) purity >= 99.8%', 'Low water content and stable pH profile']
      },
      {
        id: 'og-02',
        name: 'Moisture Removal Systems',
        description: 'Integrated desiccant charge matrices for dry gas storage and transport system stabilization.',
        standardPackaging: 'Steel drums with moisture-tight seals',
        typicalApplications: ['Midstream gas storage dehydration', 'LNG processing pre-cooling filters', 'High-purity specialty gas drying'],
        keySpecifications: ['Dual-bed molecular sieve systems matching API specifications', 'High mechanical strength against dust formation', 'High thermal rejuvenation rates']
      },
      {
        id: 'og-03',
        name: 'Process Treatment Additives',
        description: 'High-performance active surfactants and chemical inhibitors to resolve interface separation and asset corrosion.',
        standardPackaging: '200L steel drums, 1000L high-strength IBCs',
        typicalApplications: ['Crude oil pipeline transportation protection', 'Oil-water interface demulsification', 'Downhole scale mitigation'],
        keySpecifications: ['Amine-based corrosion inhibitors with high thermal threshold', 'Block copolymer demulsifiers tailored for heavy/light crudes', 'Phosphonate and polymer scale inhibitors for extreme brine systems']
      },
      {
        id: 'og-04',
        name: 'System Conditioning Chemicals',
        description: 'Scavengers and defoaming agents used to neutralize toxic trace gases and maximize fluid handling capacities.',
        standardPackaging: '200L UV-resistant polymer drums',
        typicalApplications: ['Hydrogen Sulfide (H2S) scavenging', 'Oxygen depletion in water flooding', 'Separator foaming control'],
        keySpecifications: ['Triazine-based H2S scavengers (solvent & water soluble)', 'Ammonium/Sodium bisulfite oxygen scavengers', 'Organosilicon and non-silicone high-efficiency defoamers']
      }
    ]
  },
  {
    id: 'industrial-maintenance',
    name: 'Industrial Maintenance Chemicals',
    description: 'Heavy-duty agents designed to protect mechanical systems, purge process lines, and manage heat transfer.',
    items: [
      {
        id: 'im-01',
        name: 'Industrial Cleaning Agents',
        description: 'Concentrated chemical cleaners to decompose greases, carbonaceous deposits, and heavy organic residues.',
        standardPackaging: '25L micro-drums, 200L HDPE drums',
        typicalApplications: ['Heat exchanger tube cleaning', 'Machinery and vessel degreasing', 'Carbon deposit elimination'],
        keySpecifications: ['Emulsifying surfactants paired with high-efficiency alkaline boosters', 'Safe for multi-metal systems under optimized dilution', 'Biodegradable surfactant arrays conforming to global environmental guidelines']
      },
      {
        id: 'im-02',
        name: 'System Flush Chemicals',
        description: 'Inorganic and organic acid formulations designed to eliminate hardness scales, rust, and process oxides from piping network.',
        standardPackaging: '20L canisters, 200L drums',
        typicalApplications: ['Boiler and heat exchanger descaling', 'Commissioning piping pickling', 'Circulating system passivation'],
        keySpecifications: ['Inhibited Hydrochloric Acid, Sulfamic Acid, or Citric Acid systems', 'Added indicators for system metal protection validation', 'Coordinating pH buffers and passivating salts']
      },
      {
        id: 'im-03',
        name: 'Process Support Glycols & Fluids',
        description: 'Heat transfer fluids engineered to operate across broad thermal envelopes without cracking or promoting scaling.',
        standardPackaging: '1000L IBC tanks, bulk deliveries',
        typicalApplications: ['Industrial chilling machinery loop', 'Jacketed reactor temperature management', 'Closed-loop HVAC systems'],
        keySpecifications: ['Inhibited Propylene Glycol (safe for food-grade utility environments)', 'Inhibited Ethylene Glycol (for critical industrial processes)', 'Specially formulated dye indicators for leak tracing and degradation checks']
      }
    ]
  }
];

export const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    id: 'oil-gas',
    title: 'Oil & Gas Production and Processing',
    description: 'Supply of chemicals used in upstream, midstream, and downstream operations including gas processing, moisture control, and system protection.',
    processImpact: 'Prevents asset downtime, optimizes separation speed, and controls corrosion within pipelines and offshore installations.',
    imageUrl: '/IMG-20260522-WA0000.jpg'
  },
  {
    id: 'natural-gas-lng',
    title: 'Natural Gas Processing and LNG Systems',
    description: 'Support for gas dehydration, filtration, purification systems, and process stability applications in gas infrastructure and liquefaction terminals.',
    processImpact: 'Ensures water content standards are optimized to prevent freezing and downstream corrosion, maintaining pipeline purity and custody transport parameters.',
    imageUrl: '/IMG-20260522-WA0001.jpg'
  },
  {
    id: 'petrochemical-refining',
    title: 'Petrochemical and Refining Operations',
    description: 'Supply of process chemicals used in refining operations, system maintenance, catalyst bed protections, and production stability processes.',
    processImpact: 'Minimizes catalyst poisoning, prevents heat exchanger biological fouling, and manages salt-cracking in high-temperature fractionations.',
    imageUrl: '/IMG-20260522-WA0002.jpg'
  },
  {
    id: 'water-treatment',
    title: 'Industrial Water Treatment Systems',
    description: 'Supply of treatment chemicals used in industrial water systems including coagulation, flocculation, filtration, demineralization, and disinfection.',
    processImpact: 'Safeguards cooling towers, regulates boiler feed streams to suppress scale, and ensures factory discharge meets governmental regulations.',
    imageUrl: '/filtration.jpg'
  },
  {
    id: 'manufacturing-process',
    title: 'Manufacturing and Process Industries',
    description: 'Supply of chemicals used in production processes, specialized machinery maintenance, thermal fluid loops, and operational maintenance.',
    processImpact: 'Maintains system heat exchange effectiveness, secures auxiliary process cooling, and prevents component corrosion.',
    imageUrl: '/pic5.jpg'
  },
  {
    id: 'environmental-waste',
    title: 'Environmental and Waste Treatment Systems',
    description: 'Chemical supply for wastewater treatment, sludge processing, dewatering cycles, and regulatory-compliant environmental remediation systems.',
    processImpact: 'Enhances suspended solids capture rates, assists sludge filtration density, and limits heavy metal dispersion in discharged effluents.',
    imageUrl: '/san2.jpg'
  }
];

export const OFFICE_LOCATIONS = {
  nigeria: {
    title: 'Nigeria Operations',
    companyName: 'Oil Drop Chemical Ltd',
    address: 'Port Harcourt, Rivers State, Nigeria',
    timezone: 'Africa/Lagos', // UTC+1
    focus: 'Industrial distribution, specialized warehousing, regional logistics and client servicing desk.'
  },
  houston: {
    title: 'International Procurement Liaison',
    companyName: 'Houston Coordination Desk',
    address: 'Houston, Texas, USA',
    timezone: 'America/Chicago', // UTC-5 (CDT) / UTC-6 (CST)
    focus: 'Supplier engagement, technical manufacturer inquiries, global compliance, and quality-vetted technical sourcing.'
  }
};

export const CONTACT_INFO = {
  email: 'procurement@oildropchemical.com', // Realistic placeholder
  altEmail: 'ops@oildropchemical.com',
  phone: '+234 (0) 84 492 108', // Port Harcourt-like format
  altPhone: '+1 (713) 555-0198' // Houston-like format
};
