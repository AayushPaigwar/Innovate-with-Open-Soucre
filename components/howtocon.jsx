import { ArrowUpRight, GitBranch, SquareTerminal } from "lucide-react"

const FeatureCard = ({ icon: Icon, title, description, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
            <Icon className="w-6 h-6 mr-2 text-gray-600" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <ArrowUpRight className="w-4 h-4 ml-1 text-gray-400" />
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        {children}
    </div>
)

const Terminal = () => (
    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm">
        <div className="flex mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <p>{`{`}</p>
        <p>{`name: "Your Name",`}</p>
        <p>{`role: "Your Role (e.g., Contributor)",`}</p>
        <p>{`github: "https://github.com/your-github-username",`}</p>
        <p>{`image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png" // or your image URL`}</p>
        <p>{`}`}</p>
    </div>
)

const VersionHistory = () => (
    <div className="space-y-2">
        {[
            { number: 1, value: "Fork the Repository: Create your own copy of the repo.", },
            { number: 2, value: "Clone Your Fork: Download your forked repo to your local machine", },
            { number: 3, value: "Make Changes: Implement your updates or fixes.", },
            { number: 4, value: "Commit Your Changes: Save your changes with a descriptive commit message.", },
            { number: 5, value: "Push to GitHub: Upload your branch to your GitHub repository.", },
            { number: 6, value: "Create a Pull Request: Submit your changes for review in the original repository.", },
        ].map((version) => (
            <div key={version.number} className="bg-gray-800 text-white p-2 rounded-lg text-sm">
                <div className="flex items-center mb-1">
                    <span className="bg-gray-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2">
                        {version.number}
                    </span>
                    <span className="font-semibold">{version.value}</span>
                </div>
            </div>
        ))}
    </div>
)

export default function HowToContribute() {
    return (
        <section id="hottocon" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    <FeatureCard
                        icon={SquareTerminal}
                        title="Contributor Snippet"
                        description="Add your details to the contributors list using the following snippet."
                    >
                        <Terminal />
                    </FeatureCard>
                    <FeatureCard
                        icon={GitBranch}
                        title="Contributor Guidelines"
                        description="Read the guidelines for contributing to the repository."
                    >
                        <VersionHistory />
                    </FeatureCard>
                </div>
            </div>
        </section>
    )
}