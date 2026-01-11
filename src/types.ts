export interface AppConfig {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    openIn: 'modal' | 'new-tab';
    tags?: string[];
    category?: 'Web Development' | 'Graphic Design' | 'AI/ML';
    images?: string[];
}

export interface Founder {
    id: string;
    name: string;
    role: string;
    codename: string;
    philosophy: string;
    description: string;
    imageUrl: string;
    portfolioUrl: string;

}
