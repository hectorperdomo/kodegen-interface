export interface GeneratorInterface {
  preCompileTemplates(): void;
  go(mode: any): string;
}