import { useNavigate } from "react-router-dom";

// Replace these with your actual image files
import video1 from "/video1.png";
import video2 from "/video2.png";
import video3 from "/video3.png";
import video4 from "/video4.png";
import video5 from "/video5.png";
import video6 from "/video6.png";
import video7 from "/video7.png";
import video8 from "/video8.png";

export default function FeaturedVideos() {
  const navigate = useNavigate();

  const videos = [
    { title: "Wedding Video", image: video1 },
    { title: "Video", image: video2 },
    { title: "Video", image: video3 },
    { title: "Video", image: video4 },
    { title: "afgg", image: video5 },
    { title: "ghhhj", image: video6 },
    { title: "ijjjkk", image: video7 },
    { title: "jjikk", image: video8 },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Featured Videos</h2>
        <button
          onClick={() => navigate("/media")}
          className="text-grayText hover:text-darkBlue transition text-sm font-medium"
        >
          View All (50)
        </button>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {videos.map((vid, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={vid.image}
                alt={vid.title}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-medium text-primary capitalize">
                {vid.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
