import './Gallery.css';

const items = [
  { id: 1, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', label: 'F1 Race' },
  { id: 2, src: 'https://images.unsplash.com/photo-1541348263662-e068662d82af?w=600&q=80', label: 'Ferrari' },
  { id: 3, src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80', label: 'Circuit' },
  { id: 4, src: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80', label: 'Speed' },
  { id: 5, src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80', label: 'Coding' },
  { id: 6, src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80', label: 'Dev' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="section-wrap">
        <div className="section-eyebrow">
          <span className="eyebrow-line" />
          <span>Gallery</span>
        </div>
        <h2 className="gallery-heading">Media &amp;<br /><span className="text-red">Gallery</span></h2>
        <div className="gallery-grid">
          {items.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.src} alt={item.label} className="gallery-img" />
              <div className="gallery-overlay">
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
