import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle, Lightbulb, Play, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CodeChallengeProps {
  title: string;
  description: string;
  hints?: string[];
  starterCode: string;
  solution: string;
  testCases?: Array<{
    input: string;
    expected: string;
  }>;
  onComplete?: () => void;
}

const CodeChallenge = ({
  title,
  description,
  hints = [],
  starterCode,
  solution,
  testCases = [],
  onComplete,
}: CodeChallengeProps) => {
  const [code, setCode] = useState(starterCode);
  const [output, setOutput] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHints, setShowHints] = useState(false);
  const [hintsRevealed, setHintsRevealed] = useState<number>(0);
  const { toast } = useToast();

  const runCode = () => {
    try {
      // Create a safe execution environment
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      const iframeWindow = iframe.contentWindow;
      let capturedOutput = '';
      
      // Override console.log in iframe
      if (iframeWindow) {
        (iframeWindow as any).console = {
          log: (...args: any[]) => {
            capturedOutput += args.join(' ') + '\n';
          }
        };
        
        try {
          // Execute the code using Function constructor (safer than eval)
          const executeCode = new (iframeWindow as any).Function(code);
          executeCode();
          setOutput(capturedOutput || 'Code executed successfully (no output)');
          setIsCorrect(null);
        } catch (error: any) {
          setOutput(`Error: ${error.message}`);
          setIsCorrect(false);
        }
      }
      
      document.body.removeChild(iframe);
    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
      setIsCorrect(false);
    }
  };

  const checkSolution = () => {
    // Simple solution checking - compare trimmed code
    const normalizedCode = code.trim().replace(/\s+/g, ' ');
    const normalizedSolution = solution.trim().replace(/\s+/g, ' ');
    
    if (normalizedCode === normalizedSolution || code.includes(solution.trim())) {
      setIsCorrect(true);
      toast({
        title: "Correct! 🎉",
        description: "Great job! You've solved the challenge.",
      });
      onComplete?.();
    } else {
      setIsCorrect(false);
      toast({
        title: "Not quite right",
        description: "Keep trying! Use the hints if you need help.",
        variant: "destructive",
      });
    }
  };

  const resetCode = () => {
    setCode(starterCode);
    setOutput("");
    setIsCorrect(null);
    setHintsRevealed(0);
  };

  const revealNextHint = () => {
    if (hintsRevealed < hints.length) {
      setHintsRevealed(hintsRevealed + 1);
    }
  };

  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        {isCorrect !== null && (
          <Badge className={isCorrect ? "bg-green-500" : "bg-red-500"}>
            {isCorrect ? (
              <>
                <CheckCircle className="w-4 h-4 mr-1" /> Correct
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 mr-1" /> Try Again
              </>
            )}
          </Badge>
        )}
      </div>

      <Tabs defaultValue="challenge" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="challenge">Challenge</TabsTrigger>
          <TabsTrigger value="hints">Hints ({hintsRevealed}/{hints.length})</TabsTrigger>
          <TabsTrigger value="solution">Solution</TabsTrigger>
        </TabsList>

        <TabsContent value="challenge" className="space-y-4">
          {/* Code Editor */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Your Code:</label>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-64 p-4 font-mono text-sm bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              spellCheck={false}
            />
          </div>

          {/* Output */}
          {output && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Output:</label>
              <pre className="w-full p-4 bg-muted rounded-lg border border-border font-mono text-sm overflow-x-auto">
                {output}
              </pre>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-2">
            <Button onClick={runCode} variant="default">
              <Play className="w-4 h-4 mr-2" />
              Run Code
            </Button>
            <Button onClick={checkSolution} variant="secondary">
              <CheckCircle className="w-4 h-4 mr-2" />
              Check Solution
            </Button>
            <Button onClick={resetCode} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="hints" className="space-y-4">
          {hints.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              No hints available for this challenge.
            </p>
          ) : (
            <>
              <div className="space-y-3">
                {hints.slice(0, hintsRevealed).map((hint, index) => (
                  <Card key={index} className="p-4 bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-amber-900 dark:text-amber-100">Hint {index + 1}</p>
                        <p className="text-amber-800 dark:text-amber-200 text-sm mt-1">{hint}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {hintsRevealed < hints.length && (
                <Button onClick={revealNextHint} variant="outline" className="w-full">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Reveal Next Hint ({hintsRevealed + 1}/{hints.length})
                </Button>
              )}
            </>
          )}
        </TabsContent>

        <TabsContent value="solution" className="space-y-4">
          <Card className="p-4 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
            <p className="text-sm text-green-800 dark:text-green-200 mb-3">
              💡 Try to solve the challenge on your own first! Looking at the solution is helpful for learning, but you'll learn more by trying different approaches.
            </p>
          </Card>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Solution:</label>
            <pre className="w-full p-4 bg-muted rounded-lg border border-border font-mono text-sm overflow-x-auto">
              {solution}
            </pre>
          </div>

          <Button onClick={() => setCode(solution)} variant="secondary">
            Copy Solution to Editor
          </Button>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default CodeChallenge;
