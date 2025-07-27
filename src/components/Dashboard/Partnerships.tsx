import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, Star, Users, ArrowRight } from "lucide-react";

const partnerships = [
  {
    company: "TechCorp Solutions",
    type: "Technology Partner",
    status: "Active",
    projects: 12,
    rating: 4.8,
    description: "Leading technology company specializing in enterprise software solutions.",
    benefits: ["Priority project access", "Higher rates", "Dedicated support"],
  },
  {
    company: "Creative Studios Inc",
    type: "Design Partner",
    status: "Active",
    projects: 8,
    rating: 4.9,
    description: "Award-winning creative agency working with global brands.",
    benefits: ["Creative freedom", "Brand exposure", "Networking opportunities"],
  },
  {
    company: "StartupHub Accelerator",
    type: "Startup Partner",
    status: "Pending",
    projects: 0,
    rating: 4.7,
    description: "Accelerator program connecting freelancers with promising startups.",
    benefits: ["Equity opportunities", "Skill development", "Mentorship access"],
  },
];

const opportunities = [
  {
    title: "Enterprise Partnership Program",
    company: "MegaCorp International",
    type: "Long-term Contract",
    value: "$50k - $100k annually",
    deadline: "Applications close in 5 days",
  },
  {
    title: "Creative Collective Partnership",
    company: "Artisan Networks",
    type: "Revenue Share",
    value: "15-25% commission",
    deadline: "Rolling applications",
  },
];

export const Partnerships = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-card-foreground mb-2">Partnerships</h2>
        <p className="text-muted-foreground">Manage your partnerships and explore new collaboration opportunities.</p>
      </div>

      {/* Active Partnerships */}
      <section>
        <h3 className="text-xl font-semibold text-card-foreground mb-4">Current Partnerships</h3>
        <div className="grid gap-6">
          {partnerships.map((partnership, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-lg">
                      <Building className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-card-foreground">
                        {partnership.company}
                      </CardTitle>
                      <p className="text-muted-foreground">{partnership.type}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={partnership.status === "Active" ? "default" : "secondary"}
                    className={partnership.status === "Active" ? "bg-success" : "bg-warning"}
                  >
                    {partnership.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{partnership.description}</p>
                
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {partnership.projects} projects completed
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-warning fill-current" />
                    <span className="text-sm text-muted-foreground">
                      {partnership.rating} rating
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-card-foreground">Partnership Benefits:</h4>
                  <ul className="space-y-1">
                    {partnership.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-info rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section>
        <h3 className="text-xl font-semibold text-card-foreground mb-4">New Opportunities</h3>
        <div className="grid gap-4">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-card-foreground mb-1">{opportunity.title}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{opportunity.company}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <Badge variant="secondary">{opportunity.type}</Badge>
                      <span className="text-success font-medium">{opportunity.value}</span>
                      <span className="text-muted-foreground">{opportunity.deadline}</span>
                    </div>
                  </div>
                  <Button className="ml-4">
                    Apply <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};