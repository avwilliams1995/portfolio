declare module "spam-detection" {
  export function detect(text: string): "spam" | "notspam";
  export function getResults(text: string): Array<{
    label: string;
    value: number;
  }>;
}
