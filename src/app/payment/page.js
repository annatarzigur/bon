import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 max-w-screen px-4'>
        <div className=''>
            <Image src="/kare.png" width={200} height={200} className='object-contain' alt='karekod'/>
        </div>
        <div className='flex flex-col justify-center gap-3 text-[13px] md:text-[16px] max-w-full'>
            <p>Ödemenizi <stong>BTC</stong> olarak yapmanız gerekiyor.</p>
            <p>Karekodu okutarak veya adresi kopyalayarak btc gönderebilirsiniz.</p>
            <p>Kullanıcılar bonustan bir defa yararlanabilir. </p>
            <p>Bonusunuz formdaki bilgilere istinaden ilgili hesaba yatırılacaktır. </p>
            <p>Bilgileriniz yanlış olursa bonusunuz yanlış bir hesaba gidebilir.</p>
            <p>Formdaki bilgileri mutlaka doğru doldurun. </p>
            <p>Bonusunuz hesaba 24-48 saat içinde geçecektir.</p>
            <p>Çevrimsiz %250 bonusunuzu almak için aşağıdaki BTC hesabına yatırımınızı yapın. </p>
            <p><strong>BTC hesap numarası</strong></p>
            <p><strong>bc1q6lp8zqe7tvsfh3hn2zulv0dxqvcdn5qvlwvmpk</strong></p>
        </div>
        <Link href="/" className='px-6 py-3 bg-orange-500 text-white rounded-xl'>İşlemler tamamlandı</Link>
    </div>
  )
}

export default page