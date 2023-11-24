import {useState} from 'react';
import Marketplace from './Marketplace/Marketplace';
import Teenant from './Teenant/Teenant';
import Landlord from './Landlord/Landlord';
import { CategoryHome } from './HomeConstant';
import { HomeHeader } from './Component/HomeHeader';

export default function Home({navigation}) {
  const [homeType, setHomeType] = useState(CategoryHome.Marketplace);
    return (
      <>
      <HomeHeader navigation={navigation} homeType={homeType} setHomeType={setHomeType} />
        {homeType === CategoryHome.Marketplace && <Marketplace />}
        {homeType === CategoryHome.Landlord && <Landlord />}
        {homeType === CategoryHome.Teenant && <Teenant />}
      </>
    );
}
