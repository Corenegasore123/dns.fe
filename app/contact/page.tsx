import React from 'react';
import type { Metadata } from 'next';
import { Mail, MapPin, PhoneCall } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Branches from '../components/Branches';

export const metadata: Metadata = {
  title: 'Contact Us | Duhingeneza Shop',
  description: 'Call, email or visit Duhingeneza Shop in Musanze, Rwanda, or send us a message.',
};

const contactItems = [
  { icon: PhoneCall, label: 'Call', value: '+250783345370', href: 'tel:+250783345370' },
  { icon: Mail, label: 'Email', value: 'eugenemunyaneza92@gmail.com', href: 'mailto:eugenemunyaneza92@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Musanze, Rwanda', href: 'https://www.google.com/maps/search/?api=1&query=Musanze%2C+Rwanda' },
];

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="pt-10 sm:pt-14 lg:pt-16 pb-6">
        <div className="site-container">
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1a1a1a] mb-8 sm:mb-12">
            Contact Us
          </h1>

          {/* Map + form */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-6 sm:gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[24rem] overflow-hidden rounded-lg bg-gray-100">
              <iframe
                title="Duhingeneza Shop on the map: Musanze, Rwanda"
                src="https://www.google.com/maps?q=Musanze%2C+Rwanda&z=14&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <ContactForm />
          </div>

          {/* Call / Email / Location */}
          <ul className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-6 sm:gap-10 lg:gap-16 max-w-6xl mx-auto">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(label === 'Location' && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="group flex items-center gap-3"
                >
                  <Icon className="w-7 h-7 text-[#17643F] flex-shrink-0" strokeWidth={1.5} />
                  <span className="min-w-0">
                    <span className="block text-base sm:text-lg font-medium text-[#1a1a1a] leading-tight">{label}</span>
                    <span className="block text-sm text-gray-500 group-hover:text-[#47A15E] transition-colors break-all">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Branches />
    </main>
  );
}
