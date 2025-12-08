import Input from "../../../components/Input";
import Select, { type SelectOptionType } from "../../../components/Select";

function BlogList() {
  const selectedTag = "tech"
  const tags = [
    "tech",
    "backend",
    "system design",
    "data structures",
    "maps",
    "trees"
  ]
  const sortByOptions: SelectOptionType[] = [
    {
      label: "Latest",
      value: "LATEST"
    },
    {
      label: "Oldest",
      value: "OLDEST"
    },
    {
      label: "Most Viewed",
      value: "MOST_VIEWED"
    },
    {
      label: "Most Liked",
      value: "MOST_LIKED"
    }
  ]
  const blogs = [
    {
      imgURL: "https://res.cloudinary.com/dayqxxsip/image/upload/v1639839066/App%20Images/Blog%20Images/Article%20Images/Improving%20System%20Design%20Skills/system-design-example-wide.drawio_bjeg1k_hhit1q.png",
      title: "Scaling Systems the Right Way: Mastering Sharding & Replication",
      description: "A practical guide to handling millions of users by distributing data, ensuring availability, and avoiding bottlenecks in large-scale systems.",
      createdAt: "14 October 2025"
    },
    {
      imgURL: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*x5HCJfWEIOSgscvWphvBsQ.png",
      title: "Inside the Cache: Redis, Memcached & the Latency Battle",
      description: "How in-memory caching keeps apps fast, reduces database pressure, and why eviction policies can make or break performance.",
      createdAt: "21 August 2025"
    },
    {
      imgURL: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*qLwWGERvZjcqs0ii.png",
      title: "CAP Theorem Explained: Making the Right Trade-offs in Databases",
      description: "Consistency, availability, and partition tolerance — understanding what you must sacrifice when designing distributed systems.",
      createdAt: "6 February 2026"
    },
    {
      imgURL: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*9rn0MYW928xEEboXZjuk-w.png",
      title: "Kafka Essentials: The Backbone of Modern Event Streaming",
      description: "Learn how Kafka decouples systems, handles billions of events, and powers real-time analytics in tech giants.",
      createdAt: "2 November 2025"
    },
    {
      imgURL: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*XgqxUYSBJeplfpTmejkahg.png",
      title: "Database Duality: SQL vs NoSQL — Choosing the Right Fit",
      description: "An engineer’s perspective comparing relational models with document, key-value, graph, and columnar databases.",
      createdAt: "12 September 2025"
    }
  ];

  return (
    <div className="w-full flex flex-row mt-12 space-x-4">
      <div className="w-1/6 flex flex-col space-y-4">
        <Input placeholder="Search tags..."/>
        <div className="w-full">
          {
            tags.map((value, index) => {
              return <div key={index} className="mt-2 flex flex-row w-full items-center cursor-pointer">
                {
                  selectedTag === value ? <div className=" w-1/6 h-full flex flex-col items-center justify-center font-bold">{"->"}</div> : <div className="w-1/6 h-full"></div>
                }
                <div className={selectedTag === value ? "w-5/6 font-bold" : "w-5/6"}>{value}</div>
              </div>
            })
          }
        </div>
      </div>
      <div className="w-5/6 flex flex-col">
        <div>Latest</div>
        <div className="w-full flex flex-row space-x-4 border p-5">
          <div className="w-5/12">
            <img
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*6ZW2BYEnYls_tPAA.png"
              className="object-contain"
            />
          </div>
          <div className="w-7/12 space-y-4">
            <div className="text-4xl">Kafka Is Hard Because You Keep Ignoring These Patterns</div>
            <div className="text-lg">
              Apache Kafka is a distributed event streaming platform designed to handle massive amounts of data in real time. Instead of moving data around in slow, batch-style processes, Kafka acts as a high-throughput pipeline where different systems can publish and subscribe to streams of events. It's built to scale horizontally, keep messages persistent and fault-tolerant, and connect microservices through loose, event-driven communication.
            </div>
            <div className="text-gray-600">3 December 2025</div>
          </div>
        </div>

        <div className="w-full mt-6 flex flex-col space-y-4">
          <div>
            <div>All Blogs</div>
            <div className="flex flex-row space-x-4 w-full">
              <Input placeholder="Search blogs..."/>
              <div className="w-1/6">
                <Select placeholder="Sort by" options={sortByOptions} selectedValue="" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {
              blogs.map((data, index) => {
                return <div key={index} className="flex flex-col border p-4 space-y-2 cursor-pointer">
                  <div className="max-h-[250px]">
                    <img src={data.imgURL} className="grayscale object-contain h-full w-full" />
                  </div>
                  <div className="text-2xl">
                    {data.title}
                  </div>
                  <div className="text-lg">{data.description}</div>
                  <div className="text-gray-600">{data.createdAt}</div>
                </div>
              })
            }

          </div>
        </div>
      </div>

    </div>
  )
}

export default BlogList