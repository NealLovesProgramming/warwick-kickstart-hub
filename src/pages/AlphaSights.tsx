import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Briefcase, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const AlphaSights = () => {
  const partnershipBenefits = [
    {
      icon: Award,
      title: "Exclusive Mentorship",
      description: "Direct access to AlphaSights professionals for guidance and career advice.",
    },
    {
      icon: Users,
      title: "Networking Events",
      description: "Regular workshops and networking sessions with industry experts.",
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description: "Priority consideration for internships and full-time positions.",
    },
    {
      icon: TrendingUp,
      title: "Skill Development",
      description: "Specialized training in expert network research and client engagement.",
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
              AlphaSights Partnership
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
              A strategic collaboration bringing world-class professional development 
              and career opportunities to Warwick Kickstart members.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">About AlphaSights</h2>
            <div className="max-w-3xl mx-auto text-muted-foreground text-center mb-8">
              <p className="mb-4">
                AlphaSights is a leading global knowledge-on-demand company that connects investment 
                and business leaders with expert knowledge to inform critical decisions and build 
                conviction.
              </p>
              <p>
                Through our partnership, Kickstart members gain unprecedented access to professional 
                development resources, industry insights, and career pathways in consulting and beyond.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-card transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="text-primary-foreground" size={24} />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
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
            <h2 className="text-3xl font-bold mb-6">Partnership Highlights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Mentorship Program</h3>
                <p className="text-muted-foreground mb-4">
                  Selected Kickstart members are paired with AlphaSights mentors for personalized 
                  career guidance and professional development throughout the academic year.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Industry Workshops</h3>
                <p className="text-muted-foreground mb-4">
                  Quarterly workshops covering topics like expert interviewing, client management, 
                  and professional communication skills led by AlphaSights team members.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Case Competitions</h3>
                <p className="text-muted-foreground mb-4">
                  Annual case competition with real-world scenarios, judged by AlphaSights 
                  professionals, with prizes and recruitment opportunities for top performers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Fast-Track Recruitment</h3>
                <p className="text-muted-foreground mb-4">
                  Outstanding Kickstart members receive priority consideration for AlphaSights 
                  internship and graduate positions, with dedicated recruitment support.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <h3 className="text-2xl font-bold mb-4">Interested in Learning More?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join Kickstart to take advantage of this exclusive partnership and accelerate 
              your professional journey.
            </p>
            <Button size="lg" className="shadow-elegant" asChild>
              <a href="https://www.alphasights.com" target="_blank" rel="noopener noreferrer">
                Visit AlphaSights
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AlphaSights;
