import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex ">
            <button className='btn btn-primary mr-4'>Breaking News</button>
            <Marquee pauseOnHover={true} direction="reght" speed={50}>
                <Link to="/" className="mr-8">css has destroyed a web developers life.</Link>
                <Link to="/" className="mr-8">css ke jtota para jaii ignore kora uchit</Link>
                <Link to="/" className="mr-8">I can be a React component,</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;