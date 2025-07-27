import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";

const newsItems = [
  {
    title: "New Freelancing Opportunities in AI Development",
    excerpt: "The demand for AI developers continues to surge with major companies launching new initiatives...",
    category: "Technology",
    date: "2 hours ago",
    isNew: true,
  },
  {
    title: "Freelancer Protection Act Passes Senate",
    excerpt: "New legislation provides better payment protection and dispute resolution for freelancers...",
    category: "Legal",
    date: "5 hours ago",
    isNew: true,
  },
  {
    title: "Remote Work Trends: What Freelancers Need to Know",
    excerpt: "Latest survey reveals changing client expectations and emerging opportunities in remote collaboration...",
    category: "Industry",
    date: "1 day ago",
    isNew: false,
  },
  {
    title: "Tax Updates for Independent Contractors 2024",
    excerpt: "Important changes to tax deductions and reporting requirements for freelancers this year...",
    category: "Finance",
    date: "2 days ago",
    isNew: false,
  },
  {
    title: "Platform Fee Changes Across Major Freelance Sites",
    excerpt: "Comparative analysis of fee structures and how they impact freelancer earnings...",
    category: "Business",
    date: "3 days ago",
    isNew: false,
  },
];

export const News = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-card-foreground mb-2">Industry News</h2>
        <p className="text-muted-foreground">Stay updated with the latest freelancing industry trends and news.</p>
      </div>

      <div className="grid gap-6">
        {newsItems.map((item, index) => (
          <Card key={index} className="shadow-soft hover:shadow-elegant transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    {item.isNew && <Badge className="bg-info text-white">New</Badge>}
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground hover:text-primary-foreground transition-colors">
                    {item.title}
                  </CardTitle>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{item.excerpt}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {item.date}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};