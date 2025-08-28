const articles = [
  {
    id: 1,
    title: "Conversations with Our Favorite London Studio, Makr & Co.",
    author: "Olivia Rhye",
    date: "20 Jan 2024",
    excerpt:
      "We sat down with London’s fast-growing brand and product design studio, Makr & Co. to find out how they’ve used design to 2x their revenue.",
    image: "https://picsum.photos/400/300?random=1",
    tags: ["Design", "Research", "Interviews"],
  },
  {
    id: 2,
    title: "A Relentless Pursuit of Perfection in Product Design",
    author: "Phoenix Baker",
    date: "19 Jan 2024",
    excerpt:
      "I began to notice that there was a sharp contrast between well-made, crafted products and poorly made ones, and an even greater distinction between the people who made them.",
    image: "https://picsum.photos/400/300?random=2",
    tags: ["Product", "Research", "Frameworks"],
  },
  {
    id: 3,
    title: "How to Run a Successful Business With Your Partner",
    author: "Lana Steiner",
    date: "18 Jan 2024",
    excerpt:
      "Starting a business with your spouse or significant other is an exciting but delicate process and requires a great deal of faith.",
    image: "https://picsum.photos/400/300?random=3",
    tags: ["Design", "Research"],
  },
  {
    id: 4,
    title: "The Future of Remote Work in Creative Industries",
    author: "Alex Kim",
    date: "15 Jan 2024",
    excerpt:
      "As remote work becomes the new normal, creative teams are finding innovative ways to collaborate across borders and time zones.",
    image: "https://picsum.photos/400/300?random=4",
    tags: ["Remote Work", "Creativity", "Culture"],
  },
  {
    id: 5,
    title: "Sustainable Design: Building for the Next Generation",
    author: "Maria Lopez",
    date: "12 Jan 2024",
    excerpt:
      "Designers are rethinking how materials and processes can be used to create products that last without harming the planet.",
    image: "https://picsum.photos/400/300?random=5",
    tags: ["Sustainability", "Design", "Innovation"],
  },
  {
    id: 6,
    title: "Lessons from Scaling a Startup to Global Reach",
    author: "James Carter",
    date: "10 Jan 2024",
    excerpt:
      "From scrappy beginnings to international markets, here are the lessons learned while scaling a startup.",
    image: "https://picsum.photos/400/300?random=6",
    tags: ["Startups", "Growth", "Business"],
  },
  {
    id: 7,
    title: "Why Emotional Intelligence Matters in Leadership",
    author: "Sophie Tan",
    date: "08 Jan 2024",
    excerpt:
      "Leadership isn’t just about strategy; it’s about empathy, communication, and emotional intelligence.",
    image: "https://picsum.photos/400/300?random=7",
    tags: ["Leadership", "Psychology", "Culture"],
  },
  {
    id: 8,
    title: "Breaking Down Design Systems: A Practical Guide",
    author: "Daniel White",
    date: "05 Jan 2024",
    excerpt:
      "Design systems bring order and consistency to creative chaos. Here’s how to implement one effectively.",
    image: "https://picsum.photos/400/300?random=8",
    tags: ["Design", "Systems", "Best Practices"],
  },
  {
    id: 9,
    title: "The Art of Storytelling in Branding",
    author: "Nina Patel",
    date: "03 Jan 2024",
    excerpt:
      "Behind every great brand is a story. Learn how storytelling can elevate your brand above the noise.",
    image: "https://picsum.photos/400/300?random=9",
    tags: ["Branding", "Marketing", "Storytelling"],
  },
  {
    id: 10,
    title: "Balancing Creativity and Constraints in Design",
    author: "Ethan Brown",
    date: "01 Jan 2024",
    excerpt:
      "Design often thrives when boundaries exist. Constraints push designers to think differently and innovate.",
    image: "https://picsum.photos/400/300?random=10",
    tags: ["Creativity", "Design", "Innovation"],
  },
];

const gridEone = document.querySelector("#grid-container");

let GRIDS_HTML = "";

articles.forEach((article) => {
  GRIDS_HTML += `
   <div class="blog-card">
          <div class="blog-image">
            <img
              src="${article.image}"
              alt="blog image"
            />
          </div>
          <div class="blog-info">
            <p class="identity">
              ${article.author} <span>&bull;</span>
              <span class="data">${article.date}</span>
            </p>
            <p class="title">
            ${article.title}
            </p>
            <p class="body">
             ${article.excerpt}
            </p>
            <div class="tags-con">
             ${article.tags
               .map((tag) => `<div class="tag">${tag}</div>`)
               .join("")}

            </div>
          </div>
        </div>
  `;
});


gridEone.innerHTML = GRIDS_HTML;
