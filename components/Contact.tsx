
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // We use Formspree's endpoint to "deliver" the email without opening a mail client.
    // Replace with your actual Formspree ID for production usage.
    const endpoint = "https://formspree.io/f/zabbyweekly@gmail.com"; 

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 container mx-auto max-w-5xl scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's <span className="text-gradient">Connect</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Ready to bring your next big idea to life? Reach out and let's start a conversation.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="glass p-8 rounded-3xl space-y-6 border border-slate-800">
          <div>
            <h3 className="text-xl font-semibold mb-2">Direct Contact</h3>
            <p className="text-slate-400">Feel free to drop a message anytime.</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-all">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <span className="text-slate-200">zabbycore@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500/20 transition-all">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <span className="text-slate-200">Atlanta, Georgia, USA</span>
            </div>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl border border-slate-800 relative">
          {status === 'success' ? (
            <div className="text-center py-12 animate-in fade-in zoom-in">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-slate-400 mb-8">Thank you for reaching out. Barbara will get back to you shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-blue-400 font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-slate-100" 
                    placeholder="Jane Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-slate-100" 
                    placeholder="jane@example.com" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-slate-100" 
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Delivering...' : 'Send Message'}
              </button>
              {status === 'error' && (
                <p className="text-red-400 text-sm mt-2 text-center">Something went wrong. Please try again or email directly.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
