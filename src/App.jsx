import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Award, Users, Wrench, Building2, Home, Lightbulb, HardHat, Star } from 'lucide-react';

export default function VaughnPlumbingWebsite() {
  const [activeService, setActiveService] = useState('commercial');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', projectType: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{ 
      fontFamily: "'DM Sans', -apple-system, sans-serif",
      background: '#fafaf8',
      minHeight: '100vh'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(26, 35, 50, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 2rem',
        zIndex: 1000,
        borderBottom: '2px solid #D97740'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <div style={{ 
              fontSize: '1.5rem', 
              fontWeight: 700, 
              color: '#fff',
              letterSpacing: '0.5px'
            }}>
              VAUGHN PLUMBING
            </div>
            <div style={{ 
              fontSize: '0.75rem', 
              color: '#D97740',
              letterSpacing: '2px',
              fontWeight: 600
            }}>
              SERVICES, LLC
            </div>
          </div>
          
          <div style={{ 
            display: 'flex', 
            gap: '2rem', 
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <button onClick={() => scrollToSection('services')} style={{ 
              background: 'none',
              border: 'none',
              color: '#fff', 
              fontSize: '0.9rem',
              fontWeight: 500,
              cursor: 'pointer',
              padding: 0
            }}>Services</button>
            <button onClick={() => scrollToSection('about')} style={{ 
              background: 'none',
              border: 'none',
              color: '#fff', 
              fontSize: '0.9rem',
              fontWeight: 500,
              cursor: 'pointer',
              padding: 0
            }}>About</button>
            <button onClick={() => scrollToSection('contact')} style={{ 
              background: 'none',
              border: 'none',
              color: '#fff', 
              fontSize: '0.9rem',
              fontWeight: 500,
              cursor: 'pointer',
              padding: 0
            }}>Contact</button>
            <a href="tel:+14105551234" style={{
              background: '#D97740',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s',
              border: 'none'
            }}>
              <Phone size={16} />
              (410) 555-1234
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        marginTop: '80px',
        background: 'linear-gradient(135deg, #1a2332 0%, #2d3e50 100%)',
        color: '#fff',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(217, 119, 64, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }} />
        
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ maxWidth: '900px' }}>
            {/* Badge Row */}
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}>
              <div style={{
                background: 'rgba(217, 119, 64, 0.2)',
                border: '1px solid #D97740',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '1px'
              }}>
                30 YEARS EXPERIENCE
              </div>
              <div style={{
                background: 'rgba(217, 119, 64, 0.2)',
                border: '1px solid #D97740',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '1px'
              }}>
                MBE CERTIFIED
              </div>
              <div style={{
                background: 'rgba(217, 119, 64, 0.2)',
                border: '1px solid #D97740',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '1px'
              }}>
                UNION TRAINED
              </div>
            </div>

            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              letterSpacing: '-1px'
            }}>
              Master Plumber Expertise
              <br />
              <span style={{ color: '#D97740' }}>
                For Complex Projects
              </span>
            </h1>
            
            <p style={{ 
              fontSize: '1.25rem', 
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '2.5rem',
              maxWidth: '700px'
            }}>
              Three decades of proven expertise in commercial and residential plumbing. 
              From design through installation, we deliver the reliability and skill that 
              sophisticated projects demand.
            </p>

            <div style={{ 
              display: 'flex', 
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <button onClick={() => scrollToSection('contact')} style={{
                background: '#D97740',
                color: '#fff',
                padding: '1rem 2rem',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '1rem',
                transition: 'transform 0.3s, box-shadow 0.3s',
                border: 'none',
                cursor: 'pointer'
              }}>
                Request Consultation
              </button>
              <a href="tel:+14105551234" style={{
                background: 'transparent',
                color: '#fff',
                padding: '1rem 2rem',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '2px solid #fff',
                transition: 'all 0.3s'
              }}>
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{
        background: '#fff',
        padding: '3rem 2rem',
        borderBottom: '1px solid #e5e5e0'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ 
              fontSize: '3rem', 
              fontWeight: 800,
              color: '#1a2332',
              marginBottom: '0.5rem'
            }}>30+</div>
            <div style={{ 
              color: '#666',
              fontSize: '0.95rem',
              fontWeight: 600
            }}>Years Experience</div>
          </div>
          <div>
            <div style={{ 
              fontSize: '3rem', 
              fontWeight: 800,
              color: '#1a2332',
              marginBottom: '0.5rem'
            }}>100%</div>
            <div style={{ 
              color: '#666',
              fontSize: '0.95rem',
              fontWeight: 600
            }}>Licensed & Insured</div>
          </div>
          <div>
            <div style={{ 
              fontSize: '3rem', 
              fontWeight: 800,
              color: '#1a2332',
              marginBottom: '0.5rem'
            }}>MBE</div>
            <div style={{ 
              color: '#666',
              fontSize: '0.95rem',
              fontWeight: 600
            }}>Certified Business</div>
          </div>
          <div>
            <div style={{ 
              fontSize: '3rem', 
              fontWeight: 800,
              color: '#1a2332',
              marginBottom: '0.5rem'
            }}>24/7</div>
            <div style={{ 
              color: '#666',
              fontSize: '0.95rem',
              fontWeight: 600
            }}>Emergency Service</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        padding: '6rem 2rem',
        background: '#fafaf8'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              display: 'inline-block',
              background: '#D97740',
              color: '#fff',
              padding: '0.5rem 1.5rem',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '1px',
              marginBottom: '1rem'
            }}>
              COMPREHENSIVE SERVICES
            </div>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: '#1a2332',
              marginBottom: '1rem',
              letterSpacing: '-1px'
            }}>
              Full-Service Plumbing Solutions
            </h2>
            <p style={{ 
              fontSize: '1.15rem',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              From design and project management to excavation and complete installation, 
              we handle every aspect of your plumbing needs.
            </p>
          </div>

          {/* Service Category Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            {[
              { id: 'commercial', label: 'Commercial', icon: Building2 },
              { id: 'residential', label: 'Residential', icon: Home },
              { id: 'design', label: 'Design & PM', icon: Lightbulb },
              { id: 'training', label: 'Training', icon: Users }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveService(tab.id)}
                style={{
                  padding: '1rem 2rem',
                  background: activeService === tab.id ? '#1a2332' : '#fff',
                  color: activeService === tab.id ? '#fff' : '#1a2332',
                  border: `2px solid ${activeService === tab.id ? '#1a2332' : '#e5e5e0'}`,
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Service Content */}
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '3rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            border: '1px solid #e5e5e0'
          }}>
            {activeService === 'commercial' && (
              <div>
                <h3 style={{ 
                  fontSize: '2rem', 
                  fontWeight: 700,
                  color: '#1a2332',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <Building2 size={32} color="#D97740" />
                  Commercial Plumbing
                </h3>
                <p style={{ 
                  fontSize: '1.1rem',
                  color: '#666',
                  marginBottom: '2rem',
                  lineHeight: 1.7
                }}>
                  Comprehensive commercial plumbing services for new construction, renovations, 
                  and tenant improvements. We work with general contractors, developers, and 
                  property managers across Baltimore.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {[
                    'New Construction Plumbing',
                    'Tenant Fit-Outs',
                    'Building Renovations',
                    'Commercial Kitchens',
                    'Medical Facilities',
                    'Retail & Office Buildings',
                    'System Upgrades',
                    'Backflow Prevention'
                  ].map(service => (
                    <div key={service} style={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: '0.75rem'
                    }}>
                      <CheckCircle size={20} color="#D97740" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ 
                        fontSize: '1rem',
                        color: '#333',
                        fontWeight: 500
                      }}>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeService === 'residential' && (
              <div>
                <h3 style={{ 
                  fontSize: '2rem', 
                  fontWeight: 700,
                  color: '#1a2332',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <Home size={32} color="#D97740" />
                  Residential Plumbing
                </h3>
                <p style={{ 
                  fontSize: '1.1rem',
                  color: '#666',
                  marginBottom: '2rem',
                  lineHeight: 1.7
                }}>
                  High-end residential plumbing services for renovations, new construction, and 
                  system upgrades. Specializing in Baltimore's historic homes and modern residences.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {[
                    'Kitchen & Bath Renovations',
                    'Whole-House Repiping',
                    'Water Heater Installation',
                    'Historic Home Restoration',
                    'Fixture Upgrades',
                    'Drain Cleaning & Repair',
                    'Sewer Line Replacement',
                    'Emergency Services'
                  ].map(service => (
                    <div key={service} style={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: '0.75rem'
                    }}>
                      <CheckCircle size={20} color="#D97740" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ 
                        fontSize: '1rem',
                        color: '#333',
                        fontWeight: 500
                      }}>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeService === 'design' && (
              <div>
                <h3 style={{ 
                  fontSize: '2rem', 
                  fontWeight: 700,
                  color: '#1a2332',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <Lightbulb size={32} color="#D97740" />
                  Design & Project Management
                </h3>
                <p style={{ 
                  fontSize: '1.1rem',
                  color: '#666',
                  marginBottom: '2rem',
                  lineHeight: 1.7
                }}>
                  Complete plumbing system design and project management services. From initial 
                  concepts through installation, we ensure your project is designed right and 
                  executed flawlessly.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {[
                    'System Design & Engineering',
                    'Project Planning & Coordination',
                    'Value Engineering',
                    'Code Compliance Review',
                    'Bid Preparation & Review',
                    'Quality Control',
                    'Excavation & Underground Work',
                    'As-Built Documentation'
                  ].map(service => (
                    <div key={service} style={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: '0.75rem'
                    }}>
                      <CheckCircle size={20} color="#D97740" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ 
                        fontSize: '1rem',
                        color: '#333',
                        fontWeight: 500
                      }}>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeService === 'training' && (
              <div>
                <h3 style={{ 
                  fontSize: '2rem', 
                  fontWeight: 700,
                  color: '#1a2332',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <Users size={32} color="#D97740" />
                  Apprentice Training & Education
                </h3>
                <p style={{ 
                  fontSize: '1.1rem',
                  color: '#666',
                  marginBottom: '2rem',
                  lineHeight: 1.7
                }}>
                  Leveraging three decades of union-trained expertise to develop the next 
                  generation of skilled plumbers. We offer apprenticeship opportunities and 
                  specialized training courses.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {[
                    'Registered Apprenticeship Program',
                    'Code Update Courses',
                    'Certification Exam Prep',
                    'New Technology Training',
                    'Safety & OSHA Compliance',
                    'Hands-On Installation Training',
                    'Business Skills Development',
                    'Workforce Partnerships'
                  ].map(service => (
                    <div key={service} style={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: '0.75rem'
                    }}>
                      <CheckCircle size={20} color="#D97740" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ 
                        fontSize: '1rem',
                        color: '#333',
                        fontWeight: 500
                      }}>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '6rem 2rem',
        background: '#fff'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Image Placeholder */}
          <div style={{
            background: 'linear-gradient(135deg, #1a2332 0%, #2d3e50 100%)',
            borderRadius: '12px',
            aspectRatio: '4/5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '1rem',
            padding: '2rem',
            textAlign: 'center',
            border: '3px solid #D97740',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <HardHat size={80} color="#D97740" style={{ marginBottom: '1rem' }} />
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                Harold Vaughn<br/>Master Plumber
              </div>
              <div style={{ marginTop: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>
                Professional photo: Harold in work uniform on commercial job site
              </div>
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-50%',
              right: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(217, 119, 64, 0.1) 0%, transparent 70%)'
            }} />
          </div>

          <div>
            <div style={{
              display: 'inline-block',
              background: '#D97740',
              color: '#fff',
              padding: '0.5rem 1.5rem',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '1px',
              marginBottom: '1rem'
            }}>
              ABOUT HAROLD VAUGHN
            </div>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: '#1a2332',
              marginBottom: '1.5rem',
              lineHeight: 1.2,
              letterSpacing: '-1px'
            }}>
              Three Decades of Proven Excellence
            </h2>
            
            <p style={{ 
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#666',
              marginBottom: '1.5rem'
            }}>
              After 30 years as a union-trained master plumber, Harold Vaughn established 
              Vaughn Plumbing Services to bring his depth of expertise directly to Baltimore's 
              property owners, contractors, and developers.
            </p>

            <p style={{ 
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#666',
              marginBottom: '2rem'
            }}>
              What sets Harold apart is the rare combination of design vision, project management 
              experience, and hands-on installation mastery. Whether you're breaking ground on a 
              commercial building, renovating a historic Baltimore row home, or need excavation 
              and complete system replacement, Harold has solved these challenges hundreds of times.
            </p>

            <div style={{
              background: '#fafaf8',
              padding: '2rem',
              borderRadius: '8px',
              borderLeft: '4px solid #D97740',
              marginBottom: '2rem'
            }}>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem'
              }}>
                <div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <Award size={24} color="#D97740" />
                    <span style={{ 
                      fontWeight: 700,
                      color: '#1a2332',
                      fontSize: '1rem'
                    }}>Master Plumber</span>
                  </div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>
                    Maryland Licensed
                  </div>
                </div>
                <div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <Star size={24} color="#D97740" />
                    <span style={{ 
                      fontWeight: 700,
                      color: '#1a2332',
                      fontSize: '1rem'
                    }}>MBE Certified</span>
                  </div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>
                    Maryland DOT
                  </div>
                </div>
                <div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <Users size={24} color="#D97740" />
                    <span style={{ 
                      fontWeight: 700,
                      color: '#1a2332',
                      fontSize: '1rem'
                    }}>Union Trained</span>
                  </div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>
                    UA Local 10
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              background: '#1a2332',
              color: '#fff',
              padding: '1.5rem',
              borderRadius: '8px'
            }}>
              <div style={{ 
                fontSize: '1.1rem',
                fontWeight: 600,
                marginBottom: '0.5rem'
              }}>
                "Systems designed right the first time, projects managed efficiently, 
                and installations that last."
              </div>
              <div style={{ 
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.9rem'
              }}>
                — Harold Vaughn, Founder & Master Plumber
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #1a2332 0%, #2d3e50 100%)',
        color: '#fff'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              marginBottom: '1rem',
              letterSpacing: '-1px'
            }}>
              Why Partner With Us
            </h2>
            <p style={{ 
              fontSize: '1.15rem',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Vaughn Plumbing Services delivers what 30 years of experience makes possible
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: Award,
                title: 'Proven Expertise',
                description: '30 years of master plumber experience across commercial and residential projects. We\'ve solved complex challenges hundreds of times.'
              },
              {
                icon: Star,
                title: 'MBE Certified',
                description: 'Maryland MBE-certified business helping contractors and corporations meet diversity goals while delivering exceptional quality.'
              },
              {
                icon: Building2,
                title: 'Full-Service Capability',
                description: 'From initial design and project management through excavation and complete installation—we handle every phase.'
              },
              {
                icon: Users,
                title: 'Union Standards',
                description: 'Union-trained craftsmanship and prevailing wage expertise. You get recognized quality standards and government contracting knowledge.'
              },
              {
                icon: Wrench,
                title: 'Commercial & Residential',
                description: 'Equally comfortable with multi-story office buildings and historic Baltimore row homes. Versatility backed by decades of execution.'
              },
              {
                icon: CheckCircle,
                title: 'Reliability & Trust',
                description: 'Owner-operated business with personal accountability. Harold is on every project, ensuring quality and communication.'
              }
            ].map((item, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid rgba(217, 119, 64, 0.2)',
                transition: 'transform 0.3s, border-color 0.3s'
              }}>
                <item.icon size={40} color="#D97740" style={{ marginBottom: '1rem' }} />
                <h3 style={{ 
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  marginBottom: '0.75rem'
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.7,
                  fontSize: '1rem'
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '6rem 2rem',
        background: '#fafaf8'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              display: 'inline-block',
              background: '#D97740',
              color: '#fff',
              padding: '0.5rem 1.5rem',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '1px',
              marginBottom: '1rem'
            }}>
              GET IN TOUCH
            </div>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: '#1a2332',
              marginBottom: '1rem',
              letterSpacing: '-1px'
            }}>
              Start Your Project Today
            </h2>
            <p style={{ 
              fontSize: '1.15rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Whether you need a consultation, estimate, or emergency service, 
              we're ready to help.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem'
          }}>
            {/* Contact Info */}
            <div>
              <h3 style={{ 
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#1a2332',
                marginBottom: '2rem'
              }}>
                Contact Information
              </h3>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'start',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    background: '#D97740',
                    padding: '0.75rem',
                    borderRadius: '8px'
                  }}>
                    <Phone size={24} color="#fff" />
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: 600,
                      color: '#1a2332',
                      marginBottom: '0.25rem'
                    }}>Phone</div>
                    <a href="tel:+14105551234" style={{ 
                      color: '#666',
                      textDecoration: 'none',
                      fontSize: '1.1rem'
                    }}>(410) 555-1234</a>
                    <div style={{ 
                      fontSize: '0.85rem',
                      color: '#999',
                      marginTop: '0.25rem'
                    }}>24/7 Emergency Available</div>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex',
                  alignItems: 'start',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    background: '#D97740',
                    padding: '0.75rem',
                    borderRadius: '8px'
                  }}>
                    <Mail size={24} color="#fff" />
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: 600,
                      color: '#1a2332',
                      marginBottom: '0.25rem'
                    }}>Email</div>
                    <a href="mailto:harold@vaughnplumbing.com" style={{ 
                      color: '#666',
                      textDecoration: 'none',
                      fontSize: '1.1rem'
                    }}>harold@vaughnplumbing.com</a>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex',
                  alignItems: 'start',
                  gap: '1rem'
                }}>
                  <div style={{
                    background: '#D97740',
                    padding: '0.75rem',
                    borderRadius: '8px'
                  }}>
                    <MapPin size={24} color="#fff" />
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: 600,
                      color: '#1a2332',
                      marginBottom: '0.25rem'
                    }}>Service Area</div>
                    <div style={{ color: '#666', fontSize: '1.1rem' }}>
                      Baltimore City<br/>
                      Baltimore County<br/>
                      Anne Arundel County
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                background: '#1a2332',
                color: '#fff',
                padding: '1.5rem',
                borderRadius: '8px',
                marginTop: '2rem'
              }}>
                <div style={{ 
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  fontSize: '1.1rem'
                }}>
                  Business Hours
                </div>
                <div style={{ 
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.95rem',
                  lineHeight: 1.8
                }}>
                  Monday - Friday: 8:00 AM - 6:00 PM<br/>
                  Saturday: 9:00 AM - 4:00 PM<br/>
                  Sunday: Emergency Service Only<br/>
                  <span style={{ color: '#D97740', fontWeight: 600 }}>
                    24/7 Emergency Service Available
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{
              background: '#fff',
              padding: '2.5rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid #e5e5e0'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#1a2332',
                marginBottom: '1.5rem'
              }}>
                Request a Consultation
              </h3>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ 
                    display: 'block',
                    fontWeight: 600,
                    color: '#1a2332',
                    marginBottom: '0.5rem',
                    fontSize: '0.95rem'
                  }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '2px solid #e5e5e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#D97740'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e5e0'}
                  />
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ 
                    display: 'block',
                    fontWeight: 600,
                    color: '#1a2332',
                    marginBottom: '0.5rem',
                    fontSize: '0.95rem'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '2px solid #e5e5e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#D97740'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e5e0'}
                  />
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ 
                    display: 'block',
                    fontWeight: 600,
                    color: '#1a2332',
                    marginBottom: '0.5rem',
                    fontSize: '0.95rem'
                  }}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '2px solid #e5e5e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#D97740'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e5e0'}
                  />
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ 
                    display: 'block',
                    fontWeight: 600,
                    color: '#1a2332',
                    marginBottom: '0.5rem',
                    fontSize: '0.95rem'
                  }}>
                    Project Type *
                  </label>
                  <select
                    required
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '2px solid #e5e5e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s',
                      outline: 'none',
                      background: '#fff'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#D97740'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e5e0'}
                  >
                    <option value="">Select project type...</option>
                    <option value="commercial">Commercial Project</option>
                    <option value="residential">Residential Project</option>
                    <option value="design">Design/Project Management</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="training">Training/Apprenticeship</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ 
                    display: 'block',
                    fontWeight: 600,
                    color: '#1a2332',
                    marginBottom: '0.5rem',
                    fontSize: '0.95rem'
                  }}>
                    Project Details
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '2px solid #e5e5e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s',
                      outline: 'none',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#D97740'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e5e0'}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: '#D97740',
                    color: '#fff',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = '#c86834';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = '#D97740';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Send Request
                  <CheckCircle size={20} />
                </button>

                <div style={{
                  marginTop: '1rem',
                  fontSize: '0.85rem',
                  color: '#999',
                  textAlign: 'center'
                }}>
                  We typically respond within 24 hours
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1a2332',
        color: '#fff',
        padding: '3rem 2rem 2rem',
        borderTop: '3px solid #D97740'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem'
          }}>
            <div>
              <div style={{ 
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '0.5rem'
              }}>
                VAUGHN PLUMBING
              </div>
              <div style={{ 
                fontSize: '0.85rem',
                color: '#D97740',
                letterSpacing: '2px',
                fontWeight: 600,
                marginBottom: '1rem'
              }}>
                SERVICES, LLC
              </div>
              <p style={{ 
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
                fontSize: '0.95rem'
              }}>
                Maryland MBE-certified plumbing contractor with 30 years of 
                union-trained master plumber expertise.
              </p>
            </div>

            <div>
              <h4 style={{ 
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '1rem'
              }}>
                Services
              </h4>
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                {['Commercial Plumbing', 'Residential Plumbing', 'Design & Project Management', 
                  'Excavation Services', 'Apprentice Training'].map(service => (
                  <div key={service} style={{ 
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.95rem'
                  }}>{service}</div>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ 
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '1rem'
              }}>
                Contact
              </h4>
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <a href="tel:+14105551234" style={{ 
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s'
                }}>
                  (410) 555-1234
                </a>
                <a href="mailto:harold@vaughnplumbing.com" style={{ 
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s'
                }}>
                  harold@vaughnplumbing.com
                </a>
                <div style={{ 
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.95rem'
                }}>
                  4900 Truesdale Ave<br/>
                  Baltimore, MD 21206
                </div>
              </div>
            </div>
          </div>

          <div style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ 
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.85rem'
            }}>
              © 2026 Vaughn Plumbing Services, LLC. All rights reserved.
            </div>
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ 
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.85rem'
              }}>
                Maryland Licensed Master Plumber
              </div>
              <div style={{ 
                color: '#D97740',
                fontSize: '0.85rem',
                fontWeight: 600
              }}>
                • MBE Certified
              </div>
              <div style={{ 
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.85rem'
              }}>
                • Union Trained
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}