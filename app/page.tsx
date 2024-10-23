import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, Dices, Trophy, Users } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Challenge Your Mind
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Generate custom puzzles tailored to your skill level. From cryptography to logic puzzles, 
          embark on a journey of intellectual discovery.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="text-lg">
            <Dices className="mr-2 h-5 w-5" />
            Generate Puzzle
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            <Trophy className="mr-2 h-5 w-5" />
            Daily Challenge
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Brain className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Multiple Genres</h3>
          <p className="text-muted-foreground">
            Explore various puzzle types including cryptography, number puzzles, word games, and more.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Trophy className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Skill Levels</h3>
          <p className="text-muted-foreground">
            Choose from beginner to expert difficulty or customize your challenge level.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Users className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Community</h3>
          <p className="text-muted-foreground">
            Join other puzzle enthusiasts, share solutions, and compete on the leaderboard.
          </p>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Start your puzzle-solving journey today and join thousands of others challenging their minds.
        </p>
        <Button size="lg" asChild>
          <Link href="/register">Create Free Account</Link>
        </Button>
      </section>
    </div>
  )
}