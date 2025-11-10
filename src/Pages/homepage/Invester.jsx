import '../../stylesheets/Invester.css';

const Invester = () => {
  const investers = [
    { name: 'INR 100K Prize June 18', logo: 'https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/11.png' },
    { name: '$3M Seed (July, 21)', logo: 'https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/dollar.png' },
    { name: 'INR 1M, Research Grant March 22', logo: 'https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/meity.jpeg' },
    { name: '$110,000 June, 22', logo: 'https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/nvidia.jpeg' },

    { name: '$4M Post Seed (June, 24)', logo: 'https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/dollar.png' },

  ];

  return (
    <div className='invester_back'>
    <section className="investers-section">
      <div className="text-center">
          <h2 className="section-title">Funding and Ecosystem Support</h2>
         
        </div>
      {/* <h2> Prior Funding and Ecosystem Support</h2> */}
      {/* <p>Our Valued Investors and Supportive Partners </p> */}
      <div className="investers-grid">
        {investers.map((invester, index) => (
          <div key={index} className="investers-card">
            <img src={invester.logo} alt={`${invester.name} logo`} />
            <p>{invester.name}</p>
          </div>
        ))}
      </div>
     
    </section>
    </div>
  );
};

export default Invester;

