import Footer from './Footer'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = (props) => {
    const page = props.page;
    console.log('page', page);
    const renderPage = () => {
        return <div><Navbar />
            <Sidebar /></div>;
    }
    return (
        <div>

            {(() => {
                if (page != 'login') {
                    return <div>
                        <Sidebar />
                        <Navbar />
                        {props.children}
                        <Footer />
                    </div>;
                } else {
                    return <div>

                        {props.children}
                    </div>;
                }
            })()}

        </div>
    );
}

export default Layout;