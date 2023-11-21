import Marketplace from './Marketplace/Marketplace';
import Teenant from './Teenant/Teenant';
import Landlord from './Landlord/Landlord';
import { CategoryHome } from './HomeConstant';



export default function Home(homeType) {
  return function (){
    return (
      <>
        {homeType === CategoryHome.Marketplace && <Marketplace />}
        {homeType === CategoryHome.Landlord && <Landlord />}
        {homeType === CategoryHome.Teenant && <Teenant />}
      </>
    );
  }
}
