import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import useHerreria from '../hook/useHerreria'
import Product from './Product';
import Spinner from './Spinner';
import 'swiper/css';
import 'swiper/css/pagination';
import './dashboard.css'
import styles from './Models.module.css'

export default function Models() {
    const {currentCategory, loading, dashboardRef, swiperRef} = useHerreria();
    
    return(
        <> 
            {loading ? <div className={styles.spinner}><Spinner/></div> : 
                <>
                    <p ref={dashboardRef} className={styles.name}>{currentCategory?.description}</p>

                    <Swiper
                        slidesPerView={1}
                        breakpoints={{
                            768 : {
                                slidesPerView: 2
                            }
                        }}
                        centeredSlides={true}
                        spaceBetween={30}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                            }}
                        modules={[Pagination]}
                        ref={swiperRef}
                        speed={900}
                    >
                        {currentCategory?.models?.map(product => (
                            <SwiperSlide key={product.id} className={styles.product}>
                                <Product
                                    product={product}
                                    currentCategory={currentCategory}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            }
        </>
    )
}