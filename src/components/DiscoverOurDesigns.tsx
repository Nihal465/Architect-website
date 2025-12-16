import { useState } from "react";
import Masonry from "./Masonry"; 
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// --- Import Residential Projects Only ---
import resProject1 from "@/assets/projects/residential/res-project-1.webp";
import resProject2 from "@/assets/projects/residential/res-project-2.webp";
import resProject3 from "@/assets/projects/residential/res-project-3.webp";
import resProject4 from "@/assets/projects/residential/res-project-4.webp";
import resProject5 from "@/assets/projects/residential/res-project-5.webp";
import resProject6 from "@/assets/projects/residential/res-project-6.webp";
import resProject7 from "@/assets/projects/residential/res-project-7.webp";
import resProject8 from "@/assets/projects/residential/res-project-8.webp";
import resProject9 from "@/assets/projects/residential/res-project-9.webp";

// --- PROJECT DATA FOR MASONRY GRID (Residential Only) ---
// Set url to empty string to make images non-clickable
const masonryItems = [
  { id: "p1", img: resProject1, url: "", height: 400 },
  { id: "p2", img: resProject2, url: "", height: 650 }, 
  { id: "p3", img: resProject3, url: "", height: 300 },
  { id: "p4", img: resProject4, url: "", height: 500 },
  { id: "p5", img: resProject5, url: "", height: 450 },
  { id: "p6", img: resProject6, url: "", height: 600 },
  { id: "p7", img: resProject7, url: "", height: 350 },
  { id: "p8", img: resProject8, url: "", height: 550 },
  { id: "p9", img: resProject9, url: "", height: 400 },
];

const DiscoverOurDesigns = () => {
    const [masonryHeight, setMasonryHeight] = useState(0);

    const handleHeightCalculated = (height: number) => {
        setMasonryHeight(height + 50); 
    };

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-2">
                        Our Vision
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Discover Our Design Portfolio tailored to client aspirations and modern aesthetics.
                    </p>
                </div>
                
                {/* Masonry Grid */}
                <div 
                    className="relative w-full transition-all duration-500" 
                    style={{ 
                        height: `${masonryHeight}px`, 
                        maxWidth: '1400px', 
                        margin: '0 auto' 
                    }} 
                >
                    <Masonry
                        items={masonryItems}
                        ease="power3.out"
                        duration={0.7}
                        stagger={0.03}
                        animateFrom="bottom" 
                        scaleOnHover={true}
                        hoverScale={0.97} 
                        blurToFocus={true} 
                        colorShiftOnHover={false}
                        onHeightCalculated={handleHeightCalculated} 
                    />
                </div>
                
                {/* View All Projects Button */}
                <div className="text-center mt-12">
                    <Link to="/projects">
                        <button className="inline-flex items-center text-lg font-medium text-foreground hover:text-accent transition-colors group">
                            View All Projects
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default DiscoverOurDesigns;