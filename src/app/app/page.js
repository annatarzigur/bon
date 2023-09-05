import Navbar from '@/components/Navbar'
import Banner from "../../public/Banner.png"
import Onwin from "../../public/onwinresim.png"
import Tipo from "../../public/betlogo.jpg"
import Sahabet from "../../public/Sahabet.png"

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <div className='flex flex-col bg-gray-100 gap-3 md:gap-6'>
    <Image src={Banner} alt='' className='w-[80%] mx-auto h-auto object-contain mt-2'/>
    <div className='flex flex-col border border-gray-500 px-10 py-5 rounded-lg gap-3 md:gap-4 my-3 md:my-6 max-w-[80%] mx-auto font-semibold'>
      <p>Ekrem abi telegramda önerilen ve iş birliğimiz olan üç siteden birini seçip tıklayın.</p>
      <p>Seçtiğiniz sitenin, takipçilerimize özel çevrim şartsız bonus formunu doldurun.</p>
      <p>Eğer hesabınız yoksa bu form ile kolayca hesabınız açılacaktır.</p>
      <p>Formdaki bilgileri dikkatli doldurunuz. Hesabınız varsa bonusunuz hesabınıza aktarılacaktır. </p>
      <p>Çevrim şartsız %250 bonusunuz 24 saat içinde hesabınıza tanımlanacaktır.</p>
    </div>
    <div className='max-w-[80%] flex flex-col md:flex-row md:justify-between items-center gap-6 md:gap-16 my-6  mx-auto'>
      <Link href="/onwin-form"><Image src={Onwin} className='w-[250px] h-auto object-contain' alt=''/></Link>
      <Link href="/tipo-form"><Image src={Tipo} className='w-[250px] h-auto object-cover' alt=''/></Link>
      <Link href="/saha-form"><Image src={Sahabet} className='w-[250px] h-auto object-cover' alt=''/></Link>
    </div>
   </div>
  )
}
