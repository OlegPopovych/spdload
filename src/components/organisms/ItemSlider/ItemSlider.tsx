import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ItemSlider.scss';
import { Card } from '../../molecules/Card';
import { useQuery } from '@apollo/client';
import { GET_TOURS } from '../../../apollo_api/query';

interface Props {
  name: string;
}

export const ItemSlider: React.FC<Props> = ({ name }) => {
  const { loading, data } = useQuery(GET_TOURS, {
    variables: {
      toursLimit: 10,
    },
  });

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: 'slider-style',
    margin: 24,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      id='next-section'
      className={`sliderContainer ${
        false ? 'card_slider card_slider_light' : 'card_slider'
      }`}
    >
      <h2 className={'sliderTitle'}>{name}</h2>

      <Slider {...settings}>
        {loading &&
          [1, 2, 3].map((id) => (
            <Card
              key={id}
              id={'1'}
              imageSrc={process.env.PUBLIC_URL + '/images/space_loading.png'}
              mission_name='Loading...'
              details='Loading...'
            />
          ))}

        {data &&
          data.launches &&
          data.launches.map((launch, index) => (
            <Card
              key={launch?.id}
              id={launch?.id}
              imageSrc={
                process.env.PUBLIC_URL +
                `/images/space_${(index + 1) % 3 || 3}.png`
              }
              mission_name={launch?.mission_name}
              details={launch?.details}
            />
          ))}
      </Slider>
    </div>
  );
};
