import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BannerSlider.scss';
import { BannerElement } from '../../atoms/BannerElement';
import { ScrollButton } from '../../atoms/ScrollButton';


interface Props {
  name: string;
  state?: 'loading' | 'error';
}

export const BannerSlider: React.FC<Props> = ({ name, state }) => {
  const settings = {
		autoplaySpeed: 2000,
		cssEase: 'ease-out',
		autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'bannerSlider-style',
    margin: 0,
  };

  return (
    <div
      className={`bannerSlider ${
        true ? 'card_bannerSlider card_bannerSlider_light' : 'card_bannerSlider'
      }`}
    >
      <h2 className={'bannerSliderTitle'}>{name}</h2>

      <Slider {...settings}>
        {[1, 2, 3].map((id) => (
          <BannerElement key={id} id={id}/>
        ))}
      </Slider>

			<ScrollButton />
    </div>
  );
};
