import Me from "../../../assets/me.jpeg"
import type {
    PortfolioType
} from "../utils/types"

export const ProfileDummyData: PortfolioType = {
    profileSection: {
        imgURL: Me,
        name: "Guda Pavaneeshwar Reddy",
        designation: "Developer & Explorer",
        bio: `I’m getting tired of working on large projects where the internal logic is hidden like a black box—where all we do is run their CLI tools or call APIs as wrappers. Lately, I’ve been more interested in picking up big open-source projects and trying to build similar systems myself. It helps me understand how well-structured code is written and how things truly work behind the scenes. I want to build things from the ground up, brick by brick. Sure, it takes more time, but learning how a complete system is designed is just as important as knowing how to use it. Right now, I just want to build, break, and learn.`,
        socialMedia: [
            { label: "Instagram", link: "https://www.instagram.com/pavaneeshwar.dev/" },
            { label: "Twitter", link: "https://www.twitter.com" },
            { label: "Github", link: "https://github.com/PavaneeshwarReddy" },
            { label: "Linkedin", link: "https://www.linkedin.com/in/pavaneeshwarreddy/" }
        ]
    },

    experienceSection: {
        description:
            "Experience working as a developer in unicorn startups, fintech, and compliance-driven organizations",

        experiences: [
            {
                designation: "Software Engineer",
                company: "Altiushub",
                startDate: "Oct 2024",
                endDate: "Current",
                currentlyWorkingHere: true,

                technologies: [
                    "Django",
                    "PostgreSQL",
                    "Azure",
                    "Docker",
                    "Kubernetes",
                    "RxJS",
                    "Playwright",
                    "GitHub",
                    "Linux",
                    "Loki",
                    "Grafana",
                    "Mimir",
                    "Tempo"
                ],

                works: [
                    "Implemented CloudNativePG Operator to manage self-hosted, highly available PostgreSQL clusters on Kubernetes.",
                    "Built a reusable standalone test component library for multiple frontend applications.",
                    "Automated the package release workflow using GitHub private npm registry, reducing manual effort by 95%.",
                    "Implemented an in-house monitoring and observability platform using Loki, Grafana, Mimir, and Tempo.",
                    "Automated semantic versioning using @semantic-release with private repositories to manage patch/minor/major versions.",
                    "Optimized cron-based processing, improving outbound delivery report generation time by 90%.",
                    "Implemented automatic rollback of database migrations across microservices for safer deployments.",
                    "Developed and delivered a complete ETL-focused microservice using Django and PostgreSQL.",
                    "Performed R&D evaluating CockroachDB, YugabyteDB, and Citus for high-throughput workloads.",
                    "Created frontend automation test suites using RxJS and Playwright.",
                    "Dockerized multiple deployments and implemented testing workflows using Docker test containers.",
                    "Created an automation script to manage GitHub releases across 10 repositories — auto-tagging, changelog generation, and more.",
                    "Designed an in-house archival system for serial numbers based on country compliance using GitHub Actions, pg_dump, Zstandard compression, Azure Blob Storage, and dynamic DB routing. Achieved 13MB dump size for 5,00,000 serials."
                ]
            },
            {
                designation: "Frontend Office Tech Associate Intern",
                company: "D.E. Shaw India",
                startDate: "Jan 2024",
                endDate: "July 2024",
                currentlyWorkingHere: false,

                technologies: [
                    "Linux",
                    "Python",
                    "Scripting",
                    "Cache",
                    "Grafana",
                    "Jenkins",
                    "CI/CD",
                    "Docker",
                    "Postgres"
                ],

                works: [
                    "Built a batch processing pipeline that periodically updates cached data by fetching missing historical values from Bloomberg, US Stock Exchanges, and other macroeconomic data providers.",
                    "Upgraded the in-house cache management system, reducing missing data issues and improving cache miss rate from 18% to 10%.",
                    "Automated the population of time-sensitive financial data from trading systems into the internal caching framework.",
                    "Handled major version upgrades for various open-source tools used across multiple internal teams.",
                    "Developed an algorithm to analyze Macro economical price trends across Russia, the US, and Japan, detecting outliers and reducing false market alerts by 34%.",
                ]
            },
            {
                designation: "Software Development Engineer Intern",
                company: "Zenoti",
                startDate: "Dec 2023",
                endDate: "Jan 2024",
                currentlyWorkingHere: false,

                technologies: [
                    ".net",
                    "ReactJs",
                    "MySQL"
                ],

                works: [
                    "Automated the customer onboarding process, reducing onboarding time from 2 hours to 45 minutes",
                    "Resolved race conditions in multi-client booking scenarios by ensuring safe access to shared resources such as time slots, services, and doctors",
                    "Implemented configurable email notification workflows for administrators to manage festive season sales and promotional campaigns"
                ]
            },
            {
                designation: "Flutter Developer Intern",
                company: "Mittarv",
                startDate: "Jan 2023",
                endDate: "Mar 2023",
                currentlyWorkingHere: false,

                technologies: [
                    "Flutter",
                    "Dart",
                    "MongoDB",
                    "NodeJs"
                ],

                works: [
                    "Refactored the entire UI by standardizing reusable common components across the application",
                    "Implemented centralized theme management supporting system themes (light, dark) and user-defined custom colors",
                    "Integrated secure authentication mechanisms including OTP-based login and OAuth"
                ]

            }
        ]
    }
}
