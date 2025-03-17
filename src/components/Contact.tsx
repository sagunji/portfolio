
import React, { useState } from 'react';
import AnimatedText from './AnimatedText';
import { Mail, MessageSquare, Send, User, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset success message after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent)]"></div>
      
      <div className="section-container">
        <AnimatedText
          text="Get In Touch"
          className="section-title"
          animation="fade-in-up"
          tag="h2"
        />
        
        <AnimatedText
          text="Have a project in mind or just want to say hello? Send me a message and I'll get back to you as soon as possible."
          className="section-subtitle"
          animation="fade-in-up"
          tag="p"
          delay={100}
        />
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div 
            className="opacity-0 animate-fade-in-left"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p className="text-muted-foreground mb-6">
              I'm currently available for freelance work and full-time positions. Let's create something amazing together.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:alex@example.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    alex@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MessageSquare size={20} className="text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Social</h4>
                  <div className="flex flex-col space-y-1 text-muted-foreground">
                    <a 
                      href="#" 
                      className="hover:text-primary transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="#" 
                      className="hover:text-primary transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a 
                      href="#" 
                      className="hover:text-primary transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-secondary/80 rounded-lg">
              <h4 className="font-bold mb-2">Availability</h4>
              <p className="text-sm text-muted-foreground">
                I'm currently available for new projects starting in October 2023. My usual response time is within 24 hours.
              </p>
            </div>
          </div>
          
          <div 
            className="opacity-0 animate-fade-in-right"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 rounded-lg border border-green-200 bg-green-50">
                <CheckCircle2 size={48} className="text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={16} className="text-muted-foreground" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white border border-gray-300 text-foreground py-3 pl-10 pr-4 block w-full rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={16} className="text-muted-foreground" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white border border-gray-300 text-foreground py-3 pl-10 pr-4 block w-full rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare size={16} className="text-muted-foreground" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="bg-white border border-gray-300 text-foreground py-3 pl-10 pr-4 block w-full rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Your message"
                      required
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} /> Send Message
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
