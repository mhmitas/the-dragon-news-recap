import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center my-4 space-y-2'>
            <div className='bg-base-200 rounded-lg w-full flex justify-center p-4'>
                {/* <img src={logo} alt="" /> */}
                <h3 className="text-5xl font-black">The Dragon News</h3>
            </div>
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;