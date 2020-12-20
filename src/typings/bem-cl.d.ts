declare module "bem-cl" {
  const x: (className: string) => string | { mix: (...args: any) => string };
  const bemCl: (blockName: string) => x;

  export default bemCl;
}
