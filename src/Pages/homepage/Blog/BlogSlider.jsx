import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Mousewheel, Pagination, Navigation, Keyboard } from 'swiper/modules';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../../public/Stylesheet/Swiper.css';

const BlogSlider = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/blog`)
            .then((response) => {
                setBlogs(response.data.blogs);
            })
            .catch((error) => {
                console.error("There was an error fetching the blogs!", error);
            });
    }, []);

    return (
        <div className="blog_bg_color">
            <div className="blog-slider">
            <div className="text-center">
     <h2 className="section-title">Blogs</h2>

        <p className="news-description">From the Recent</p>
      </div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    direction="horizontal"
                    mousewheel={{
                        forceToAxis: true,
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        el: '.blog-slider__pagination',
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className}"></span>`;
                        },
                    }}
                    modules={[EffectFade, Mousewheel, Pagination, Navigation, Keyboard]}
                    className="blog-slider__wrp"
                >

                    {blogs.map((blog, index) => (
                        <SwiperSlide key={index} className="blog-slider__item">
                            <div className="blog-slider__img">
                                <img
                                    src={blog.poster_image ? `${import.meta.env.VITE_SERVER_URL}/media/${blog.poster_image}` : "default-image.jpg"}
                                    alt={blog.title}
                                />
                            </div>
                            <div className="blog-slider__content">
                                <span className="blog-slider__code">
                                    {new Date(blog.Date_added).toLocaleDateString()}
                                </span>
                                <div className="blog-slider__title">{blog.title}</div>
                                <div className="blog-slider__text">{blog.description}</div>
                                <a href={`/blog/blog_post/${blog.id}`} className="blog-slider__button">READ MORE</a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="blog-slider__pagination"></div>
            </div>
        </div>
    );
};

export default BlogSlider;
