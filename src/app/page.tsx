import BannerRazer from '@/components/BannerRazer';
import CardBuyNow from '@/components/CardBuyNow';
import CardPlayer from '@/components/CardPlayer';
import CardsGear from '@/components/CardsGear';
import FirstCardHeader from '@/components/FirstCardHeader';
import Rewards from '@/components/Rewards';
import SectionContainer from '@/components/SectionContainer';
import SocialArea from '@/components/SocialArea';

export default function App() {
  return (
    <div className="w-full">
      <SocialArea />

      <main className="w-full bg-[#212430] px-4">
        <FirstCardHeader />
        <Rewards />

        <SectionContainer name="MEU GEAR">
          <CardsGear />
        </SectionContainer>

        <BannerRazer />

        <SectionContainer name="NOSSA LOJA">
          <CardBuyNow />
        </SectionContainer>

        <SectionContainer name="NOSSO TIME">
         <div className='flex lg:flex-row flex-col'>
           <CardPlayer/>
           <CardPlayer/>
           <CardPlayer/>
           <CardPlayer/>
           <CardPlayer/>
         </div>
        </SectionContainer>
      </main>
    </div>
  );
}
