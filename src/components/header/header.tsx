import Image from 'next/image'

const Header = () => {
  return (
    <header className="w-full px-2 py-4 bg-white">
      <div className="relative w-1/3">
        <Image
          src={
            'https://www.medexpress.co.uk/medexpress-hangar-images?url=%2Fmedexpress-hangar%2F_next%2Fstatic%2Fmedia%2Fme_blue_logo.ada2228d.png&w=640&q=75'
          }
          alt="MedExpress logo"
          width={544}
          height={120}
          layout="responsive"
        />
      </div>
    </header>
  )
}

export default Header
