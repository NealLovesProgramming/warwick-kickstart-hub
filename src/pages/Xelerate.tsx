import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Rocket, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";

const Xelerate = () => {
  const programFeatures = [
    {
      icon: Rocket,
      title: "Real-World Consulting",
      description: "Work directly with clients on live business challenges and deliver impactful solutions.",
      benefits: [
        "Hands-on project experience",
        "Client presentation opportunities",
        "Professional deliverables portfolio",
      ],
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Join high-performing teams and learn from peers and mentors in a supportive environment.",
      benefits: [
        "Cross-functional team projects",
        "Peer learning sessions",
        "Mentorship from alumni",
      ],
    },
    {
      icon: TrendingUp,
      title: "Skill Development",
      description: "Build essential consulting skills through structured training and practical application.",
      benefits: [
        "Strategic thinking workshops",
        "Data analysis training",
        "Professional communication coaching",
      ],
    },
  ];

  return (
    <PageLayout>
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
              Xelerate Program
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Our flagship consulting and development program designed to accelerate your 
              professional growth through real-world experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Upcoming Event</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <motion.div 
                className="rounded-2xl overflow-hidden shadow-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img 
                  src="/xelerate-event.jpg" 
                  alt="Startup Career Insights Panel at The Shard"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-gradient-primary-soft rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4">Time & Location</h3>
                  <p className="text-xl font-semibold text-primary mb-3">February 2025</p>
                  <p className="text-foreground/80 leading-relaxed">
                    The Shard, London<br />
                    32 London Bridge St, London SE1 9SG, UK
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">About the Event</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Xelerate is all about innovation and creativity sans limits. Hosted at The Shard, London, in partnership with the University of Warwick - Warwick Business School, the event commenced with an engaging networking session, leading on the series of presentations from the participants.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Designed to foster entrepreneurship and innovation among students, the program offers a comprehensive pathway for budding entrepreneurs through workshops and training on essential business topics, mentorship from experienced professionals, and numerous networking opportunities with industry leaders. Xelerate builds a supportive community, empowering students to transform their innovative ideas into successful businesses and contributing to the broader entrepreneurial ecosystem.
                  </p>
                </div>

                <div className="mt-8">
                  <Link to="/xelerate/apply">
                    <Button size="lg" className="shadow-elegant">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="rounded-2xl overflow-hidden shadow-card h-96"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540831038835!2d-0.08877492346208774!3d51.50454397181546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603596a19b1c7%3A0xe78df6a39f2ee70b!2sThe%20Shard!5e0!3m2!1sen!2suk!4v1709735423891!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Shard Location"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Xelerate;
