declare module "*.svg" {
    const value: any;
    export = value;
}

declare module "*.png" {
    const value: any;
    export = value;
}

declare module "*.jpeg" {
    const value: any;
    export = value;
}

declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}