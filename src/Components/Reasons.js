import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Reasons.css';

const reasons = [
  {
    title: "Increased Visibility",
    description:
      "A website helps your business become more discoverable by potential customers online, allowing people to find your services 24/7.",
    icon: "🌐",
  },
  {
    title: "Credibility & Trust",
    description:
      "A professional website establishes credibility and builds trust with your audience, giving your business a legitimate online presence.",
    icon: "✅",
  },
  {
    title: "Expand Your Reach",
    description:
      "With a website, you can reach a broader audience beyond your local area and connect with people from all over the world.",
    icon: "🚀",
  },
  {
    title: "Customer Insights",
    description:
      "Track and analyze your visitors' behavior, giving you valuable insights into what your customers are interested in and how to improve your offerings.",
    icon: "📊",
  },
  {
    title: "Cost-Effective Marketing",
    description:
      "A website serves as a cost-effective marketing tool, providing you with an affordable platform to showcase your services and products.",
    icon: "💡",
  },
  {
    title: "Showcase Your Portfolio",
    description:
      "A website allows you to display your work, whether it's projects, services, or testimonials, giving your potential customers a clear view of your capabilities.",
    icon: "🖼️",
  },
];

const Reasons = () => {
  return (
    <section id="reasons" className="reasons-section">
      <div className="container">
        <h2 className="title">Why You Should Have a Website</h2>
        <div className="grid">
          {reasons.map((reason, index) => (
            <Card key={index} className="reason-card">
              <CardContent>
                <Typography className="icon" variant="h4">
                  {reason.icon}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {reason.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {reason.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
