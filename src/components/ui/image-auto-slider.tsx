import React from 'react';

const images = [
  "https://cdn.21st.dev/assets/mirror/0b/0b2eee3635f20ec932fa27ae8db24eb760045aee6dd53c6cd05b01799761b6fb.jpg",
  "https://cdn.21st.dev/assets/mirror/a0/a0e1a6affa10f9d1304e1ec7a0a074efa2e5befddbe5f55ec1674ca4606a7272.jpg",
  "https://cdn.21st.dev/assets/mirror/c5/c50a953b2534eeb024de5eb84901abda556e6a8faa74bb6c13983557f14f02e2.jpg",
  "https://cdn.21st.dev/assets/mirror/2c/2c3bda48c0009be1f143cfed1b28a012de388bcd39d662df550ec1d28966b864.jpg",
  "https://cdn.21st.dev/assets/mirror/df/df5b37ca7d83d93ddbece6430932d006f89d70704f4cf14c91bc724b9653ec9f.jpg",
  "https://cdn.21st.dev/assets/mirror/fe/fe0e5e4058e6fc722507077aa70c1e0fd48ee254ab0bae5512902dc6729ff155.jpg",
  "https://cdn.21st.dev/assets/mirror/6f/6ff6818c9f0e9b6b28eb7f16f650538626b00cf3b10c36eac6840d280c799636.jpg",
  "https://cdn.21st.dev/assets/mirror/97/971ee8523c7efc71ed5323f0b7c386b7b09dde6af9bae9bedd7288ca7a787b40.jpg"
];

// Placeholder colors for missing images (agency-themed gradients)
const placeholderColors = [
  'from-purple to-purple-2',
  'from-coral to-purple-deep',
  'from-indigo-2 to-purple',
  'from-yellow to-coral',
];

const videoPlaceholders = [
  { color: 'bg-purple-deep', label: 'Video: Design Edit' },
  { color: 'bg-coral', label: 'Video: Team Meeting' },
  { color: 'bg-purple', label: 'Video: Code Screen' },
];

export const Component = () => {
  // Build grid items: mix images, placeholders, and video slots
  const gridItems: Array<{
    type: 'image' | 'placeholder' | 'video';
    src?: string;
    alt?: string;
    color?: string;
    label?: string;
    index: number;
  }> = [];

  // Add first 2 images
  for (let i = 0; i < 2; i++) {
    gridItems.push({ type: 'image', src: images[i], alt: `Gallery image ${i + 1}`, index: i });
  }

  // Video placeholder at position 2
  gridItems.push({ type: 'video', color: videoPlaceholders[0].color, label: videoPlaceholders[0].label, index: 2 });

  // Add images 3-4
  for (let i = 2; i < 4; i++) {
    gridItems.push({ type: 'image', src: images[i], alt: `Gallery image ${i + 1}`, index: i + 1 });
  }

  // Placeholder at position 5
  gridItems.push({ type: 'placeholder', color: placeholderColors[0], index: 5 });

  // Video placeholder at position 6
  gridItems.push({ type: 'video', color: videoPlaceholders[1].color, label: videoPlaceholders[1].label, index: 6 });

  // Add images 5-6
  for (let i = 4; i < 6; i++) {
    gridItems.push({ type: 'image', src: images[i], alt: `Gallery image ${i + 1}`, index: i + 2 });
  }

  // Video placeholder at position 9
  gridItems.push({ type: 'video', color: videoPlaceholders[2].color, label: videoPlaceholders[2].label, index: 9 });

  // Add images 7-8
  for (let i = 6; i < 8; i++) {
    gridItems.push({ type: 'image', src: images[i], alt: `Gallery image ${i + 1}`, index: i + 3 });
  }

  // Add placeholders to fill remaining slots (12-16 items total for density)
  for (let i = gridItems.length; i < 16; i++) {
    if (i % 5 === 3) {
      gridItems.push({ type: 'placeholder', color: placeholderColors[i % placeholderColors.length], index: i });
    } else if (i % 7 === 4) {
      gridItems.push({ type: 'video', color: videoPlaceholders[i % videoPlaceholders.length].color, label: videoPlaceholders[i % videoPlaceholders.length].label, index: i });
    } else {
      // Reuse images cyclically
      const imgIndex = i % images.length;
      gridItems.push({ type: 'image', src: images[imgIndex], alt: `Gallery image ${imgIndex + 1}`, index: i });
    }
  }

  return (
    <>
      <style>{`
        .gallery-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .gallery-item:hover {
          transform: scale(1.02);
          filter: brightness(1.1);
          z-index: 10;
        }
        .gallery-item video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      <div className="w-full bg-[#0e0b20] relative overflow-hidden">
        <div className="absolute inset-0 z-0" style={{
          background: 'linear-gradient(to bottom, #0e0b20, rgba(14,11,32,0.9), #0e0b20)'
        }} />

        <div className="relative z-10 w-full px-0 md:px-2 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-1 w-full">
            {gridItems.map((item, idx) => {
              if (item.type === 'video') {
                return (
                  <div
                    key={`video-${idx}`}
                    className={`gallery-item relative aspect-square overflow-hidden rounded-lg ${item.color} flex items-center justify-center`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <span className="text-white text-xs font-medium opacity-80">{item.label}</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                );
              }

              if (item.type === 'placeholder') {
                return (
                  <div
                    key={`placeholder-${idx}`}
                    className={`gallery-item relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br ${item.color}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/10" />
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={`img-${idx}`}
                  className="gallery-item relative aspect-square overflow-hidden rounded-lg"
                >
                  <img
                    src={item.src}
                    alt={item.alt || `Gallery image ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 z-20 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, #0e0b20, transparent)'
          }}
        />
      </div>
    </>
  );
};
