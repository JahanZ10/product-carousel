import ProductCard from '../ProductCard/ProductCard'
import './ProductCarousel.css'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

function ProductCarousel({ products, title, variant = "default" }) {
  return (
    <div className={`carousel ${variant}`}>
      <h2>{title}</h2>
      <div className='swiper-container'>
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={variant === "compact" ? 1.5 : 2}
          navigation
          loop={true}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: variant === "compact" ? 2 : 3,
            },
            1024: {
              slidesPerView: variant === "compact" ? 3 : 4,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="carousel__item">
                <ProductCard product={product} variant={variant} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ProductCarousel