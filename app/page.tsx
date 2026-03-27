"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Star, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-accent selection:text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Navigation - Locked to Hero (Not sticky) */}
        <nav className="w-full py-6 px-6 md:px-12 flex items-center justify-between z-10 relative">
          <div className="flex items-center gap-2">
            {/* Logo Placeholder */}
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-playfair font-bold text-xl">
              H
            </div>
            <span className="font-playfair font-semibold text-xl tracking-wide text-primary">
              Holistic Dental
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="#cases" className="hover:text-primary transition-colors">Case Studies</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-primary text-background px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
            Book Appointment
          </button>
          <button className="md:hidden text-foreground">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </nav>

        {/* Hero Content - Above the fold */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 gap-12 lg:gap-24 relative z-10 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 max-w-2xl pt-12 lg:pt-0"
          >
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground mb-6">
              A New Standard of <span className="text-primary italic">Dental Care</span>.
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg leading-relaxed">
              We focus on your whole body health, not just your teeth. Experience gentle, natural, and advanced dental treatments in a relaxing environment.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="bg-primary text-background px-8 py-4 rounded-full text-base font-medium hover:bg-primary/90 transition-colors flex items-center gap-2 group">
                Start Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full text-base font-medium border border-foreground/20 hover:border-foreground/40 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full max-w-xl aspect-[4/5] lg:aspect-square relative rounded-3xl overflow-hidden bg-foreground/5 border border-foreground/10"
          >
            {/* Hero Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-foreground/40 font-medium">
              [ Hero Image Space ]
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 w-full aspect-[3/4] max-w-md relative rounded-2xl overflow-hidden bg-background border border-foreground/10">
            {/* About Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-foreground/40 font-medium">
              [ Clinic / Doctor Image Space ]
            </div>
          </div>
          <div className="flex-1 max-w-2xl">
            <h2 className="font-playfair text-4xl md:text-5xl mb-6">About Our Practice</h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              We believe that your mouth is the gateway to your overall health. Traditional dentistry often treats symptoms, but we look at the root cause. Our holistic approach means we use safe, non-toxic materials and consider how your dental health affects your entire body.
            </p>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Our team of specialists is dedicated to providing a calm, pain-free experience. Whether you need a simple cleaning or a complex restoration, we are here to support your wellness journey.
            </p>
            <ul className="space-y-4">
              {[
                "Mercury-free and safe removal practices",
                "Biocompatible dental materials",
                "Focus on airway health and sleep",
                "Relaxing, spa-like environment"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl mb-6">Our Services</h2>
            <p className="text-lg text-foreground/70">
              Comprehensive care tailored to your unique needs. We combine modern technology with natural healing principles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Holistic Checkups", desc: "Thorough exams focusing on the connection between your teeth and body health." },
              { title: "Safe Amalgam Removal", desc: "Strict safety protocols to remove old mercury fillings without exposing you to toxins." },
              { title: "Biocompatible Implants", desc: "Metal-free zirconia implants that are friendly to your body and look natural." },
              { title: "Ozone Therapy", desc: "A natural way to treat infections, reduce bacteria, and promote faster healing." },
              { title: "Airway Dentistry", desc: "Treatments to improve your breathing, sleep quality, and overall energy levels." },
              { title: "Cosmetic Restorations", desc: "Beautiful, natural-looking smiles using safe materials that last." }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-foreground/5 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-accent rounded-full opacity-50"></div>
                </div>
                <h3 className="font-playfair text-2xl mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATIONS / CASE STUDIES */}
      <section id="cases" className="py-24 px-6 md:px-12 bg-primary text-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-playfair text-4xl md:text-5xl mb-6">Real Transformations</h2>
              <p className="text-lg text-background/80">
                See the difference our holistic approach makes. These are real results from patients who trusted us with their smiles and health.
              </p>
            </div>
            <button className="px-6 py-3 rounded-full text-sm font-medium border border-background/30 hover:bg-background hover:text-primary transition-colors whitespace-nowrap">
              View All Cases
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-[16/9] w-full bg-background/10 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center border border-background/20">
                  <div className="text-background/50 font-medium">
                    [ Before & After Image Space ]
                  </div>
                </div>
                <h3 className="font-playfair text-2xl mb-2">Full Mouth Restoration</h3>
                <p className="text-background/70">Safe removal of metals and complete cosmetic rebuild using biocompatible materials.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl mb-16">Patient Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "I used to be terrified of the dentist. The team here made me feel so calm. The ozone therapy was painless, and my teeth have never felt better.", author: "Sarah M." },
              { text: "Getting my old metal fillings removed was a big decision. They walked me through the safety steps, and I felt completely protected. Highly recommend!", author: "David L." },
              { text: "They fixed my sleep apnea by looking at my airway and bite. It's amazing how much dental health affects your daily energy. Life changing.", author: "Elena R." }
            ].map((test, i) => (
              <div key={i} className="bg-background p-8 rounded-2xl text-left">
                <div className="flex gap-1 text-accent mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-lg text-foreground/80 mb-6 italic">&quot;{test.text}&quot;</p>
                <p className="font-medium font-playfair text-lg">{test.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-foreground text-background py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-playfair font-bold">
                H
              </div>
              <span className="font-playfair font-semibold text-xl tracking-wide">
                Holistic Dental
              </span>
            </div>
            <p className="text-background/60 leading-relaxed">
              A new standard of dental care focusing on your whole body wellness.
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair text-xl mb-6">Contact</h4>
            <ul className="space-y-4 text-background/70">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                hello@holisticdental.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                123 Wellness Way,<br />Suite 100<br />Health City, HC 90210
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-xl mb-6">Hours</h4>
            <ul className="space-y-2 text-background/70">
              <li className="flex justify-between"><span>Monday - Thursday</span><span>8am - 5pm</span></li>
              <li className="flex justify-between"><span>Friday</span><span>8am - 2pm</span></li>
              <li className="flex justify-between"><span>Weekend</span><span>Closed</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-xl mb-6">Ready to start?</h4>
            <button className="w-full bg-primary text-background px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors mb-4">
              Book Appointment
            </button>
            <p className="text-sm text-background/50 text-center">
              New patients welcome.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-background/10 text-center text-background/40 text-sm">
          &copy; {new Date().getFullYear()} Holistic Specialty Dental Clinic. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
