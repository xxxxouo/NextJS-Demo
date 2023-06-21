export default function NavbarLst() {
  return [
    {
      label: "首页",
      href: "/home",
    },
    {
      label: "商品",
      href: "/product",
    },
    {
      label: "后代路由",
      href: "/docs",
    },
    {
      label: "粒子时钟",
      href: "/clock",
      isphone: true,
    },
    {
      label: "训练场",
      href: "/train",
      isphone: true,
    },
  ];
}
