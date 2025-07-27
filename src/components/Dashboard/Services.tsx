import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Palette, PenTool, Megaphone, TrendingUp, Edit } from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: Code,
    price: "$75/hour",
    category: "Development",
    status: "Active",
    description: "Full-stack web development using modern technologies like React, Node.js, and TypeScript.",
    skills: ["React", "TypeScript", "Node.js", "Database Design"],
    completedProjects: 25,
    rating: 4.9,
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    price: "$65/hour",
    category: "Design",
    status: "Active",
    description: "User-centered design solutions for web and mobile applications.",
    skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
    completedProjects: 18,
    rating: 4.8,
  },
  {
    title: "Content Writing",
    icon: PenTool,
    price: "$45/hour",
    category: "Writing",
    status: "Active",
    description: "SEO-optimized content creation for blogs, websites, and marketing materials.",
    skills: ["SEO Writing", "Blog Posts", "Technical Writing", "Copywriting"],
    completedProjects: 32,
    rating: 4.9,
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    price: "$55/hour",
    category: "Marketing",
    status: "Paused",
    description: "Comprehensive digital marketing strategies including social media and PPC campaigns.",
    skills: ["Social Media", "PPC", "Analytics", "Content Strategy"],
    completedProjects: 12,
    rating: 4.7,
  },
];

const serviceStats = {
  totalEarnings: "$48,750",
  activeServices: 3,
  totalProjects: 87,
  avgRating: 4.8,
};

export const Services = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-card-foreground mb-2">Services</h2>
          <p className="text-muted-foreground">Manage your service offerings and track performance.</p>
        </div>
        <Button>
          Add New Service
        </Button>
      </div>

      {/* Service Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Earnings</p>
                <p className="text-2xl font-bold text-card-foreground">{serviceStats.totalEarnings}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Services</p>
                <p className="text-2xl font-bold text-card-foreground">{serviceStats.activeServices}</p>
              </div>
              <Code className="h-8 w-8 text-info" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
                <p className="text-2xl font-bold text-card-foreground">{serviceStats.totalProjects}</p>
              </div>
              <Palette className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
                <p className="text-2xl font-bold text-card-foreground">{serviceStats.avgRating}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary rounded-lg">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-card-foreground">
                        {service.title}
                      </CardTitle>
                      <div className="flex items-center gap-3 mt-1">
                        <Badge variant="secondary">{service.category}</Badge>
                        <Badge 
                          variant={service.status === "Active" ? "default" : "secondary"}
                          className={service.status === "Active" ? "bg-success" : "bg-warning"}
                        >
                          {service.status}
                        </Badge>
                        <span className="text-lg font-bold text-card-foreground">{service.price}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-medium text-card-foreground mb-2">Skills</p>
                    <div className="flex flex-wrap gap-1">
                      {service.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-card-foreground">Projects Completed</p>
                    <p className="text-lg font-semibold text-muted-foreground">{service.completedProjects}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-card-foreground">Rating</p>
                    <p className="text-lg font-semibold text-muted-foreground">★ {service.rating}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};