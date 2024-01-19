import '../styles/globals.css'; // Import global CSS
import Layout from '../components/layout'; // Adjust path if needed

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
