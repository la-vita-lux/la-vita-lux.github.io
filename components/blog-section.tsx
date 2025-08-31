import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "What is HOA? What You Need to Know About Rules and Regulations",
    excerpt:
      "If you live in a newer suburban community or a condominium, you're probably a member of a homeowners association, cooperatives, condominiums, communities...",
    image: "/assets/images/modern-suburban-community-with-hoa.png",
  },
  {
    title: "Living Trusts",
    excerpt:
      "Estate planners often recommend Living Trusts as an estate planning tool. Living trusts can be particularly useful for contemplating the manner in which to hold...",
    image: "/assets/images/legal-documents-and-estate-planning.png",
  },
  {
    title: "What to Expect During a Home Inspection",
    excerpt:
      "From finding an inspector to dealing with issues that come up during the inspection, here's what you need to know about the home inspection...",
    image: "/assets/images/home-inspector-examining-house.png",
  },
  {
    title: "How to Avoid Capital Gains Tax on a Home Sale",
    excerpt:
      "When your home value goes through the roof, you may be wondering what happens when you sell. Here are tips to help tax liability. Most homeowners are not...",
    image: "/assets/images/house-with-money-and-tax-documents.png",
  },
]

export function BlogSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-work-sans text-center mb-12">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image || "/assets/images/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold font-work-sans mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Read more
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
