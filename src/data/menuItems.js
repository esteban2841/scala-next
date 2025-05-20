export const menuItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    subItems: [
      { label: "Commercial", href: "/services?category=commercial" },
      { label: "Residential", href: "/services?category=residential" },
      { label: "Housing", href: "/services?category=housing" },
      { label: "Visualization", href: "/services?category=visualization" },
    ],
  },
  {
    label: "Projects",
    subItems: [
      { label: "Commercial", href: "/projects?category=commercial" },
      { label: "Residential", href: "/projects?category=residential" },
      { label: "Housing", href: "/projects?category=housing" },
      { label: "Visualization", href: "/projects?category=visualization" },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];