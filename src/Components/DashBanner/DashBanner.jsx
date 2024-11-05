import ReactiveButton from 'reactive-button';
import './DashBanner.css'

const DashBanner = () => {
    return (
        <div className="bg-[#9538E2] mt-10">
            <div className="container py-10 hero-content max-w-full text-center">
          <div className="w-10/12 flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl font-bold text-white">Dashboard</h1>
            <p className="w-11/12 md:w-8/12 text-center text-base text-white font-normal mb-4">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            
            <div className="flex gap-4">
            <ReactiveButton 
                className=''
                rounded 
                idleText={'Cart'}
                size="large"
                style={{
                    backgroundColor: 'white',
                    color: '#9538E2',
                    fontWeight: 700,
                  }}
                  onClick={() => window.location.href}
                />
            <ReactiveButton 
                className='active-btn-dash'
                rounded 
                idleText={'Wishlist'}
                size="large"
                style={{
                    backgroundColor: '#9538E2',
                    color: 'white',
                    fontWeight: 700,
                    
                  }}
                  onClick={() => window.location.href}
                />
            </div>
                
          </div>
        </div>
        </div>
    );
};

export default DashBanner;