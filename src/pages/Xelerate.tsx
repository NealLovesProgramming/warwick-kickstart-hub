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
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {programFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="text-primary-foreground" size={24} />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-primary-soft rounded-2xl p-8 sm:p-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Program Timeline</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { phase: "Week 1-2", title: "Onboarding", desc: "Training and team formation" },
                { phase: "Week 3-8", title: "Project Work", desc: "Active consulting engagement" },
                { phase: "Week 9-10", title: "Delivery", desc: "Client presentations and handover" },
                { phase: "Week 11-12", title: "Reflection", desc: "Feedback and skill assessment" },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold mb-1">{phase.phase}</h3>
                  <p className="text-sm font-medium text-primary mb-1">{phase.title}</p>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Event</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              <div className="rounded-xl overflow-hidden shadow-card">
                <img 
                  src="/xelerate-event.jpg" 
                  alt="Startup Career Insights Panel at The Shard"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Time & Location</h3>
                  <p className="text-lg font-semibold text-primary mb-2">February 2025</p>
                  <p className="text-muted-foreground">
                    The Shard, London<br />
                    32 London Bridge St, London SE1 9SG, UK
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">About the Event</h3>
                  <p className="text-muted-foreground mb-4">
                    Xelerate is all about innovation and creativity sans limits. Hosted at The Shard, London, in partnership with the University of Warwick - Warwick Business School, the event commenced with an engaging networking session, leading on the series of presentations from the participants.
                  </p>
                  <p className="text-muted-foreground">
                    Designed to foster entrepreneurship and innovation among students, the program offers a comprehensive pathway for budding entrepreneurs through workshops and training on essential business topics, mentorship from experienced professionals, and numerous networking opportunities with industry leaders. Xelerate builds a supportive community, empowering students to transform their innovative ideas into successful businesses and contributing to the broader entrepreneurial ecosystem.
                  </p>
                </div>

                <Link to="/xelerate/apply">
                  <Button size="lg" className="shadow-elegant w-full md:w-auto">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-card h-96">
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
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Xelerate;
