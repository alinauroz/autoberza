import Header from '@/components/Header/Header';
import Footer from '@/components/PostAd/sub/Footer';
import '../styles/postAd.css';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="h-96">
        <h1 className="AutoBerza Home"></h1>
      </div>
      <Footer />
    </main>
  );
}
