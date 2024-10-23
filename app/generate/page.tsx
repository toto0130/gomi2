"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Brain, Loader2 } from "lucide-react"

export default function GeneratePage() {
  const [loading, setLoading] = useState(false)
  const [difficulty, setDifficulty] = useState("medium")
  const [type, setType] = useState("logic")
  const [complexity, setComplexity] = useState([50])

  const handleGenerate = () => {
    setLoading(true)
    // Simulating API call
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Generate Your Puzzle</h1>
      
      <Card className="max-w-2xl mx-auto p-6">
        <div className="space-y-8">
          <div className="space-y-2">
            <label className="text-sm font-medium">Puzzle Type</label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="logic">Logic Puzzle</SelectItem>
                <SelectItem value="word">Word Puzzle</SelectItem>
                <SelectItem value="math">Mathematical Puzzle</SelectItem>
                <SelectItem value="crypto">Cryptography</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Difficulty Level</label>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
                <SelectItem value="expert">Expert</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Complexity ({complexity}%)</label>
            <Slider
              value={complexity}
              onValueChange={setComplexity}
              min={0}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          <Button 
            onClick={handleGenerate} 
            className="w-full"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Brain className="mr-2 h-4 w-4" />
                Generate Puzzle
              </>
            )}
          </Button>
        </div>
      </Card>
    </div>
  )
}