import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import LiquidGlassBackground from "./LiquidGlassBackground";

export default function Contact() {
  const form = useRef();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_EMAIL, import.meta.env.VITE_EMAIL_TEMPLATE, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again.", error.text);
        }
      );
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 7986104250",
      link: "tel:+917986104250"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "mk3705200@gmail.com",
      link: "mailto:mk3705200@gmail.com"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "New Delhi, India",
      link: "#"
    }
  ];

  return (
    <div className="flex w-full">
      <main className="flex-1 w-full">
        <section className="contact-section w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" id="contact">
          <div className="contact-container max-w-7xl mx-auto">
            <motion.div
              className="contact-header text-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="contact-title text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
              <p className="contact-subtitle text-lg sm:text-xl text-gray-300">
                Let's discuss your next project and bring your ideas to life
              </p>
            </motion.div>

            <div className="contact-content grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" ref={ref}>
              {/* Contact Information */}
              <motion.div
                className="contact-info-section"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Contact Information</h3>
                <div className="contact-info-grid space-y-4 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      className="contact-info-card bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-4 sm:p-6 rounded-2xl border border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="contact-icon w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <div className="text-white">
                          {info.icon}
                        </div>
                      </div>
                      <div className="contact-details">
                        <h4 className="text-white font-semibold text-sm sm:text-base">{info.title}</h4>
                        <p className="text-gray-300 text-sm">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  className="contact-cta bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">Ready to Start?</h4>
                  <p className="text-gray-300 text-sm sm:text-base">
                    I'm always open to discussing new projects, creative ideas, or 
                    opportunities to be part of your visions.
                  </p>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.form
                className="contact-form bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-xl"
                ref={form}
                onSubmit={sendEmail}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Send Message</h3>
                
                <motion.div
                  className="form-group mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label htmlFor="name" className="block text-white font-semibold mb-2 text-sm sm:text-base">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors duration-300"
                  />
                </motion.div>

                <motion.div
                  className="form-group mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label htmlFor="email" className="block text-white font-semibold mb-2 text-sm sm:text-base">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="reply_to"
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors duration-300"
                  />
                </motion.div>

                <motion.div
                  className="form-group mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label htmlFor="subject" className="block text-white font-semibold mb-2 text-sm sm:text-base">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project inquiry"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors duration-300"
                  />
                </motion.div>

                <motion.div
                  className="form-group mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <label htmlFor="message" className="block text-white font-semibold mb-2 text-sm sm:text-base">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows="6"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors duration-300 resize-none"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="submit-btn w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
