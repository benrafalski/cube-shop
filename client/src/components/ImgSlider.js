import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const ImgSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        <Carousel {...settings}>
            <Wrap style={{width:'100px'}}>
                <a>
                    <img src='https://live.staticflickr.com/7875/40637572223_b641b36fd7_b.jpg'/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src='https://atomiccubed.com/wp-content/uploads/2017/05/hello_cube_mirror_2x2_m.jpg'/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src='https://images.unsplash.com/photo-1588850561016-f275c8d35eab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src='https://cdn.shopify.com/s/files/1/0035/5205/1273/articles/threecubes_1200x1200.jpg?v=1548432655'/>
                </a>
            </Wrap>
        </Carousel> 
    )
}
// https://i.pinimg.com/originals/57/cc/88/57cc88c9b6db806d66200d89787bbc81.jpg

const Carousel = styled(Slider)`
    margin-bottom: 200px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;
        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }
    ul li button {
        &:before {
            font-size: 10px;
            color: #5D26C1;
        }
    }
    li.slick-active button:before {
        color: #8f0eff;
    }
    .slick-track{
        display: flex !important;
    }
    .slick-slide {
        height: inherit !important;
    }
    .slick-list {
        overflow: initial;
    }
    .slick-prev {
        left: -2.5%;
    }
    .slick-next {
        right: -2.5%;
    }
    
`;

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    height: 100%;
    
    a {
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;
        img {
            width: 100%;
            height: 500px;
            object-fit: cover;

            @media screen and (max-width: 960px){
                height: 300px;
            }
        }
        &:hover {
            padding: 0;
            border: 4px solid rgba(249, 249, 249, 0.8);
            transition-duration: 200ms;
        }
    }
`;

export default ImgSlider