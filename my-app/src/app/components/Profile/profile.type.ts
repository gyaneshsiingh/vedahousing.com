export type ProfileExpertiseType = {
    label: string;
}

export type ProfileDataType = {
    name: string;
    title: string;
    description: string[];
    expertise: ProfileExpertiseType[];
    yearsExperience: number;
    imageSrc: string;
}

