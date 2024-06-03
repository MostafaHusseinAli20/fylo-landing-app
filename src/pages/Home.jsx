import Feature from '../components/Feature';
import GetStarted from '../components/GetStarted';
import Landing from '../components/Landing'
import StayProdactive from '../components/StayProdactive';
import Testimonials from '../components/Testimonials';
function Home() {
    return ( 
        <>
            <Landing/>
            <Feature/>
            <StayProdactive/>
            <Testimonials/>
            <GetStarted/>
        </>
     );
}

export default Home;