import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const Team = () => {
  const teamMembers = [
    {
      name: "Nandini Agarwal",
      role: "President",
      image: "/team/nandini.jpg",
    },
    {
      name: "Aditya Patel",
      role: "Vice President",
      image: "/team/aditya.jpg",
    },
    {
      name: "Shriman Nagappan",
      role: "Chairman",
      image: "/team/shreeyansh.jpg",
    },
    {
      name: "Angel Owusu",
      role: "Secretary",
      image: "/team/angel.jpg",
    },
    {
      name: "Shreeyansh Dey",
      role: "Secretary",
      image: "/team/shreeyansh-dey.jpg",
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
                  <div className="aspect-square relative overflow-hidden bg-muted">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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
