export interface PromptEvaluationResult {
  score: number;
  details: {
    detailLevel: number;
    clarity: number;
    specificity: number;
  };
  feedback: string[];
}

export type PromptType = 
  | 'creative'
  | 'technical'
  | 'analytical'
  | 'descriptive';

export type AnalysisLevel = 'basic' | 'intermediate' | 'advanced';