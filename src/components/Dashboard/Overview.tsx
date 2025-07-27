import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Users, Clock, Briefcase } from "lucide-react";

const stats = [
  {
    title: "Total Earnings",
    value: "$12,450",
    change: "+15%",
    icon: DollarSign,
    trend: "up",
  },
  {
    title: "Active Projects",
    value: "8",
    change: "+2",
    icon: Briefcase,
    trend: "up",
  },
  {
    title: "Client Rating",
    value: "4.9",
    change: "+0.1",
    icon: Users,
    trend: "up",
  },
  {
    title: "Hours This Month",
    value: "142",
    change: "+18",
    icon: Clock,
    trend: "up",
  },
];

const recentProjects = [
  { name: "E-commerce Website", client: "TechCorp", status: "In Progress", amount: "$2,500" },
  { name: "Mobile App Design", client: "StartupXYZ", status: "Review", amount: "$1,800" },
  { name: "Brand Identity", client: "CreativeCo", status: "Completed", amount: "$1,200" },
];

export const Overview = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-card-foreground mb-2">Welcome back!</h2>
        <p className="text-muted-foreground">Here's what's happening with your freelance business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="shadow-soft hover:shadow-elegant transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
                <div className="flex items-center mt-1">
                  <Badge variant="secondary" className="text-success">
                    {stat.change}
                  </Badge>
                  <span className="text-xs text-muted-foreground ml-2">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Projects */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-card-foreground">Recent Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentProjects.map((project, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div>
                  <h3 className="font-medium text-card-foreground">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.client}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={project.status === "Completed" ? "bg-success" : ""}
                  >
                    {project.status}
                  </Badge>
                  <span className="font-semibold text-card-foreground">{project.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};