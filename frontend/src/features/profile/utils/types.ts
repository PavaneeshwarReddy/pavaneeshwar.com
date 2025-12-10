
type SocialMediaType = {
  label: string
  link: string
}

type ExperienceType = {
  designation: string
  company: string
  startDate: string
  endDate: string
  currentlyWorkingHere: boolean
  technologies: string[]
  works: string[]
}

type ExperienceSectionType = {
  description: string
  experiences: ExperienceType[]
}

type ProfileSectionType = {
  name: string
  imgURL: string
  designation: string
  bio: string
  socialMedia: SocialMediaType[]
}

type PortfolioType = {
  profileSection : ProfileSectionType
  experienceSection: ExperienceSectionType
}

export type {
  SocialMediaType,
  ExperienceType,
  ExperienceSectionType,
  ProfileSectionType,
  PortfolioType
}