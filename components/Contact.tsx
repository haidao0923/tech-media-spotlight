
import React, { useState, useEffect } from 'react';
import { Send, Mail, User, MessageSquare, ArrowLeft, Loader2, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    document.title = "Contact Us | Tech Media Spotlight";
  }, []);

  // TODO: Replace these with your actual EmailJS credentials
  const SERVICE_ID = 'service_atdncm5';
  const TEMPLATE_ID = 'template_i7ko30h';
  const PUBLIC_KEY = 'Wj1wGSlJqR_HvHw2U';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name_from: formData.name,
          email_from: formData.email,
          message: formData.message
        },
        PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button
        onClick={() => navigate('/')}
        className="mb-8 flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors"
      >
        <ArrowLeft size={20} /> Back to Feed
      </button>

      <div className="bg-tech-surface/30 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12 shadow-[0_0_50px_-12px_rgba(0,243,255,0.1)]">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 brand-font">Get in Touch</h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Have a scoop on the latest tech? Want to collaborate or just say hi?
            Send us a message directly.
          </p>
        </div>

        {status === 'success' ? (
          <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
            <p className="text-gray-400 mb-8">Thanks for reaching out. We'll get back to you shortly.</p>
            <button
              onClick={() => setStatus('idle')}
              className="text-neon-cyan hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
            {/* Name Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-500 group-focus-within:text-neon-cyan transition-colors" />
              </div>
              <input
                type="text"
                name="name"
                required
                disabled={status === 'sending'}
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="block w-full pl-10 pr-3 py-3 bg-black/40 border border-white/10 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-transparent text-white placeholder-gray-500 transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Email Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-neon-cyan transition-colors" />
              </div>
              <input
                type="email"
                name="email"
                required
                disabled={status === 'sending'}
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="block w-full pl-10 pr-3 py-3 bg-black/40 border border-white/10 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-transparent text-white placeholder-gray-500 transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Message Input */}
            <div className="relative group">
              <div className="absolute top-3 left-3 pointer-events-none">
                <MessageSquare className="h-5 w-5 text-gray-500 group-focus-within:text-neon-cyan transition-colors" />
              </div>
              <textarea
                name="message"
                required
                rows={5}
                disabled={status === 'sending'}
                value={formData.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="block w-full pl-10 pr-3 py-3 bg-black/40 border border-white/10 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-transparent text-white placeholder-gray-500 transition-all outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg text-sm">
                <XCircle size={16} />
                Failed to send message. Please check your connection or configuration.
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex justify-center items-center gap-2 py-4 px-6 border border-transparent rounded-lg text-lg font-bold text-black bg-neon-cyan hover:bg-white disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed disabled:shadow-none transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transform hover:-translate-y-1 disabled:transform-none"
            >
              {status === 'sending' ? (
                <>Sending <Loader2 size={20} className="animate-spin" /></>
              ) : (
                <>Send Message <Send size={20} /></>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
