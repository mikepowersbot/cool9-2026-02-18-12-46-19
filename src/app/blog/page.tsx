import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const placeholderPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    date: "2/18/2026, 1:31:36 PM",
    excerpt: "Learn how to build modern web applications with Next.js and React.",
  },
  {
    id: 2,
    title: "Understanding TypeScript",
    date: "2/18/2026, 1:31:36 PM",
    excerpt: "A comprehensive guide to TypeScript for better developer experience.",
  },
  {
    id: 3,
    title: "Tailwind CSS Tips and Tricks",
    date: "2/18/2026, 1:31:36 PM",
    excerpt: "Discover powerful techniques to style your applications with Tailwind.",
  },
  {
    id: 4,
    title: "Building Component Libraries",
    date: "2/18/2026, 1:31:36 PM",
    excerpt: "How to create reusable UI components for your design system.",
  },
  {
    id: 5,
    title: "State Management in React",
    date: "2/18/2026, 1:31:36 PM",
    excerpt: "Explore different approaches to managing state in React applications.",
  },
  {
    id: 6,
    title: "Optimizing Performance",
    date: "2/18/2026, 1:31:36 PM",
    excerpt: "Techniques to make your Next.js apps faster and more efficient.",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-muted/30 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderPosts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}