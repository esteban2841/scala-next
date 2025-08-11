export const menuItems = [
  { label: "Home", href: "/", selected: true },
  {
    label: "Services",
    selected: false,
    subItems: [
      { label: "Commercial", href: "/services?category=commercial" },
      { label: "Residential", href: "/services?category=residential" },
      { label: "Housing", href: "/services?category=housing" },
      { label: "Visualization", href: "/services?category=visualization" },
    ],
  },
  {
    label: "Projects",
    selected: false,
    subItems: [
      { label: "Commercial", href: "/projects?category=commercial" },
      { label: "Residential", href: "/projects?category=residential" },
      { label: "Housing", href: "/projects?category=housing" },
      { label: "Visualization", href: "/projects?category=visualization" },
    ],
  },
  { label: "Contact", selected: false, href: "/contact" },
  { label: "About Us", selected: false, href: "/about" },
  { label: "Blog", selected: false, href: "/blog" },
];