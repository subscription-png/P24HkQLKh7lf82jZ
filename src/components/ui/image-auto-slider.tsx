export const Component = () => {
  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .infinite-scroll {
          animation: scroll-right 20s linear infinite;
        }
        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            #0e0b20 10%,
            #0e0b20 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            #0e0b20 10%,
            #0e0b20 90%,
            transparent 100%
          );
        }
        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>
      
      <div className="w-full min-h-[22rem] bg-[#0e0b20] relative overflow-hidden flex items-center justify-center py-16">
        <div className="relative z-10 w-[90%] flex items-center justify-center">
          <div className="scroll-container w-full">
            <div className="infinite-scroll flex gap-6 w-max">
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 z-20"
          style={{
            background: 'linear-gradient(to top, #0e0b20, transparent)'
          }}
        />
      </div>
    </>
  );
};

export const ImageAutoSlider = Component;
