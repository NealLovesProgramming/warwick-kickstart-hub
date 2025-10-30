import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To bridge the gap between academic learning and professional practice by providing students with meaningful consulting experiences.",
    },
    {
      icon: TrendingUp,
      title: "Our Impact",
      description: "Over 100 students trained, 50+ projects delivered, and partnerships with leading organizations across multiple industries.",
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Excellence, innovation, collaboration, and integrity guide everything we do at Warwick Kickstart.",
    },
  ];

  return (
    <PageLayout>
      <section className="py-20 bg-gradient-primary-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Warwick Kickstart</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are Warwick's leading student consulting initiative, dedicated to empowering 
              the next generation of business leaders and innovators through real-world experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-card transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="text-primary-foreground" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
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
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold mb-6">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Student Development</h3>
                <p className="text-muted-foreground">
                  We provide comprehensive training programs that equip students with essential 
                  consulting skills, professional communication, and strategic thinking abilities. 
                  Our workshops and mentorship sessions ensure every member is prepared for success.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Consulting Projects</h3>
                <p className="text-muted-foreground">
                  Our teams work on real consulting projects with actual clients, delivering 
                  high-quality solutions to business challenges. From startups to established 
                  organizations, we help drive meaningful change.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Professional Network</h3>
                <p className="text-muted-foreground">
                  Through our partnerships with industry leaders and alumni network, members 
                  gain access to exclusive networking opportunities, career guidance, and 
                  potential employment pathways.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Community Impact</h3>
                <p className="text-muted-foreground">
                  Beyond business consulting, we're committed to making a positive impact on 
                  our community through pro-bono projects, sustainability initiatives, and 
                  social entrepreneurship support.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
