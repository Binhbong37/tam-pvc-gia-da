import './style.css'

const Register = () => {
  
  return (
    <div className='content'>

     <h2>TỔNG KHO PVC VÂN ĐÁ KANGBANG</h2>
     <h3>Liên hệ: <a href='tel:0933692645'>0933 692 645</a></h3>
     <div className='map-kb'>
     <iframe
     title='KangBang'
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5224868302016!2d106.61437917504291!3d10.847808039305344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b433d6ef85d%3A0xbd965b6ed71d7dd!2zVOG7lW5nIGtobyBQVkMgdsOibiDEkcOhIC0gS2FuZ0Jhbmc!5e0!3m2!1svi!2s!4v1696511357661!5m2!1svi!2s"
     width="100%"
     height="100%"
     style={{border:0}}
     allowFullScreen="" 
     loading="lazy" 
     referrerPolicy="no-referrer-when-downgrade"></iframe>
     </div>
     
     <p><a href={'/'}>Tấm PVC</a></p>
     <p><a href={'/tam-da-nang'}>Tấm ốp đa năng</a></p>
     <p><a href={'/lam-song'}>Lam sóng</a></p>
     <p><a href={'/nano'}>Tấm nano</a></p>
    </div>
  )
}

export default Register