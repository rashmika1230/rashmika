import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactForm>({
    mode: 'onChange',
    defaultValues: { name: '', email: '', message: '' },
  });

  // Simple form submission - replace with your actual endpoint
 const CLIENT_FORWARD_ENDPOINT = 'https://discord.com/api/webhooks/1414657112528650310/yO0z3uDDoSR-2qdo3kzgGGs8IUqB9xBXXu70ZFUAeLWKdJyobuxV4entvKz2zEjKuTQv'; // server endpoint that forwards to Discord

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      // Prepare nice payload for Discord (or your backend)
      const payload = {
        content:
          `**New message from website**\n**Name:** ${data.name}\n**Email:** ${data.email}\n\n**Message:**\n${data.message}`,
      };

      // Send to your server endpoint that forwards to Discord
      const res = await fetch(CLIENT_FORWARD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Server responded ${res.status}`);
      }

      toast({
        title: 'Message Sent!',
        description: "Thanks — I'll get back to you as soon as I can.",
      });

      reset();
    } catch (error) {
      console.error('Submit error:', error);
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'rashmmika6145@gmail.com',
      href: 'mailto:rashmmika6145@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+94 75 618 4341',
      href: 'tel:+94756184341',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rashmika-lakshan-97247a369/',
      href: 'https://www.linkedin.com/in/rashmika-lakshan-97247a369/',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/rashmika1230',
      href: 'https://github.com/rashmika1230',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a project in mind, want to discuss opportunities,
                or just want to say hello, I'd love to hear from you. Feel free to
                reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-card rounded-lg hover:bg-card/80 transition-all duration-300 group cursor-pointer border border-transparent hover:border-primary/20"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <contact.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {contact.label}
                    </p>
                    <p className="text-muted-foreground text-sm">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20"
            >
              <h4 className="font-semibold text-primary mb-2">Quick Response</h4>
              <p className="text-muted-foreground text-sm">
                I typically respond to messages within 24 hours. For urgent matters,
                feel free to reach out via phone or LinkedIn.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 shadow-elegant border border-border/50"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>

            <form onSubmit={handleSubmit(onSubmit)} aria-label="Contact form" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">Your Name</label>
                <Input
                  id="name"
                  {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Too short' } })}
                  placeholder="Your Name"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  className="bg-background/50 border-border focus:border-primary transition-all duration-300"
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="sr-only" htmlFor="email">Your Email</label>
                <Input
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' },
                  })}
                  type="email"
                  placeholder="Your Email"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  className="bg-background/50 border-border focus:border-primary transition-all duration-300"
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="sr-only" htmlFor="message">Your Message</label>
                <Textarea
                  id="message"
                  {...register('message', { required: 'Message is required', minLength: { value: 5, message: 'Too short' } })}
                  placeholder="Your Message"
                  rows={5}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  className="bg-background/50 border-border focus:border-primary transition-all duration-300 resize-none"
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg shadow-glow transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, type: 'tween', ease: 'linear' }}
                    className="mr-2"
                  >
                    <FaPaperPlane size={16} />
                  </motion.div>
                ) : (
                  <FaPaperPlane className="mr-2" size={16} />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;