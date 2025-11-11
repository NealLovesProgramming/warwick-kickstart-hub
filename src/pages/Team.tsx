import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const Team = () => {
  const teamMembers = [
    {
      name: "Aditya Patel",
      role: "President",
      image: "/team/aditya.jpg",
    },
    {
      name: "Nandini Agarwal",
      role: "Vice President",
      image: "/team/nandini.jpg",
    },
    {
      name: "Shriman Nagappan",
      role: "Chairman",
      image: "/team/shriman.jpg",
    },
    {
      name: "Angel Owusu",
      role: "Secretary",
      image: "/team/angel.jpg",
    },
    {
      name: "Shreeyansh Dey",
      role: "Secretary",
      image: "/team/shreeyansh.jpg",
    },
    {
      name: "Neal Batra",
      role: "Head of Technology",
      image: "/team/neal.jpg",
    },
  ];

  return (
    <PageLayout>
      <section className="py-20 bg-gradient-primary-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our executive committee brings together diverse talents and expertise to 
              drive Warwick Kickstart's mission forward.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-card transition-all duration-300 group">
                  <div className="aspect-square bg-gradient-primary-soft relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-primary opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-primary-foreground">
                        <div className="w-24 h-24 bg-primary-foreground/20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold">
                          {member.name.charAt(0)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
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
            className="mt-16 text-center bg-gradient-primary-soft rounded-2xl p-8 sm:p-12"
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our executive committee. 
              Applications open at the start of each academic year.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;
