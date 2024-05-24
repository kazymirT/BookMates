import Collage from './Collage/Collage';
import HitProducts from './HitProducts/HitProducts';
import SaleProducts from './SaleProducts/SaleProducts';
import Search from './Search/Search';

const Home = () => {
  return (
    <>
      <Search />
      <HitProducts />
      <Collage />
      <SaleProducts />
    </>
  );
};

export default Home;
