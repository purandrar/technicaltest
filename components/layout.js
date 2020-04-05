import Header from './Header';
import Footer from './Footer'
import "../styles/style.css"
const layoutStyle = {
    border: '1px solid #DDD',
    backgroundColor: '#EDFCF5'
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
        <Footer />
    </div>
);

export default Layout;