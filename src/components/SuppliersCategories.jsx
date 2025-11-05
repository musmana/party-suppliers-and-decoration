import photographer from "/photographer.png";
import decorator from "/decorator.png";
import planner from "/planner.png";
import choreographer from "/choreographer.png";
import makeup from "/makeup.png";
import bar from "/bar.png";
import designer from "/designer.png";

export default function SuppliersCategories() {
  const categories = [
    {
      name: "PHOTOGRAPHER / VIDEOGRAPHER",
      image: photographer,
    },
    {
      name: "DECORATORS",
      image: decorator,
    },
    {
      name: "VENUE PLANNERS",
      image: planner,
    },
    {
      name: "CHOREOGRAPHERS",
      image: choreographer,
    },
    {
      name: "MAKEUP ARTIST",
      image: makeup,
    },
    {
      name: "BAR SERVICES",
      image: bar,
    },
    {
      name: "DESIGNERS",
      image: designer,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-left">
        Suppliers Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 md:gap-14 justify-items-center">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-transform duration-300 transform group-hover:scale-105">
              <img
                src={cat.image}
                alt={cat.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="mt-4 text-sm md:text-lg font-semibold text-black uppercase tracking-wide leading-tight">
              {cat.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
