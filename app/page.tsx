
import Banner from '@/assets/banner.png'
import ExaciseHading from '@/components/ExaciseHading';
import ExaciseInfoSection from '@/components/ExaciseInfoSection';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=" container mx-auto text-white">
      <section className=' py-[30px] px-[10px] my-10'>
         <div className=' flex  flex-col-reverse md:flex-row justify-between items-center py-[20px] px-10 bg-gray-800 rounded-2xl'>
            <div className=' text-center md:text-left'>
               <h4 className=' text-[#C2F800] text-[10px] font-bold my-4 '>WORKOUT LIBRARY</h4>
               <h1 className=' text-4xl md:w-[450px] font-bold my-3 '>TRAIN WITH INTENT. LOG EVERY SET.</h1>
               <p className=' text-gray-400 w-[400px] my-5 '>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into todays plan, and watch the weeks work add up.</p>
               <button  className=' bg-[#C2F800] px-5 py-1 rounded-[7px] text-black mx-auto'>BROWSE WORKOUTS</button>
            </div>
            <div>
              <Image src={Banner} alt='Banner'/>
            </div>
         </div>
      </section>
      <section>
          <ExaciseHading/>
          <ExaciseInfoSection/>
      </section>
    </div>
  );
}
