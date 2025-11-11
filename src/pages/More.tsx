import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Mail, Newspaper } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const More = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const upcomingEvents = [
    {
      title: "A Women in Kickstart event with Rewrite The Code",
      date: "November 18, 2025",
      description: "",
    },
    {
      title: "Xelerate Programme Launch Event",
      date: "November 27, 2025",
      description: "5 to 7 pm",
    },
    {
      title: "Who wants to be a CEO event?",
      date: "December 4, 2025",
      description: "2 to 7 pm",
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive updates about Warwick Kickstart events and opportunities.",
      });
      setEmail("");
    }
  };

  return (
    <PageLayout>
      <section className="py-20 bg-gradient-primary-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Events & Updates</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay connected with upcoming events, news, and opportunities from Warwick Kickstart.
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
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Calendar className="text-primary" />
              Upcoming Events
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-card transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <p className="text-sm text-primary font-semibold">{event.date}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{event.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-primary-soft rounded-2xl p-8 sm:p-12"
          >
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-primary-foreground" size={28} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter for the latest updates on events, programs, 
                and opportunities at Warwick Kickstart.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow"
                />
                <Button type="submit" size="lg">
                  Subscribe
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Newspaper className="text-primary" />
              Recent News
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Kickstart Celebrates 50th Project Milestone",
                  date: "October 2, 2025",
                  excerpt: "We're proud to announce the completion of our 50th consulting project, marking a significant milestone in our organization's impact.",
                },
                {
                  title: "New Partnership with AlphaSights Announced",
                  date: "August 16, 2025",
                  excerpt: "Exciting news as we formalize our strategic partnership with AlphaSights, bringing enhanced opportunities for our members.",
                },
                {
                  title: "Xelerate Winter Cohort Achieves Outstanding Results",
                  date: "September 28, 2025",
                  excerpt: "Our latest Xelerate cohort delivered exceptional results across all projects, receiving outstanding feedback from clients.",
                },
              ].map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-card transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{news.title}</h3>
                        <span className="text-sm text-primary font-semibold">{news.date}</span>
                      </div>
                      <p className="text-muted-foreground">{news.excerpt}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default More;
