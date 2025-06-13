import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://linkedin.com/in/utkarsh-singh10',
    color: 'text-blue-600 dark:text-blue-400',
    hoverColor: 'hover:text-blue-700 dark:hover:text-blue-300',
  },
  {
    name: 'GitHub',
    icon: faGithub,
    url: 'https://github.com/Utkarshsingh112',
    color: 'text-gray-900 dark:text-gray-100',
    hoverColor: 'hover:text-gray-700 dark:hover:text-gray-300',
  },
  {
    name: 'X',
    icon: faXTwitter,
    url: 'https://x.com/@_Utkarsh_002',
    color: 'text-black dark:text-white',
    hoverColor: 'hover:text-gray-700 dark:hover:text-gray-300',
  },
];

const contactInfo = [
  {
    icon: faEnvelope,
    text: 'utkarshsinghrajawat12@gmail.com',
    link: 'mailto:utkarshsinghrajawat12@gmail.com',
    iconColor: 'text-[#D44638] dark:text-[#EA4335]',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    hoverBgColor: 'group-hover:bg-red-100 dark:group-hover:bg-red-900/30',
    hoverTextColor: 'group-hover:text-[#EA4335] dark:group-hover:text-[#EA4335]',
  },
  {
    icon: faPhone,
    text: '+91 9351571387',
    link: 'tel:+919351571387',
    iconColor: 'text-[#25D366] dark:text-[#25D366]',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    hoverBgColor: 'group-hover:bg-green-100 dark:group-hover:bg-green-900/30',
    hoverTextColor: 'group-hover:text-[#128C7E] dark:group-hover:text-[#128C7E]',
  },
  {
    icon: faMapMarkerAlt,
    text: 'Jaipur,Rajasthan,India',
    link: 'https://maps.google.com/?q=Jaipur,India',
    iconColor: 'text-[#4285F4] dark:text-[#4285F4]',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    hoverBgColor: 'group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30',
    hoverTextColor: 'group-hover:text-[#1a73e8] dark:group-hover:text-[#1a73e8]',
  },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const form = e.target;
      console.log('Submitting form to:', form.action); // Debug log
      
      const formData = new FormData(form);
      console.log('Form data:', Object.fromEntries(formData)); // Debug log

      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      console.log('Response status:', response.status); // Debug log
      const responseData = await response.text();
      console.log('Response data:', responseData); // Debug log

      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        throw new Error(`Failed to send message: ${response.status} ${responseData}`);
      }
    } catch (error) {
      console.error('Detailed error:', error); // Debug log
      setError(`Failed to send message: ${error.message}. Please try again or contact me directly at utkarshsinghrajawat12@gmail.com`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-12 rounded-3xl mx-4 my-2 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      </div>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 mx-auto bg-primary-500 dark:bg-primary-400 rounded-full mb-4" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always excited to connect with fellow developers and explore new opportunities. 
            Whether you have a project in mind or just want to chat about tech, feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:shadow-md"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`w-12 h-12 rounded-xl ${info.bgColor} ${info.hoverBgColor} flex items-center justify-center transition-colors duration-300`}>
                        <FontAwesomeIcon 
                          icon={info.icon} 
                          className={`w-5 h-5 ${info.iconColor} ${info.hoverTextColor} transition-colors duration-300`} 
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium text-gray-600 dark:text-gray-300 ${info.hoverTextColor} transition-colors duration-300 truncate`}>
                          {info.text}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Connect With Me
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-white dark:bg-gray-700 shadow-lg flex items-center justify-center ${social.color} ${social.hoverColor} transition-all duration-300 hover:shadow-xl hover:scale-110`}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FontAwesomeIcon icon={social.icon} className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <form 
                action="https://formsubmit.co/3408dccc507f2a387563594c1515ef62"
                method="POST"
                onSubmit={handleSubmit}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 space-y-6"
              >
                {/* Add subject field */}
                <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
                
                {/* Existing honeypot and other hidden fields */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={window.location.href} />
                
                {/* Add template ID for better formatting */}
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-sm">{error}</div>
                )}

                {success && (
                  <div className="text-green-500 text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                >
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 