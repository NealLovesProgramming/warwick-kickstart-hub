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
            className="text-center mt-12"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Accelerate Your Growth?</h3>
            <p className="text-muted-foreground mb-6">
              Applications for the next cohort open soon. Stay tuned for updates.
            </p>
            <Link to="/more">
              <Button size="lg" className="shadow-elegant">
                Join Our Mailing List
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Xelerate;
