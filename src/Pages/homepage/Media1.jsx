import React, { useState, useEffect } from 'react';
import '../../stylesheets/Media1.css';
import axios from 'axios';

const Media = () => {
    // Initialize 'partners' as a state variable
    const [partners, setPartners] = useState([]);

    // Pagination states
    const itemsPerPage = 8; 
    const [currentPage, setCurrentPage] = useState(1); 
    const totalPages = Math.ceil(partners.length / itemsPerPage);

    // Function to handle fetching and transforming API data
    const fetchMediaData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/media`);
            const transformedData = response.data.media_cover.map(item => ({
                name: item.name,
                logo: `${import.meta.env.VITE_SERVER_URL}/media/${item.mediapage_image}`, 
                link: item.mediapage_link
            }));
            setPartners(transformedData);
        } catch (error) {
            console.error('There was an error fetching the media data!', error);
        }
    };

    useEffect(() => {
        fetchMediaData();
    }, []);

    // Pagination handlers
    const handleNext = () => {
        setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : 1));
    };

    const handlePrevious = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : totalPages));
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    // Determine the partners to display on the current page
    const currentPartners = partners.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Auto-pagination effect
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000); // Change page every 3 seconds

        return () => clearInterval(interval);
    }, [currentPage, totalPages]); 

    return (
        <div className="media-section">
        <div className="text-center">
            <h2 className="section-title">Article & News</h2>
        </div>
    
        <div style={{ flexGrow: 1 }}>
            <div className="partners-grid">
                {currentPartners.map((partner, index) => (
                    <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer" className="media-card">
                        <img src={partner.logo} alt={partner.name} className="media-logo" />
                    </a>
                ))}
            </div>
        </div>
    
        <div className="media-pagination">
            <button onClick={handlePrevious} disabled={currentPage === 1} className="media-pagination-button">
                Prev
            </button>
            <div className="media-pagination-info">
                {Array.from({ length: totalPages }, (_, index) => (
                    <span
                        key={index}
                        onClick={() => handlePageClick(index + 1)}
                        className={`media-page-number ${currentPage === index + 1 ? 'active' : ''}`}
                    >
                        {index + 1}
                    </span>
                ))}
            </div>
            <button onClick={handleNext} disabled={currentPage === totalPages} className="media-pagination-button">
                Next
            </button>
        </div>
    </div>
    
    );
};

export default Media;
